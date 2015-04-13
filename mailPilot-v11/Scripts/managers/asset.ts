// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "space", src: "assets/images/background.jpg" },
        { id: "star", src: "assets/images/goldenstar.png" },
        { id: "ship", src: "assets/images/spaceship.png" },
        { id: "asteroid", src: "assets/images/asteroid.png" },
        { id: "boss", src: "assets/images/starship.jpg" },
        { id: "engine", src: "assets/sounds/RocketThrusters.ogg" },
        { id: "thunder", src: "assets/sounds/explosion.mp3" },
        { id: "yay", src: "assets/sounds/power.mp3" }
    ];

    // ButtonPage Data Sheet
    //Display images based on locations on image
    var spriteSheetData = {
        "images": ["assets/images/buttonpage.png"],
        "frames": [
            [160, 43, 153, 39],
            [2, 84, 153, 39],
            [2, 2, 185, 39],
            [2, 43, 156, 39],
            [189, 2, 182, 39],
            [157, 84, 153, 39],
            [312, 84, 153, 39]
        ],
        "animations": {

            "EasyMode": [0],
            "HardMode": [1],
            "NormalMode": [2],
            "tryAgainButton": [3],
            "instructionsButton": [4],
            "menuButton": [5],
            "playButton": [6]

        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 