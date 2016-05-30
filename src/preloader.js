define([
    'phaser', 'map', 'settings'
], function (Phaser, Map, settings) { 
    'use strict';

    var Preloader = {
        preload: function() {
            // this.scale.pageAlignHorizontally = true;
            // this.scale.pageAlignVertically = true;
            
            Map.makeTileset(this.game, 'tileset');
        },
        create: function() {
            this.stage.backgroundColor = settings.backgroundColor;
            this.state.start('Game');
        }
    };
    
    return Preloader;
});
