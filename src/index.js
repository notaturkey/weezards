// this file will boot the main game with all the scenes 
import Phaser from 'phaser';
import MainMenu from './menu.js';
import StartingPoint from './startingPoint.js';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 750,
    height: 800,
    physics: {
      default: 'arcade',
      arcade: {
        debug:true
        }
    },
    scene: [MainMenu,StartingPoint]
  };
  
const game = new Phaser.Game(config);