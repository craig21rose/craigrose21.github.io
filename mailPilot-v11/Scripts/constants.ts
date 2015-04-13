// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var NORMAL_STATE: number = 2;
    export var HARD_STATE: number = 3;
    export var INSTRUCTION_STATE: number = 4;
    export var DIFFICULTY_STATE: number = 5;
    export var GAME_OVER_STATE: number = 6;

    // Game Constants
    export var ASTEROID_NUM: number = 2;
    export var ASTEROID_NUM2: number = 3;
    export var BOSS_NUM2: number = 1;
    export var BOSS_NUM3: number = 2;
    export var LABEL_FONT = "30px Times New Roman";
    export var LABEL_COLOUR = "#FFFFFF";
    export var SHIP_LIVES = 100;
}