var caixinha;


function setup() {
  createCanvas(900,900);
  caixinha = createSprite (500, 500, 85, 85);

}

function draw() 
{
  background(30);
  
  drawSprites ();

  if (keyIsDown(RIGHT_ARROW)){
    caixinha.position.x = caixinha.position.x + 5;
  }

  if (keyIsDown(LEFT_ARROW)){
    caixinha.position.x = caixinha.position.x - 5;
  }

  if (keyIsDown(UP_ARROW)){
    caixinha.position.y = caixinha.position.y - 5;
  }

  if (keyIsDown(DOWN_ARROW)){
    caixinha.position.y = caixinha.position.y + 5;
  }
}




