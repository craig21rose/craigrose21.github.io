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
    //switches state to easy gameplay state
    export function easyButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    //switches state to normal gameplay state
    export function normalButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.NORMAL_STATE;
        changeState(currentState);
    }
    //switches state to hard gameplay state
    export function hardButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.HARD_STATE;
        changeState(currentState);
  
    }

    export function difficultyState() {
        space.update();
        ship.update();
    }

    export function difficulty() {
        var gameNameLabel: objects.Label;
        var gameNameLabel2: objects.Label;
   

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        ship = new objects.Ship(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "STAR CHASERS");
        game.addChild(gameNameLabel);
        
        //Display Difficulty Label 
        gameNameLabel2 = new objects.Label(stage.canvas.width / 2, 120, "Choose your Level of Difficulty:");
        game.addChild(gameNameLabel2);

        // Display Easy Mode Button
        easyButton = new objects.Button(stage.canvas.width / 2, 250, "EasyMode");
        game.addChild(easyButton);
        easyButton.addEventListener("click", easyButtonClicked);

        // Display Normal Mode Button
        normalButton = new objects.Button(stage.canvas.width / 2, 300, "NormalMode");
        game.addChild(normalButton);
        normalButton.addEventListener("click", normalButtonClicked);

        // Display Hard Mode Button
        hardButton = new objects.Button(stage.canvas.width / 2, 350, "HardMode");
        game.addChild(hardButton);
        hardButton.addEventListener("click", hardButtonClicked);

        stage.addChild(game);
    }
}  