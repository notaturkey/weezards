# weezards
## Overview 
Testing out using node.js to host a webserver running a web game using the [phaser.io](https://phaser.io/) game engine. 
Right now i have some spritesheets to play with to test out how this game engine works but i'm thinking i wanna make a 4 player coop
rpg thats top down kinda like pokemon where the wizards fight stuff in a turn based fashion and have multiple spells/attacks/items to use
and a bunch of things to interact with

## setup 
1. Open your terminal
1. clone this repo, something like `git clone <the url>`
1. install node.js
1. installl npm
1. go to parent directory with package.js in it and run `npm install` this will install all the dependencies needed
1. use the `node app.js` command to start the web server 
1. go to http://localhost:3000/home to see the game 

## General Overview 
### app.js
this is the main file starting the webserver and linking all the junk together

### api/ 
routing to different landing pages happens here, eventually when it can handle multiplayer this is where all that logic will be 

### game/ 
This is the where the game engine is running and gets sent to the .html

### views/
This is the landing page that the game is being linked to
