/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/asteroid.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />
// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template
var states;
(function (states) {
    function gameOverState() {
        space.update();
    }
    states.gameOverState = gameOverState;
    //Restart Game when Try Again Button is clicked
    //Game is restarted to the Main Menu For Difficulty Selection
    function tryAgainClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }
    states.tryAgainClicked = tryAgainClicked;
    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);
        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "Final Score");
        game.addChild(finalScoreLabel);
        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);
        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);
        stage.addChild(game);
    }
    states.gameOver = gameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map