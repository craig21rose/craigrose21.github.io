/// <reference path="../objects/button.ts" />
/// <reference path="../objects/asteroid.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module states {
    export function normalState() {
        space.update();
        star.update();
        ship.update();
        
        //displays the varying number of asteroids that will appear
        for (var count = 1; count < constants.ASTEROID_NUM2; count++) {
            asteroids[count].update();
        }
                
        //displays the varying number of enemy ships that will appear
        for (var count = 0; count < constants.BOSS_NUM3; count++) {
            boss[count].update();
        }

        collision.update();
        scoreboard.update();

        //changes game state to the game over state when durability reaches 0
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            ship.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function normalPlay(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        star = new objects.Star(stage, game);
        ship = new objects.Ship(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple asteroids
        for (var count = 0; count < constants.ASTEROID_NUM2; count++) {
            asteroids[count] = new objects.Asteroid(stage, game);
        }

        // Create multiple enemy ships
        for (var count = 0; count < constants.BOSS_NUM3; count++) {
            boss[count] = new objects.Boss(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(ship, star, asteroids, boss, scoreboard);

        stage.addChild(game);
    }
}