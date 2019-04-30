# README

Prequisite:
1. [Docker](http://docker.com)
2. [NodeJS](http://nodejs.org)
___
Created for learn purpose.

I learn how to use redis and implement on NodeJS using IORedis

I add `docker-compose.yml` file to test redis server without install on your local system.
___

## First clone 
Install node modules
```
npm install
```
___
## How to start
To use start redis server with docker-compose:
```
docker-compose up -d
```

`redis-docker` will created as container for redis server.

To run redis-cli, just type on your terminal/command prompt :
```
docker exec -it redis-docker redis-cli
```

Run app
```
npm start
```

