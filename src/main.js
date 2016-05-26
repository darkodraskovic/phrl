(function () {
    'use strict';

    requirejs.config({
        baseUrl: "src/",
        
        paths: {
            //  Edit the below path to point to where-ever you have placed the phaser.min.js file
            underscore: 'libs/underscore',
            phaser: 'libs/phaser',
            rot: 'libs/rot'
        },

        shim: {
            'phaser': {
                exports: 'Phaser'
            }
        }
    });
 
    require(['phaser', 'preloader', 'game'], function (Phaser, Preloader, Game) {
        // var game = new Game();
        // game.start();
        
        var game = new Phaser.Game(800, 640, Phaser.AUTO, '');
        
        game.state.add('Preloader', Preloader);
        game.state.add('Game', Game);

        game.state.start('Preloader');
    });
}());
