//https://i.postimg.cc/7ZBcjDqp/clownnose.png

function preload() {
clowNose = loadImage('https://i.postimg.cc/h482pBVj/png-clipart-red-balloon-red-nose-clown-clothes-accessories-thumbnail.png')
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw() {
  image(video, 0, 0, 640, 480);
  stroke('red');
  fill('red');
  //circle(x,y,30);
  image(clowNose,x-17,y-17,30,30)
}

function takeSnapshot() {
  save('myFilterImage.png');
}

var x,y;

function gotPoses(results) {
  if(results.length > 0) {
    //console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    x = results[0].pose.nose.x
    y = results[0].pose.nose.y
  }
}

