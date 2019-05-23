from bioblend.galaxy import GalaxyInstance

gi = GalaxyInstance('https://usegalaxy.org/', key='6318b54d7bfad1576df68c2b8878d344')
unnamed = '225c0dc9895cba28'

gi.tools.upload_file('./test.fastq', unnamed)