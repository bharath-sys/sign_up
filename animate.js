var cSpeed=13;
var cWidth=600;
var cHeight=150;
var cTotalFrames=5;
var cFrameWidth=600;
var cImageSrc='images/sprites.png';

var cImageTimeout=false;

function startAnimation(){

  document.getElementById('loaderImage').innerHTML='<canvas id="canvas" width="'+cWidth+'" height="'+cHeight+'"><p>Your browser does not support the canvas element.</p></canvas>';

  //FPS = Math.round(100/(maxSpeed+2-speed));
  FPS = Math.round(100/cSpeed);
  SECONDS_BETWEEN_FRAMES = 1 / FPS;
  g_GameObjectManager = null;
  g_run=genImage;

  g_run.width=cTotalFrames*cFrameWidth;
  genImage.onload=function (){cImageTimeout=setTimeout(fun, 0)};
  initCanvas();
}


function imageLoader(s, fun)//Pre-loads the sprites image
{
  clearTimeout(cImageTimeout);
  cImageTimeout=0;
  genImage = new Image();
  genImage.onload=function (){cImageTimeout=setTimeout(fun, 0)};
  genImage.onerror=new Function('alert(\'Could not load the image\')');
  genImage.src=s;
}

//The following code starts the animation
new imageLoader(cImageSrc, 'startAnimation()');
