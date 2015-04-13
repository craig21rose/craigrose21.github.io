/// <reference path="../managers/asset.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module objects {
    // Space Class
    export class Space {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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
        update() {
            this.image.y += this.dy;

            this._checkBounds();
        }

        reset() {
            this.image.y = -225
            this.image.x = 0;
        }

        destroy() {
            game.removeChild(this.image);
        }
        private _checkBounds() {
            // check if background has left the bottom of the screen
            if (this.image.y === 0) {
                this.reset();
            }
        }
    }

}