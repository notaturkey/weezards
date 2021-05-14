import Phaser from 'phaser';
import bgMusic from './assets/audio/menu.mp3';

export default class MainMenu extends Phaser.Scene {
    constructor () {
        super('mainmenu');
    }

    preload () {
        this.load.audio('bgMusic', bgMusic, './assets/audio/menu.mp3')
       
    
    }
    
    create () {
        let menuKey= this.sound.add('bgMusic', {loop: false});
        menuKey.play();
        let clickCount =0 ;
        this.clickCountText = this.add.text(100, 200, '');
        const helloButton = this.add.text(100, 100, 'click me', { fill: '#0f0' });
        helloButton.setInteractive();  

        helloButton.on('pointerover', () => { console.log('pointerover'); });
        helloButton.on('pointerdown', () => this.updateClickCountText(++clickCount));
     
        
       
    }

    

    updateClickCountText(clickCount) {
        this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
        console.log("hit");
        this.scene.start("myGame");
       
    }
  
    update() {  
    }
};
