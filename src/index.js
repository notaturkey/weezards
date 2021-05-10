import Phaser from 'phaser';
//import logoImg from './assets/logo.png';
import Run from './assets/player/Run.png';
import RunLeft from './assets/player/Runleft.png';
import Idle from './assets/player/Idle.png';
import Floor from './assets/world/singleTile.png';

class MyGame extends Phaser.Scene {
    constructor () {
        super();
    }

    preload () {
        //this.load.image('logo', logoImg);
        this.load.spritesheet('runRight', Run, { frameWidth: 231, frameHeight: 190 });
        this.load.spritesheet('runLeft', RunLeft, { frameWidth: 231, frameHeight: 190 });
        this.load.spritesheet('idle', Idle, { frameWidth: 231, frameHeight: 190 });
        this.load.spritesheet('floor', Floor, { frameWidth: 47, frameHeight: 47 });
    }

    create () {
      this.anims.create({
          key: "runRight",
        frameRate: 20,
        frames: this.anims.generateFrameNumbers("runRight", { start: 0, end: 7 }),
        repeat: -1
      });
      this.anims.create({
        key: "runLeft",
        frameRate: 20,
        frames: this.anims.generateFrameNumbers("runLeft", { start: 0, end: 7 }),
        repeat: -1
      });
      this.anims.create({
        key: "idle",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("idle", { start: 0, end: 5 }),
        repeat: -1
      });
      this.wiz = this.physics.add.sprite(100, 100, "idle");
      this.wiz.body.setSize(35, 90);
      this.wiz.body.setOffset(90, 50);
      this.wiz.setGravityY(500);
      this.floor = this.physics.add.sprite(100, 200, "floor");
      this.floor.setImmovable(true);
      this.physics.add.collider(this.wiz, this.floor);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.key = this.input.keyboard.addKey(' ');
    }

  update() {
    if (this.cursors.up.isDown){
      console.log("here");
      this.wiz.y -=40;
    }
    if (this.cursors.left.isDown){
      this.wiz.anims.play('runLeft', true);
      this.wiz.x -=5;
    }
    else if (this.cursors.right.isDown){
      //wiz.setVelocityX(160);
      this.wiz.anims.play('runRight', true);
      this.wiz.x+=5;
    }
    else{
      //wiz.setVelocityX(0);
      this.wiz.anims.play('idle',true);
    }
  }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug:true,
            gravity: {
              //y: 200
           }
        }
    },
    scene: MyGame
};

const game = new Phaser.Game(config);
