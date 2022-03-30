# react-base-v4 with Micro-frontend

Reference to [this](https://micro-frontends.org/).

## Prerequisites
* Docker

## Services
* mainapp: A React 17 made WebComponent and with babel WebComponent and act as Parent APP;
* child: A React 17 made WebComponent and with babel WebComponent and act as Child APP;

## Running
```
in directory of react-base-v4
$ cd mainapp && npm start
------------or-------------
$ docker build -t mainapp-image && docker docker run -p 3005:3005 mainapp-image

in directory of react-base-v4
$ cd child && npm start
```
> It must both running, can't running alone either mainapp or child.


## Then
* After both is running, open [http://localhost:3005](http://localhost:3005) to view it in your browser:
1. mainapp will initialize;
* And open [http://localhost:3006](http://localhost:3006) to view it in your browser and:
1. child will initialize;
