const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var player, playerImg;
var leftImg, rightImg;
var direction = "left";
var bg;
var loseImg;
var helicopter1, helicopter2;
var backgroundMusic;
var killSound;
var cloud, cloudImage;
var cloudGroup1, cloudGroup2, cloudGroup3, cloudGroup4, cloudGroup5, cloudGroup6, cloudGroup7, cloudGroup8, cloudGroup9, cloudGroup10; 
var troop, troopImg1, troopImg2, troopImg3, troopGroup1, troopGroup2, troopGroup3, troop1, troop2, troop3;
var bullet, bulletImg, bulletGroup;
var explosion;
var gameState = "PLAY";
var enemiesKilled = 0, lives = 3;
var winImg, loseImg;
var k = 1;
var newTroopGroup1, newTroopGroup2, newTroopGroup3;
var invisGround;
var rockImage;
var coinModifier, coinModifierImg, coinModifierGroup;

var helicopters = []

function preload(){
  leftImg = loadImage("images/planeLeft.png");
  rightImg = loadImage("images/planeRight.png");
  bg = loadImage("images/spacebg.jpg");
  loseImg = loadImage("images/lose.png");
  cloudImage = loadImage("images/cloud.png")
  troopImg1 = loadImage("images/troop.png");
  troopImg2 = loadImage("images/troop2.png");
  troopImg3 = loadImage("images/troop3.png");
  bulletImg = loadImage("images/bomb.png")
  winImg = loadImage("images/win.png");
  loseImg = loadImage("images/lose.png");
  rockImage = loadImage("images/rock.png");
  coinModifierImg = loadImage("images/2xcoin.png");
  playerImg = loadImage("images/planeRight.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  //backgroundMusic = new sound("gametheme.mp3");
  //backgroundMusic.play();
  
  player = createSprite(0, 0, 10, 10);
  player.scale = 0.75;
  player.addImage(playerImg);
  troopGroup1 = new Group();
  troopGroup2 = new Group();
  troopGroup3 = new Group();
  newTroopGroup1 = new Group();
  newTroopGroup2 = new Group();
  newTroopGroup3 = new Group();
  bulletGroup = new Group();
  cloudGroup1 = new Group();
  cloudGroup2 = new Group();
  cloudGroup3 = new Group();
  cloudGroup4 = new Group();
  cloudGroup5 = new Group();
  cloudGroup6 = new Group();
  cloudGroup7 = new Group();
  cloudGroup8 = new Group();
  cloudGroup9 = new Group();
  cloudGroup10 = new Group();
  coinModifierGroup = new Group();
  

  for(let i =1;i<300;i+=5){
    createHeli(windowWidth/2, 0, windowWidth, 10);
  }
  for(let i =1;i<300;i+=5){
    createHeli(windowWidth/2, windowHeight, windowWidth, 10);
  }
  for(let i =1;i<100;i+=10){
    createCloud(random(windowWidth, windowWidth/100), random(windowWidth * 1.3,windowHeight*0.2), random(200,400), random(50, 125));
  }
  for(let i =1;i<100;i+=10){
    createCloud(random(windowWidth, windowWidth/100), random(windowWidth * 1.3,windowHeight*0.2), random(200,400), random(50, 125));
  }
    if(frameCount % 100 == 0){
    createRock(random(windowWidth, windowWidth/100), random(windowWidth * 1.3,windowHeight*0.2), random(200,400), random(50, 125));
    
  }
}


function draw() {
  background(bg);  
  Engine.update(engine);
  edges = createEdgeSprites();
  textSize(20);
  fill(31, 29, 29)
  text("Coins collected: " + enemiesKilled, 40, 75);
  text("LIVES: " + lives, 40, 100);


  if(gameState == "PLAY"){
      player.display();
      drawHeli();
      drawSprites(); 
      //camera.position.x = player.body.position.x;
      //translate((camera.position.x - 30 + width/2),(camera.position.y - 30 + 100))

      var rand = Math.round(random(1,3))
      if(frameCount % 15 == 0){
        createCloud(random(windowWidth, windowWidth/100), random(windowWidth * 1.1,windowHeight*0.2), random(200,400), random(50, 125));
        }
      }
      k++;

      if(keyDown("left")){
        player.x = player.x - 12;
       }
      if(keyDown("right")){
        player.x = player.x + 12;
      }
      if(frameCount % 2 == 0){
        if(keyDown("up")){  
          player.velocityY = -8;
          //player.y = player.y - 50;
        }
    }
        player.velocityY = player.velocityY + 0.3;
        //player.y = player.y + 3;

      if(lives === 0 || enemiesKilled === 100){
        gameState = "END"
      }
      if(frameCount % 50 == 0){
        createNewTroop();
      }

      if(player.isTouching(cloudGroup1)){
        cloudGroup1.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup2)){
        cloudGroup2.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup3)){
        cloudGroup3.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup4)){
        cloudGroup4.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup5)){
        cloudGroup5.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup6)){
        cloudGroup6.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup7)){
        cloudGroup7.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup8)){
        cloudGroup8.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup9)){
        cloudGroup9.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(cloudGroup10)){
        cloudGroup10.destroyEach();
        enemiesKilled++;
      }
      if(player.isTouching(coinModifierGroup)){
        coinModifierGroup.setLifetimeEach(200);
        coinModifierGroup.collide(player);

        if(player.isTouching(cloudGroup1)){
          cloudGroup1.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup2)){
          cloudGroup2.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup3)){
          cloudGroup3.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup4)){
          cloudGroup4.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup5)){
          cloudGroup5.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup6)){
          cloudGroup6.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup7)){
          cloudGroup7.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup8)){
          cloudGroup8.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup9)){
          cloudGroup9.destroyEach();
          enemiesKilled += 2;
        }
        if(player.isTouching(cloudGroup10)){
          cloudGroup10.destroyEach();
          enemiesKilled += 2;
        }
      }
      
      
  }
  if(gameState == "END"){
      if(enemiesKilled === 100){
        image(winImg, camera.position.x/2, camera.position.y/2);
      }
      else{
        image(loseImg, 0, 0, width, height);
      }
  }



function createNewTroop(){
  var troop = createSprite(k*300+random(200,400), random(windowWidth*0.05,windowHeight*0.05), 50, 50);
  troop.addImage(troopImg1);
  newTroopGroup1.add(troop);
  troop.velocityY = 1;
  troop.lifetime = windowHeight + 50;
}


