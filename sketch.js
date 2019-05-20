let RectX = 30;
let RectY = 30;

let CirkX = 300;
let CirkY = 300;



let CanvX = 400;
let CanvY = 400;

function setup() {
    createCanvas(CanvX, CanvY);
}

function draw() {
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
    function borders(){
        //Stops the rectangle from passing the line
        if(CirkX === 215){
          CirkX += 5;
        }  
        //Stops the rectangle from passing the line
        if(RectX == 175){
          RectX -= 5;
        }
      
        //Stopa skiten från att springa från skärmen
       if(RectX === width-width-5){
           RectX += 5;
       }
       if(CirkX === width-10){
         CirkX -= 5;
       }
      if(RectY === height-height-5){
         RectY += 5;
      }
      if(RectY === height-25){
        RectY -= 5;
      }
      if(CirkY === height-height+10){
        CirkY +=5;
      }
      if(CirkY === height-15){
        CirkY -=5;
      }
    }
 //FIXA KULAN FFS 
    let BulletRX = RectX+RectX/2;
    let BulletRY = RectY+RectY/2;
  
function PewPew() {
  if (keyCode === SHIFT) {
    circle(BulletRX,BulletRY,5);
   // BulletRX += 5;
    
  } 
}

    
    rectMove();
    cirkMove();
    borders();
    clear();
    background(220);
    stroke(255,0,255);
    line(200, 0, 200, 400);
    stroke(0);
    //circle(BulletRX,BulletRY,5)
    rect(RectX, RectY, 30, 30);
    stroke(0);
    circle(CirkX, CirkY, 18);
    PewPew();
}