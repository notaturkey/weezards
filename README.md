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
1. use the `npm start` command to start the web server  

## General Overview
look in /src and the index.js is doing alot of the work. Once you make changes in there and save
webpack will automatically recompile your changes. All the game objects are in /src/assets

dont fuck up and push shit to the master branch, make a branch and make pull requests, google it
