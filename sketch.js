let RectX = 30;
let RectY = 30;
let RectR = 30;
let RectHP = 100;

let CirkX = 400;
let CirkY = 400;
let CirkR = 18;
let CirkHP = 100;

let CanvX = 600;
let CanvY = 600;

let bulletR = [];
let bulletC = [];

let end = [];


function setup() {
    createCanvas(CanvX, CanvY);

}

function draw() {

    function Bullet(PX, PY) {
        this.speed = 10;
        //PX = player position x
        this.x = PX + 30;
        //PY = player position y
        this.y = PY + 15;
        this.r = 5;

        this.show = function() {
            circle(this.x, this.y, this.r);
        }

        this.shootR = function() {
            this.x += this.speed
        }
        this.shootC = function() {
            this.x -= this.speed
        }
        this.onScreen = function() {
            return this.x > -this.r && this.x < width + this.r &&
                this.y > -this.r && this.y < height + this.r;
        }
    }

    function rectMove() {
        if (keyIsDown(87)) {
            RectY -= 5;
        }
        if (keyIsDown(68)) {
            RectX += 5;
        }
        if (keyIsDown(83)) {
            RectY += 5;
        }
        if (keyIsDown(65)) {
            RectX -= 5;
        }
    }

    function cirkMove() {
        if (keyIsDown(LEFT_ARROW)) {
            CirkX -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            CirkX += 5;
        }
        if (keyIsDown(UP_ARROW)) {
            CirkY -= 5;
        }
        if (keyIsDown(DOWN_ARROW)) {
            CirkY += 5;
        }
    }

    function borders() {
        //Stops the rectangle from passing the line
        if (CirkX === width / 2 + 15) {
            CirkX += 5;
        }
        //Stops the rectangle from passing the line
        if (RectX == width / 2 - 10) {
            RectX -= 5;
        }
        //Stopa skiten från att springa från skärmen
        if (RectX === width - width + 10) {
            RectX += 5;
        }
        if (CirkX === width - 10) {
            CirkX -= 5;
        }
        if (RectY === height - height + 10) {
            RectY += 5;
        }
        if (RectY === height - 10) {
            RectY -= 5;
        }
        if (CirkY === height - height + 20) {
            CirkY += 5;
        }
        if (CirkY === height - 15) {
            CirkY -= 5;
        }
    }

    function ShootR() {
        let keepbullets = []
        let anyhitC = false;
        for (let i = 0; i < bulletR.length; i++) {
            bulletR[i].shootR();
            let hitC = dist(bulletR[i].x, bulletR[i].y, CirkX, CirkY) <= CirkR;
            anyhitC = anyhitC || hitC;
            if (!hitC && bulletR[i].onScreen()) {
                keepbullets.push(bulletR[i]);
                bulletR[i].show();
            }
        }
        //Removes bullets thats not on screen

        bulletR = keepbullets;
        if (anyhitC) {
            CirkHP--;
        }
        //Fix end stuff
        if (CirkHP === 0) {
            noLoop();
            textSize(32);
            text('MrH WINS!!!', width / 2, height / 2, 100, 100)

        }
        textSize(12);
        fill(0);
        text('MrS HP: ' + CirkHP, width / 1.5, 20)

    }

    function ShootC() {
        let keepbullets = []
        let anyhitR = false;
        for (let i = 0; i < bulletC.length; i++) {
            bulletC[i].shootC();
            let hitR = dist(bulletC[i].x, bulletC[i].y, RectX, RectY) <= RectR;
            anyhitR = anyhitR || hitR;
            if (!hitR && bulletC[i].onScreen()) {
                keepbullets.push(bulletC[i]);
                bulletC[i].show();
            }
        }
        //Removes bullets thats not on screen

        bulletC = keepbullets;
        if (anyhitR) {
            RectHP--;
        }
        //Fix end stuff
        if (RectHP === 0) {
            noLoop();
            textSize(32);

            text('MrS WINS!!!', width / 3, height / 2);

        }
        textSize(12);
        fill(0);
        text('MrH HP: ' + RectHP, width / 6, 20)
    }

    //trying to add deathcircle?
    function endgame(x, y, r) {
        this.x = width / 2;
        this.y = height / 2;
        this.r = width;

        this.show = function() {
            noFill();
            stroke(255, 0, 255);
            rectMode(CENTER);
            rect(this.x, this.y, this.r, this.r);
            fill(255)
        }
        this.end = function() {
            this.r -= 01;
            //console.log(distance);
            console.log(r + this.r)
        }

        function check() {
            if (CirkHP <= 30 || RectHP <= 30) {
                end.push(new endgame(RectX, RectY, RectR));
                end[0].show();
                end[0].end();
            }
        }
    }
    rectMove();
    cirkMove();
    borders();
    clear();
    background(220);
    stroke(255, 0, 255);
    line(height / 2, 0, width / 2, width);
    stroke(0);
    rect(RectX, RectY, 30, 30);
    stroke(0);
    circle(CirkX, CirkY, CirkR);

    //MrH shoots
    if (keyIsPressed === true && key == 'v') {
        keyIsPressed = false;
        bulletR.push(new Bullet(RectX, RectY));
    }
    ShootR();
    //MrS shoots
    if (keyIsPressed === true && key == 'm') {
        keyIsPressed = false;
        bulletC.push(new Bullet(CirkX - 50, CirkY - 14));
    }
    ShootC();

    //Why in all of the fu*ks is the if statement screwing up the borders????hello.....
    //borders be working fine when end."insert shat" in uncommented..ffs
    //if (CirkHP <= 30 || RectHP <= 30) {
        //end.push(new endgame(RectX, RectY, RectR));
        //end[0].show();
        //end[0].end();
    //}

    fill(255);

}
