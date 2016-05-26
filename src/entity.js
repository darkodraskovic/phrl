define([
    'phaser', 'settings'
], function (Phaser, settings) { 
    'use strict';

    var Entity = function (game, x, y, char, map, group, style) {
        this.map = map;
        this.tileMap = map.tileMap;
        
        style = style || settings.textStyle;
        
        Phaser.Text.call(this, game,
                         x * this.tileMap.tileWidth, y * this.tileMap.tileHeight,
                         char, style);
        
        if (group) {
            group.add(this);
        }

        this.mapX = x;
        this.mapY = y;
    };
    Entity.prototype = Object.create(Phaser.Text.prototype);
    Entity.prototype.constructor = Entity;

    Entity.prototype.move = function(dx, dy) {
        var destX = this.mapX + dx;
        var destY = this.mapY + dy;
        var tile = this.tileMap.getTile(destX, destY);
        if (!tile.solid) {
            this.mapX = destX;
            this.mapY = destY;
            this.x = this.mapX * this.tileMap.tileWidth;
            this.y = this.mapY * this.tileMap.tileHeight;
        }
    };

    return Entity;
});
