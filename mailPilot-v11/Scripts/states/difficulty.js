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
var states;
(function (states) {
    //switches state to easy gameplay state
    function easyButtonClicked(event) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.easyButtonClicked = easyButtonClicked;
    //switches state to normal gameplay state
    function normalButtonClicked(event) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.NORMAL_STATE;
        changeState(currentState);
    }
    states.normalButtonClicked = normalButtonClicked;
    //switches state to hard gameplay state
    function hardButtonClicked(event) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.HARD_STATE;
        changeState(currentState);
    }
    states.hardButtonClicked = hardButtonClicked;
    function difficultyState() {
        space.update();
        ship.update();
    }
    states.difficultyState = difficultyState;
    function difficulty() {
        var gameNameLabel;
        var gameNameLabel2;
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
    states.difficulty = difficulty;
})(states || (states = {}));
//# sourceMappingURL=difficulty.js.map