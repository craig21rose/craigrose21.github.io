/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/asteroid.ts" />
/// <reference path="objects/star.ts" />
/// <reference path="objects/boss.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/ship.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/difficulty.ts" />
/// <reference path="states/normal.ts" />
/// <reference path="states/hard.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

//VARIABLES
var stage: createjs.Stage;
var game: createjs.Container;

var space: objects.Space;
var ship: objects.Ship;
var star: objects.Star;
var boss = []; //Boss Array
var asteroids = []; // Asteroids array;
var scoreboard: objects.Scoreboard;

var collision: managers.Collision;

var tryAgain: objects.Button;
var playButton: objects.Button;
var instructionsButton: objects.Button;
var menuButton: objects.Button;
var easyButton: objects.Button;
var normalButton: objects.Button;
var hardButton: objects.Button;

var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}

//State Change Function 
function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate easy play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.NORMAL_STATE:
            // instantiate normal play screen
            currentStateFunction = states.normalState;
            states.normalPlay();
            break;

        case constants.HARD_STATE:
            // instantiate hard play screen
            currentStateFunction = states.hardState;
            states.hardPlay();
            break;

        case constants.INSTRUCTION_STATE:
            // instantiate instruction screen
            currentStateFunction = states.instructionState;
            states.instructions();
            break;

        case constants.DIFFICULTY_STATE:
            // instantiate difficulty screen
            currentStateFunction = states.difficultyState;
            states.difficulty();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}





