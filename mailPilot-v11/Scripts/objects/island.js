/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Island = (function () {
        function Island(stage, game) {
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
        Island.prototype.update = function () {
            this.image.x += this.dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Island.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * 640);
            this.image.x = -this.height;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Island.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.image.x >= (640 + this.height)) {
                this.reset();
            }
        };
        Island.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Island;
    })();
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map