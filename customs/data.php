<?php

use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Directus\Services\ItemsService;
use Zend\Db\Sql\Expression;

return [
    'tissue-data' => [
        'method' => 'POST',
        'handler' => function (Request $request, Response $response) {
            $tissueID = $request->getParam('tissueId');
            $amount = $request->getParam('amount');
            if($tissueID < 1 or $amount < 1){
                return $response->isClientError();
            }
            $container = \Directus\Application\Application::getInstance()->getContainer();
            $dbConnection = $container->get('database');

            $tableGateway = new \Zend\Db\TableGateway\TableGateway('directus_users', $dbConnection);

            $select = new \Zend\Db\Sql\Select();
            $select->from('transcript_mv');
            $select->where('tissue',$tissueID);
            $select->order('count_avg DESC');
            $select->limit($amount);
            $genes = $tableGateway->selectWith($select);
            $geneIds = array();
            $genes = $genes->toArray();
            foreach ($genes as $key => $value){
                array_push($geneIds, $value['gene']);
            }
            $select = new \Zend\Db\Sql\Select('transcript');
            $select->columns(array('tissue', 'gene', 'stage', 'count'));
            $select->where->in('gene', $geneIds);
            $result = $tableGateway->selectWith($select);
            $counts = $result->toArray();
            return $response->withJson([
                'counts'=> $counts,
                'genes'=> $genes
            ]);
        }
    ],
    '/datetime' => [
        'group' => true,
        'endpoints' => [
            '/date[/{when}]' => [
                'method' => 'GET',
                'handler' => function (Request $request, Response $response) {
                    $when = $request->getAttribute('when');

                    $datetime = new DateTime();
                    switch ($when) {
                        case 'yesterday':
                            $datetime->modify('-1 day');
                            break;
                        case 'tomorrow':
                            $datetime->modify('+1 day');
                            break;
                        default:
                            // When empty we fallback to 'today' option
                            if (!empty($when)) {
                                throw new \Directus\Exception\Exception(
                                    sprintf(
                                        'Unknown: %. Options available: %s',
                                        $when, implode(['today', 'yesterday', 'tomorrow'])
                                    )
                                );
                            }
                    }

                    return $response->withJson([
                        'data' => [
                            'date' => $result = $datetime->format('Y-m-d')
                        ]
                    ]);
                }
            ],
            '/time' => [
                'handler' => function ($request, $response) {
                    return $response->withJSON([
                        'data' => [
                            'time' => date('H:i:s', time())
                        ]
                    ]);
                }
            ]
        ]
    ]
];
