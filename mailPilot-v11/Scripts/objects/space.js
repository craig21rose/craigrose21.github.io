/// <reference path="../managers/asset.ts" />
// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template
var objects;
(function (objects) {
    // Space Class
    var Space = (function () {
        function Space(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("space"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            this.dy = 5;
            game.addChild(this.image);
        }
        //reset scrolling of background to start from the left
        Space.prototype.update = function () {
            this.image.y += this.dy;
            this._checkBounds();
        };
        Space.prototype.reset = function () {
            this.image.y = -225;
            this.image.x = 0;
        };
        Space.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        Space.prototype._checkBounds = function () {
            // check if background has left the bottom of the screen
            if (this.image.y === 0) {
                this.reset();
            }
        };
        return Space;
    })();
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map