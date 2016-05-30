define([
    'underscore', 'phaser'
], function (underscore, Phaser) { 
    'use strict';

    var input = {
        set: function(game, player) {
            this.game = game;
            this.player = player;
            
            this.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
            this.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
            this.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
            this.down = game.input.keyboard.addKey(Phaser.Keyboard.S);

            this.bind(Phaser.Keyboard.A, 'left');
            this.bind(Phaser.Keyboard.D, 'right');
            this.bind(Phaser.Keyboard.W, 'up');
            this.bind(Phaser.Keyboard.S, 'down');

            // Time
            this.idle = true;
            this.wait = 0;
            this.turn = false;
            this.game.input.keyboard.onPressCallback = function(event) {
                if (this.idle) {
                    this.wait = 200;
                    this.idle = false;
                    this.turn = true;
                }
            }.bind(this);
        },
        bind: function(key, action) {
            this.keys = this.keys || [];
            this.keys[key] = action;
            this.actions = this.actions || {};
            this.actions[action] = false;
            var k = this.game.input.keyboard.addKey(key);
            k.onDown.add(this.setAction, this, 0, action, true);
            k.onUp.add(this.setAction, this, 0, action, false);
        },
        setAction: function(key, action, state) {
            this.actions[action] = state;
            if (!state) {
                if (!_.contains(this.actions, true)) {
                    this.wait = 0;
                    this.idle = true;
                    this.turn = false;
                };
            }
        },
        update: function(state) {
            this.wait -= this.game.time.elapsedMS;
            if (this.wait < 0 && !this.idle) {
                this.turn = true;
                this.wait = 25;
            }
            
            var player = this.player;
            
            if (this.turn) {
                if (this.actions['up'])
                {
                    player.move(0,-1);
                }
                else if (this.actions['down'])
                {
                    player.move(0,1);
                }

                if (this.actions['left'])
                {
                    player.move(-1,0);
                }
                else if (this.actions['right'])
                {
                    player.move(1,0);
                }
                this.turn = false;

            }
            
            this.game.input.keyboard.clearCaptures();
        }
    };
    
    return input;
});
