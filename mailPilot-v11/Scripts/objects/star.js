/// <reference path="../managers/asset.ts" />
// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template
var objects;
(function (objects) {
    // Star Class
    var Star = (function () {
        function Star(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("star"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dy = 5;
            game.addChild(this.image);
        }
        Star.prototype.update = function () {
            this.image.y += this.dy;
            this._checkBounds();
        };
        // Reset position of Star to the left
        Star.prototype.reset = function () {
            this.image.y = -this.height;
            this.image.x = Math.floor(Math.random() * 640);
        };
        // PRIVATE METHODS 
        Star.prototype._checkBounds = function () {
            // check if Star has left the screen
            if (this.image.y >= (480 + this.height)) {
                this.reset();
            }
        };
        Star.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Star;
    })();
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map