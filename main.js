function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,400,400);
}

function take_snapshot(){
    save("https://static.vecteezy.com/system/resources/previews/013/789/914/non_2x/moustaches-colors-bright-set-on-dark-background-vector.jpg");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        console.log("nose y: "+results[0].pose.nose.y);
    };
}
