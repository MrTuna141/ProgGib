let RectX = 30;
let RectY = 30;
let RectR = 30;
let RectHP = 50;

let CirkX = 300;
let CirkY = 300;
let CirkR = 18;
let CirkHP = 50;

let CanvX = 400;
let CanvY = 400;

let bulletR = [];
let bulletC = [];



function setup() {
    createCanvas(CanvX, CanvY);

}

function draw() {

    function Bullet(PX, PY) {
        this.speed = 1.5;
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
        if (CirkX === 215) {
            CirkX += 5;
        }
        //Stops the rectangle from passing the line
        if (RectX == 175) {
            RectX -= 5;
        }

        //Stopa skiten från att springa från skärmen
        if (RectX === width - width - 5) {
            RectX += 5;
        }
        if (CirkX === width - 10) {
            CirkX -= 5;
        }
        if (RectY === height - height - 5) {
            RectY += 5;
        }
        if (RectY === height - 25) {
            RectY -= 5;
        }
        if (CirkY === height - height + 10) {
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
            stop();
            text('MrH WINS!!!', width / 2, height / 2, 1000, 1000)

        }
        textSize(12);
        text('MrS HP: ' + CirkHP, width / 1.5, 20, 500, 500)
        //<<till hitt
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

            text('MrH WINS!!!', width / 2, height / 2, 1000, 1000)

        }
        textSize(12);
        text('MrH HP: ' + RectHP, width / 6, 20, 500, 500)

    }



    rectMove();
    cirkMove();
    borders();
    clear();
    background(220);
    stroke(255, 0, 255);
    line(200, 0, 200, 400);
    stroke(0);
    rect(RectX, RectY, 30, 30);
    stroke(0);
    circle(CirkX, CirkY, CirkR);

    // MrH shoots 
    //sktjuta auto?
    if (keyIsPressed === true && key == 'v') {
        keyIsPressed = false;
        bulletR.push(new Bullet(RectX, RectY));
    }
    ShootR();

    // MrS shoots
    if (keyIsPressed === true && key == 'm') {
        keyIsPressed = false;
        bulletC.push(new Bullet(CirkX - 50, CirkY - 14));
    }
    ShootC();


}
