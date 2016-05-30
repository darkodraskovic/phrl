define([
    'phaser', 'rot', 'settings'
], function (Phaser, rot, settings) { 
    'use strict';

    var Map = {
        makeTileset: function(game, key, tileSize, tileChars, style) {
            tileChars = tileChars || settings.tileChars;
            tileSize = tileSize || settings.tileSize;
            style = style || settings.textStyle;

            var tilesetRT = game.add.renderTexture(
                tileChars.length * tileSize, tileSize, key, true);
            
            for (var i = 0; i < tileChars.length; i++) {
                tilesetRT.renderRawXY(
                    new Phaser.Text(
                        game, 0, 0, tileChars[i], style), tileSize*i, 0);                
            }
            game.cache.addImage(key + 'lit', null, tilesetRT.getImage());

            var tsDim = new Phaser.Sprite(game, 0, 0, tilesetRT);            
            var c = Phaser.Color.getRGB(tsDim.tint);
            c.r *= settings.lightIntensity;
            c.g *= settings.lightIntensity;
            c.b *= settings.lightIntensity;
            var hexC = Phaser.Color.getColor(c.r, c.g, c.b);
            tsDim.tint = hexC;
            
            var ts = game.add.renderTexture(
                tileChars.length * tileSize, tileSize, 'tmp', true);
            ts.renderRawXY(tsDim, 0, 0);
            game.cache.addImage(key + 'dim', null, ts.getImage());
        },
        makeMap: function(game, userCallback, key, name, width, height, tileSize) {
            name = name || '';
            width = width || settings.mapWidth;
            height = height || settings.mapHeight;
            tileSize = tileSize || settings.tileSize;
            
            var tileMap = game.add.tilemap();
            tileMap.create(name, width, height, tileSize, tileSize);
            var ts_lit = tileMap.addTilesetImage('lit', key + 'lit');
            tileMap.addTilesetImage(
                'dim', key + 'dim', tileSize, tileSize, 0, 0, ts_lit.total);
            
            var mapData = new ROT.Map.Digger(width, height);
            var callback = function(x, y, value) {
                var tile = tileMap.putTile(value, x, y);
                if (value) {
                    tile.solid = true;
                    tile.transparent = false;
                }
                else {
                    tile.solid = false;
                    tile.transparent = true;
                }
                if (x === width-1 && y === height-1) {
                    userCallback({
                        'mapData': mapData,
                        'tileMap': tileMap
                    });
                }
            };
            mapData.create(callback);
        }
    };
    
    return Map;
});
