//Create variables here
var gameState=0;
var playerCount=0;
var player,game,form;
var bows, bow1, bow2, arrows, arrow1, arrow2;
var allPlayers;
var balloon1Img, balloon2Img, balloon3Img, balloon4Img, balloon5Img, balloon6Img, balloon7Img, balloonGroup, balloons;

function preload()
{
  //load images here
  arrowImg=loadImage("images/Arrow.png");
  bowImg=loadImage("images/Bow.png");
  backgroundImg=loadImage("images/background.jpg");
  balloon1Img=loadImage("images/blueBalloon.png");
  balloon2Img=loadImage("images/greenBalloon.png");
  balloon3Img=loadImage("images/pinkBalloon.png");
  balloon4Img=loadImage("images/yellowBalloon.png");
  balloon5Img=loadImage("images/purpleBalloon.png");
  balloon6Img=loadImage("images/redBalloon.png");
  balloon7Img=loadImage("images/balloonGroup.png");
  balloonGroup=new Group();
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
  





