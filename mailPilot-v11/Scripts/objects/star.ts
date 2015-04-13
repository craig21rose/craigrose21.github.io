/// <reference path="../managers/asset.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module objects {
    // Star Class
    export class Star {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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

        public update() {
            this.image.y += this.dy;

            this._checkBounds();
        }

        // Reset position of Star to the left
        public reset() {
            this.image.y = -this.height;
            this.image.x = Math.floor(Math.random() * 640);
        }

        // PRIVATE METHODS 
        private _checkBounds() {
            // check if Star has left the screen
            if (this.image.y >= (480 + this.height)) {
                this.reset();
            }
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}