prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function (data_uri) { 
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'; 
    });
}
console.log(ml5.verson);
clasifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ruoppguwP/model.json", modelloded);
function modelloded() {
    console.log("modelloded");
}
function speak() {
    var synth = window.speachSynthesis;
    speak1 = "prediction 1 is" + prediction_1;
    speak2 = "prediction 2 is" + prediction_2;
    var say = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(say);
}

function check() {
    img = document.getElementById("captured_image");
    clasifier.classify(img, list);
}

function list(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
    }
}