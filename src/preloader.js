define([
    'phaser', 'map'
], function (Phaser, Map) { 
    'use strict';

    var Preloader = {
        preload: function() {
            // this.scale.pageAlignHorizontally = true;
            // this.scale.pageAlignVertically = true;
            
            Map.makeTileset(this.game, 'tileset');
        },
        create: function() {
            this.stage.backgroundColor = "#4488AA";
            this.state.start('Game');
            console.log("Game started!");
        }
    };
    
    return Preloader;
});
