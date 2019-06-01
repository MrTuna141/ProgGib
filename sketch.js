let RectX = 30;
let RectY = 30;
let RectR = 30;

let CirkX = 300;
let CirkY = 300;
let CirkR = 18;

let CanvX = 400;
let CanvY = 400;

let bullet = [];

function setup() {
    createCanvas(CanvX, CanvY);
}

function draw() {
  
  
    if (keyIsDown(SHIFT)){
      bullet.push(new Bullet(RectX,RectY))
      console.log(bullet)
    }
  
  
  function Bullet(PX,PY){
    this.speed = 1.5;
    //PX = player position x
    this.x = PX;
    //PY = player position y
    this.y = PY;
    this.r = 5;
    
    this.show = function(){ 
      circle(this.x,this.y,this.r);
    }
    
    this.shoot = function() {
      this.x += this.x+this.speed
    }
    
    this.onScreen = function() {
      return this.x > -this.r && this.x < width+this.r &&
              this.y > -this.r && this.y < height+this.r;
    }
  }

      let keepbullets = [];
  let anyhit = false;
  for (let i = 0; i < bullet.length;i++){
    //FFS...............
    bullet[i].shoot();
    bullet[i].show();
    
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
  
    
    rectMove();
    cirkMove();
    borders();
    clear();
    background(220);
    stroke(255,0,255);
    line(200, 0, 200, 400);
    stroke(0);
    rect(RectX, RectY, 30, 30 );
    stroke(0);
    circle(CirkX, CirkY, CirkR);
    
}