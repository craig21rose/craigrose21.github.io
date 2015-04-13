/// <reference path="../objects/asteroid.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private ship: objects.Ship;
        private star: objects.Star;
        private asteroids = [];
        private boss = [];
        private scoreboard: objects.Scoreboard;

        constructor(ship: objects.Ship, star: objects.Star, asteroids,boss, scoreboard: objects.Scoreboard) {
            this.ship = ship;
            this.star = star;
            this.asteroids = asteroids;
            this.boss = boss;
            this.scoreboard = scoreboard;
          
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        // check collision between ship and any asteroid object
        private shipAndAsteroid(asteroids: objects.Asteroid) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = asteroids.image.x;
            p2.y = asteroids.image.y;
            if (this.distance(p1, p2) < ((this.ship.height * 0.5) + (asteroids.height * 0.5))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 10;
                asteroids.reset();
            }
        }

        // check collision between ship and star
        private shipAndStar() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = this.star.image.x;
            p2.y = this.star.image.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (this.star.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 200;
                this.star.reset();
            }
        }

        // check collision between ship and any enemy object
        private shipAndEnemy(boss: objects.Boss) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = boss.image.x;
            p2.y = boss.image.y;
            if (this.distance(p1, p2) < ((this.ship.height * 0.5) + (boss.height * 0.5))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 30;
                this.scoreboard.score *= 0.5;
                boss.reset();
            }
        }

        // check collision between enemy and star
        private EnemyAndStar(boss: objects.Boss) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = boss.image.x;
            p1.y = boss.image.y;
            p2.x = this.star.image.x;
            p2.y = this.star.image.y;
            if (this.distance(p1, p2) < ((boss.height / 2) + (this.star.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score -= 100;
                this.star.reset();
            }
        }
        // Utility Function to Check Collisions for varying number of asteroids and enemies.
        update() {

            for (var count = 0; count < constants.ASTEROID_NUM; count++)
            {
                this.shipAndAsteroid(this.asteroids[count])
            }

            for (var count = 0; count < constants.ASTEROID_NUM2; count++) {
                this.shipAndAsteroid(this.asteroids[count]);
            }
    
            for (var count = 0; count < constants.BOSS_NUM2; count++) {
                this.shipAndEnemy(this.boss[count]);
                this.EnemyAndStar(this.boss[count]);
            }
            for (var count = 0; count < constants.BOSS_NUM3; count++) {
                this.shipAndEnemy(this.boss[count]);
                this.EnemyAndStar(this.boss[count]);
            }
             this.shipAndStar();          
        }
    }
} 