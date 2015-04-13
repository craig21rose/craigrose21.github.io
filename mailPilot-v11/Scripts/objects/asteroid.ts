/// <reference path="../managers/asset.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module objects {
    // Asteroid class
    export class Asteroid {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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

        update()
        {
            this.image.y += this.dy;
            this.image.x += this.dx;

            this._checkBounds();
        }

        // Reset position of Asteroid to the left
         reset() {
             this.image.y = -this.height;
             this.image.x = Math.floor(Math.random() * 640);
             this.dy = Math.floor(Math.random() * 5) + 5;
             this.dx = Math.floor(Math.random() * 4) - 2;
}

        // PRIVATE METHODS 
         private _checkBounds()
         {
            // check if asteroid has left the screen
             if (this.image.y >= (480 + this.height))
            {
                this.reset();
            }
         }
        destroy() {
            game.removeChild(this.image);
        }
    }

}