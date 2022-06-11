const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');

const W = $canvas.width;
const H = $canvas.height;

const gravity = 2;
const maxspeed= 30;

let loopCount= 0;
let score=0;
 let gameOverImage
const image = document.createElement("img"); // <img>
    image.src ="https://res.cloudinary.com/du5v6izdd/image/upload/v1654944939/Game/game-over_e1esvu.png"; // telechargement GO
    image.onload = () => {
      gameOverImage = image;
    };

let obstacles=[];

const img = document.createElement('img')

document.getElementById('start-button').onclick =()=>{
  startGame();
}

const backgroundImage = {
  img: img,
  x:-10, // commence direct a droite (evite un flash degeu)
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    ctx.drawImage(this.img, this.x + canvas.width, 0);
  },
};

function updateCanvas() { 
  backgroundImage.move();
  backgroundImage.draw();
}

img.onload = updateCanvas;

//img.src = 'https://res.cloudinary.com/du5v6izdd/image/upload/v1654349713/Game/background1_nzrzkx.png';
img.src ='https://res.cloudinary.com/du5v6izdd/image/upload/v1654706539/Game/raw3layerBackground_dc1yiy.png'

// test background// 
var mimich = new Melanchon()

function draw (){
  ctx.clearRect(0, 0, W, H)//on commence par tous efface 
  mimich.update()//on update la position de Melanchon
  updateCanvas()
  mimich.paint();//on imprime a lecran
  obstacles.forEach(element => {
    element.x -= 3.5
    element.drawObstacle()
  });
  
}
const pressed = {
  arrowup: false,
  arrowleft: false,
  arrowright: false,//on set les touch forcement sur flase pour eviter la repetition
}
document.onkeydown = function (e) {
  switch (e.keyCode) {
 
    case 38:
      if (pressed.arrowup) return; 
      pressed.up = true;

      mimich.jump(); 
      break;
    
    case 37:
      if (pressed.arrowleft) return;
      pressed.arrowleft = true;

      mimich.backward(); 
      break;

    case 39:
      if (pressed.arrowright) return; 
      pressed.right = true;

      mimich.forward(); 
      break;
  }
}


document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 38:
      pressed.arrowup = false;
      break;

      case 37:
      pressed.arrowleft = false;
      mimich.vx = 0;
      break;

    case 39:
      pressed.arrowright = false;
      mimich.vx = 0;
      break;
  }
}

function scoreUpdate(){
  score= Math.floor(loopCount/10);
  document.getElementById('score').innerHTML =score;
}

function checkcrash(){
  console.log("chechcrash")
   for(let i =0; i< obstacles.length;i++){
     if (obstacles[i].crashWith(mimich)) {
       return true
     }
   }
   return false
}

function animationLoop() {
  draw();

  if (loopCount%150 ===0 ) {
    obstacles.push(new Obstacle())
  }

  scoreUpdate();
  loopCount ++;
  if (!checkcrash()){
  requestAnimationFrame(animationLoop);
  }
  else {
    ctx.drawImage(gameOverImage, 0, 233, 500,234)
  }
}


function startGame(){
  requestAnimationFrame(animationLoop);
} 