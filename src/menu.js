import Phaser from 'phaser';
import startSound from './assets/audio/menu.mp3';

export default class MainMenu extends Phaser.Scene {
    constructor () {
        super('mainmenu');
    }

    preload () {
        this.load.audio('startSound', startSound, './assets/audio/menu.mp3');
    }
    
    create () {
        const helloButton = this.add.text(100, 100, 'click me', { fill: '#0f0' });
        helloButton.setInteractive();  
        helloButton.on('pointerdown', () => this.clicked());
    }

    

    clicked() {
        let menuKey= this.sound.add('startSound', {loop: false});
        menuKey.play();
        this.scene.start("startingPoint");
    }
  
    update() {  
    }
};
