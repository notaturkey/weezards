import Phaser from 'phaser';
import world from './assets/world/world.png';
import enemy from './assets/enemy/bad.png';
import player from './assets/player/dood.png'
import guy from './assets/npc/guy.png';
export default class StartingPoint extends Phaser.Scene {
  constructor () {
    super('startingPoint');
  }

  preload () {
    //temp world
    this.load.image('world', world);
    this.load.image('player', player);
    this.load.image('enemy', enemy);
    this.load.image('guy', guy);
  }
  create () {
    //background 
    this.background = this.add.image(500, 500, 'world');
    
    //player
    this.player = this.physics.add.image(400, 300, "player");
    this.player.setCollideWorldBounds(true);
    this.player.debugShowVelocity;
    
    //npc
    this.guy = this.physics.add.image(200,300, "guy");
    this.guy.setImmovable(true);

    this.physics.add.overlap(this.player, this.guy);



    this.cameras.main.setBounds(0, 0, 1000, 1000);
    this.physics.world.setBounds(0, 0, 1000, 1000);
    this.cameras.main.centerOn(this.player.x, this.player.y);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);


    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.debug = this.add.text(100, 100, '').setOrigin(0.5);
    this.debug.setScrollFactor(0,0);
    this.notify = this.add.text(700, 100, '').setOrigin(0.5);
    this.notify.setScrollFactor(0,0);
  }
  collided() {
    this.notify.setText('overlapped');
  }

  update() {
    //movement
    //sometimes it gets stuck running?
    this.player.setVelocity(0);
    if (this.cursors.left.isDown){
      this.player.setVelocityX(-500);
    }
    else if (this.cursors.right.isDown){
      this.player.setVelocityX(500);
    }
    if (this.cursors.up.isDown){
      this.player.setVelocityY(-500);
    }
    else if (this.cursors.down.isDown){
      this.player.setVelocityY(500);
    }
    
    if(this.player.body.embedded){
      this.collided();
    }
    else{
      this.notify.setText('');
    }

    this.debug.setText(['x:'+this.player.x ,'y:'+this.player.y]);
  }
}


