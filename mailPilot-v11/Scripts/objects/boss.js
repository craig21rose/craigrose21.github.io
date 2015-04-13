/// <reference path="../managers/asset.ts" />
// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template
var objects;
(function (objects) {
    // Boss class
    var Boss = (function () {
        function Boss(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("boss"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dy = 1;
            game.addChild(this.image);
        }
        Boss.prototype.update = function () {
            this.image.y += this.dy;
            this._checkBounds();
        };
        // Reset position of Boss to the left
        Boss.prototype.reset = function () {
            this.image.y = -this.height;
            this.image.x = Math.floor(Math.random() * 640);
        };
        // PRIVATE METHODS 
        Boss.prototype._checkBounds = function () {
            // check if Boss has left the screen
            if (this.image.y >= (480 + this.height)) {
                this.reset();
            }
        };
        Boss.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Boss;
    })();
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map