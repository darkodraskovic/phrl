define([
    'phaser', 'map', 'entity', 'input', 'settings'
], function (Phaser, Map, Entity, input, settings) { 
    'use strict';

    var Game = {
        create: function() {
            Map.makeMap(this.game, this.onMapMade.bind(this), 'tileset');

            this.world.setBounds(0, 0,
                                 settings.mapWidth * settings.tileSize,
                                 settings.mapHeight * settings.tileSize);
        },
        onMapMade: function(map) {
            // console.log(map);
            // console.log(Entity);
            var group = this.add.group();

            var room = map.mapData.getRooms()[0];
            var x = room.getLeft();
            var y = room.getTop();
            var player = new Entity(this.game, x, y, '@', map, group);
            
            input.set(this.game, player);
            this.game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
            this.player = player;
        },
        update: function() {
            input.update();
        }
        
    };
    
    return Game;
});
