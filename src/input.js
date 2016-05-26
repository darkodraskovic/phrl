define([
    'phaser'
], function (Phaser) { 
    'use strict';

    var input = {
        set: function(game, player) {
            this.game = game;
            this.player = player;
            
            this.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
            this.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
            this.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
            this.down = game.input.keyboard.addKey(Phaser.Keyboard.S);

            // this.left.onDown.add(this.left, this, 0, player);
            // this.right.onDown.add(this.right, this, 0, player);
            // this.up.onDown.add(this.up, this, 0, player);
            // this.down.onDown.add(this.down, this, 0, player);
        },
        update: function() {
            var player = this.player;
            var keyboard = this.game.input.keyboard;
            
            if (this.up.isDown)
            {
                player.move(0,-1);
            }
            else if (this.down.isDown)
            {
                player.move(0,1);
            }

            if (this.left.isDown)
            {
                player.move(-1,0);
            }
            else if (this.right.isDown)
            {
                player.move(1,0);
            }
        },
        // left: function(key, entity) {
        //     entity.move(-1, 0);
        // },
        // right: function(key, entity) {
        //     entity.move(1, 0);
        // },
        // up: function(key, entity) {
        //     entity.move(0, -1);
        // },
        // down: function(key, entity) {
        //     entity.move(0, 1);
        // },
        
    };
    
    return input;
});
