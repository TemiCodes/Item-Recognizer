Webcam.set({
    width: 399,
    height: 300,
    image_format:"png",
    png_quality: 90

});


camera = document.getElementById("camera")
Webcam.attach(camera)
function Take_Photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("Camera_Result").innerHTML = "<img id='result' src= " + data_uri + ">"

    })

}
console.log("ml5.version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/40KqTEbwD/model.json",model_loaded)
function model_loaded() {
    console.log("model loaded!")
}

function Identify_Image() {
    img=document.getElementById("result")
    classifier.classify(img, gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("Object_Name").innerHTML = results[0].label
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}