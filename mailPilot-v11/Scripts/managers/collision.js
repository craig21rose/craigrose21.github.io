/// <reference path="../objects/asteroid.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />
// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(ship, star, asteroids, boss, scoreboard) {
            this.asteroids = [];
            this.boss = [];
            this.ship = ship;
            this.star = star;
            this.asteroids = asteroids;
            this.boss = boss;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        // check collision between ship and any asteroid object
        Collision.prototype.shipAndAsteroid = function (asteroids) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = asteroids.image.x;
            p2.y = asteroids.image.y;
            if (this.distance(p1, p2) < ((this.ship.height * 0.5) + (asteroids.height * 0.5))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 10;
                asteroids.reset();
            }
        };
        // check collision between ship and star
        Collision.prototype.shipAndStar = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = this.star.image.x;
            p2.y = this.star.image.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (this.star.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 200;
                this.star.reset();
            }
        };
        // check collision between ship and any enemy object
        Collision.prototype.shipAndEnemy = function (boss) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };
        // check collision between enemy and star
        Collision.prototype.EnemyAndStar = function (boss) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = boss.image.x;
            p1.y = boss.image.y;
            p2.x = this.star.image.x;
            p2.y = this.star.image.y;
            if (this.distance(p1, p2) < ((boss.height / 2) + (this.star.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score -= 100;
                this.star.reset();
            }
        };
        // Utility Function to Check Collisions for varying number of asteroids and enemies.
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.ASTEROID_NUM; count++) {
                this.shipAndAsteroid(this.asteroids[count]);
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
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map