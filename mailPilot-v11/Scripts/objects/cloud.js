/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Cloud = (function () {
        function Cloud(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("asteroid"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        Cloud.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x += this.dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Cloud.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * 640);
            this.image.x = -this.height;
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.image.x >= (640 + this.height)) {
                this.reset();
            }
        };
        Cloud.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Cloud;
    })();
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map