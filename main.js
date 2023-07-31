function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(580, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('');
}

function modelLoaded(){
    console.log('Model is Initialized');
}

function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}