/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/asteroid.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module states {
    //changes game state back to the main menu state
    export function menuButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    export function instructionState() {
        space.update();
        ship.update();
    }

    export function instructions() {
        var gameNameLabel: objects.Label;
        var gameNameLabel2: objects.Label;
        var gameNameLabel3: objects.Label;
        var gameNameLabel4: objects.Label;
        var gameNameLabel5: objects.Label;
        var gameNameLabel6: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        ship = new objects.Ship(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "COSMIC POWER");
        game.addChild(gameNameLabel);
        
        //Display Instructions Label 
        gameNameLabel2 = new objects.Label(stage.canvas.width / 2, 120, "Instructions:");
        game.addChild(gameNameLabel2);

        //Display Movement Instructions
        gameNameLabel3 = new objects.Label(stage.canvas.width / 2, 160, "Movement: Move Mouse Left or Right.");
        game.addChild(gameNameLabel3);

         //Display Gameplay Instructions
        gameNameLabel4 = new objects.Label(stage.canvas.width / 2, 200, "Avoid Asteroids and other ships to stay a live.");
        game.addChild(gameNameLabel4);

         //Display Enemy Gameplay Actions #1
        gameNameLabel5 = new objects.Label(stage.canvas.width / 2, 240, "Enemy Ships collect Star Power for themselves.");
        game.addChild(gameNameLabel5);

       //Display Enemy Gameplay Actions #2
        gameNameLabel6 = new objects.Label(stage.canvas.width / 2, 280, "Contact with Enemies allows for loss of own power.");
        game.addChild(gameNameLabel6);

        // Display Main Menu Button
        menuButton = new objects.Button(stage.canvas.width / 2, 350, "menuButton");
        game.addChild(menuButton);
        menuButton.addEventListener("click", menuButtonClicked);

        stage.addChild(game);
    }
} 