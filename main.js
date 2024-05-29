mustachex=0;
mustachey=0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,400,400);
    image("https://static.vecteezy.com/system/resources/previews/013/789/914/non_2x/moustaches-colors-bright-set-on-dark-background-vector.jpg",mustachex,mustachey,80,65);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        mustachex=results[0].pose.nose.x-30;
        console.log("nose y: "+results[0].pose.nose.y);
        mustachey=results[0].pose.nose.y;
    };
}
