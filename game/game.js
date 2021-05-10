var config = {
    type: Phaser.AUTO,
    width: 700,
    height: 500,
    parent: 'phaser-id',
    physics: {
        default: 'arcade',
        arcade: {
            debug:true,
            gravity: {
              //y: 200
           }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
function preload ()
{
    this.load.spritesheet('runRight', '/assets/player/Run.png', { frameWidth: 231, frameHeight: 190 });
    this.load.spritesheet('runLeft', '/assets/player/Runleft.png', { frameWidth: 231, frameHeight: 190 });
    this.load.spritesheet('idle', '/assets/player/Idle.png', { frameWidth: 231, frameHeight: 190 });
    this.load.spritesheet('floor', '/assets/world/singleTile.png', { frameWidth: 47, frameHeight: 47 });
    //this.load.image('sky', 'assets/skies/space3.png');
    //this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    //this.load.image('red', 'assets/particles/red.png');
}

function create ()
{
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
    wiz = this.physics.add.sprite(100, 100, "idle");
    wiz.body.setSize(35, 90);
    wiz.body.setOffset(90, 50);
    wiz.setGravityY(500);
    floor = this.physics.add.sprite(100, 200, "floor");
    floor.setImmovable(true);
    this.physics.add.collider(wiz, floor);
    cursors = this.input.keyboard.createCursorKeys();
    key = this.input.keyboard.addKey(' ');
}

function update(){
  if (cursors.up.isDown){
    console.log("here");
    wiz.y -=40;
  }
  if (cursors.left.isDown){
    wiz.anims.play('runLeft', true);
    wiz.x -=5;
  }
  else if (cursors.right.isDown){
    //wiz.setVelocityX(160);
    wiz.anims.play('runRight', true);
    wiz.x+=5;
  }
  else{
    //wiz.setVelocityX(0);
    wiz.anims.play('idle',true);
  }

}
