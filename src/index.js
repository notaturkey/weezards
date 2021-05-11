import Phaser from 'phaser';
//import logoImg from './assets/logo.png';
import Run from './assets/player/Run.png';
import RunLeft from './assets/player/Runleft.png';
import Idle from './assets/player/Idle.png';
import Floor from './assets/world/singleTile.png';
import bg1 from './assets/world/BG1.png';
import bg2 from './assets/world/BG2.png';
import bg3 from './assets/world/BG3.png';
class MyGame extends Phaser.Scene {
  constructor () {
    super();
  }

  preload () {
    //this.load.image('logo', logoImg);
    //player sprites 
    this.load.spritesheet('runRight', Run, { frameWidth: 231, frameHeight: 190 });
    this.load.spritesheet('runLeft', RunLeft, { frameWidth: 231, frameHeight: 190 });
    this.load.spritesheet('idle', Idle, { frameWidth: 231, frameHeight: 190 });
    this.load.spritesheet('floor', Floor, { frameWidth: 47, frameHeight: 47 });      
    
    //temp backdrop
    this.load.image('bg1', bg1);
    this.load.image('bg2', bg2);
    this.load.image('bg3', bg3);  
  }
  create () {
    //animations
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

    //background
    this.add.image(400, 300, 'bg1').setScale(3);
    this.add.image(400, 300, 'bg2').setScale(3);
    this.add.image(400, 300, 'bg3').setScale(3);     

    //player and floor
    this.wiz = this.physics.add.sprite(100, 100, "idle");
    this.wiz.body.setSize(35, 90);
    this.wiz.body.setOffset(90, 50);
    this.wiz.body.collideWorldBounds=true;
    this.floor = this.physics.add.sprite(100, 200, "floor");
    this.floor.setImmovable(true);
    this.physics.add.collider(this.wiz, this.floor);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.key = this.input.keyboard.addKey(' ');
    this.physics.world.setBoundsCollision();
  }

  update() {
    //movement
    //sometimes it gets stuck running?
    if (this.cursors.up.isDown){
      this.wiz.y -=2;
    }
    else if (this.cursors.down.isDown){
      this.wiz.y+=2;
    }
    else if (this.cursors.left.isDown){
      this.wiz.anims.play('runLeft', true);
      this.wiz.x -=2;
    }
    else if (this.cursors.right.isDown){
      this.wiz.anims.play('runRight', true);
      this.wiz.x+=2;
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
