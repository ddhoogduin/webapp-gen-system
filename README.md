# Webapp-gen-system - prototype 1.0

## About
Web-application generator system; system for rapidly creating web-based applications in a semi-automatic matter through the generic system outlay. This system is, at first, only intended for the development of bio-informatics related applications. A computation or algorithm can be integrated in the application by 'linking' the web-application with a external API. At first, **the system is only intended for linux environments**. 

## Version description
This version is mainly driven by the use of the Directus API and CMS environment. All back-end functionalities are facilitated by the Directus application. A general template is provided (wg-app-template). Currently it is only possible to make use of a direct API algorithm. The next version  of the system will support the use of Galaxy API.

## System description

The system is composed of three major components:
- **Directus Headless CMS (back-end)**: An open-source suite of software that provides an instant API wrapper for SQL databases and an intuitive Admin App for non-technical users to manage that content. The primary use of the CMS-system is the configuration for the front-end application; resulting in a highly variable visual and functional front-end application. 

- **Directus manager**: A python module intended to make it easy to regulate and manage a Directus CMS environment. Multiple Directus projects can easily be assigned to an environment with options for migration. 

- **wg-template (front-end)**, the actual web-application written in ReactJS. The application is setup in such a modular way that configuration from the back-end application (Directus) will facilitate the real time application. Optional the application can be altered.

## Getting started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Currently everything is still very experimental, this is why we use a predefined data-template to setup the system at this moment. 

### Prerequisites
The Directus suite requires a [LAMP stack](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04) in order to function. 
- Apache 
- MySQL 8.0+ 
- PHP 7.1+ 
-- Extensions: pdo, mysql, curl, gd, fileinfo, libapache2-mod-php and mbstring 

___Make sure [mod_rewrite is enabled](https://hostadvice.com/how-to/how-to-enable-apache-mod_rewrite-on-an-ubuntu-18-04-vps-or-dedicated-server/) in the Apache configuration.___ 

In order to make use of the Directus manager it is required that version of Python 3.6+ is installed. 
The wg-template is based on ReactJS and so requires [the installation of NodeJS](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/) 

### Installing & executing 
Clone repository to Apache folder (/var/www/ or /var/www/html) and initialize the submodules.
```sh
$ git clone --single-branch --branch prototype-1.0 https://github.com/ddhoogduin/webapp-gen-system.git
$ git submodule update --init --recursive
```
It may be required to give permissions to the directus folder.
```sh
$ sudo chmod -R 777 ./directus 
```
Transfer the wished data-template migration to an empty MySQL-database (located in ./data-templates).


#### Directus manager

Install the package requirements. When completed, the directus manager script can be executed.
```sh
$ cd directus-manager
$ python3 Command.py
```
Initialize the directus environment by following the configration steps. The following inputs are required:

- Envirionment name 
- Localhost database username
- Localhost database password

Within the directus envirionment menu select the option to **link a project to database**. This will generate a configuration file for a new directus project but uses an existing database instead of creating a new one. Choose a suitable name for the project. 

#### Accessing Directus suite

At this point the project can be accesed by browser following the default [Directus procedures](https://docs.directus.io/getting-started/installation.html#configure).

Without further document root configuration the link to back-end looks like: 
```
http://localhost/webapp-gen-system/directus/public/admin 
```

#### Configure the front-end

Follow [the installation instructions of the template](https://github.com/ddhoogduin/wg-app-template). When completed, link the front-end to the Directus API endpoint by use of the config script. 

```
$ bash template/config/set-wg.sh
```
The follow inputs are required:
- Project name 
- Directus project url (https://localhost/webapp-gen-system/directus/public/<PROJECT_NAME>)

When the project is successfully connected it can be launched as test server:
```sh
cd template 
npm start
```
Or as production build: https://create-react-app.dev/docs/production-build

