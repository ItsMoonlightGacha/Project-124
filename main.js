nose_X=0;
nose_Y=0;
difference=0;
rightwristX=0;
leftwristY=0;
function setup() {
    canvas=createCanvas(500,500);
    canvas.position(500,150);
    background("rgb(145, 194, 223)");
    video=createCapture(VIDEO);
    video.size(500,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  }
function modelLoaded() {
  console.log('modelLoaded');
}
function gotPoses(results) {
  if(results.length>0) {
      console.log(results);
  }
}