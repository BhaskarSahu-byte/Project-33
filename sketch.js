const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var bg;
var snowflakes = [];

function preload() {
  bg = loadImage("background.png");
};

function setup() {
  createCanvas(windowWidth + 15, windowHeight + 15);

  engine = Engine.create();
  world = engine.world;


};

function draw() {
  background(bg);

  Engine.update(engine);

 spawnSnowflakes();
  for (var j = 0; j < snowflakes.length; j++) {
    snowflakes[j].display();
  };
  
  drawSprites();
};

function spawnSnowflakes() {
    if(frameCount % 5 === 0) {
    snowflakes.push(new Snowflake(random(width/2 - 680, width/2 + 680), 0, 10));
    snowflakes.lifetime = 15;
  };
}