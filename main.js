prediction = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takePhoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="resultimg" src="' +data_uri+'"/img>'
    });
}

console.log('ml5.version - ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JEgRsSEKH/.json', modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speech = "My prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speech);
    synth.speak(utterThis);
}