function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var Barking = 0;
var Meowing = 0;
var Mooing =0;
var Roaring=0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("no_of_animals").innerHTML = 'I can hear voice of  - '+ results[0].label;
    document.getElementById("audio_being_played").innerHTML = 'Detected Barking - '+ Barking + ' Detected Meowing - '+ Meowing + 'Detected Mooing - '+Mooing + 'Detected Roaring - '+Roaring;
    
    img = document.getElementById('animals');

    if (results[0].label == "Barking") {
      img.src = 'boxing-day-icegif-11.gif';
      Barking = Barking + 1;
    } 
    else if (results[0].label == "Meowing") {
      img.src = 'cat.gif';
      Meowing = Meowing + 1;
    }
    else if (results[0].label == "Mooing") {
      img.src = 'cow.webp';
      Mooing = Mooing + 1;
    } 
    else if (results[0].label == "Roaring") {
      img.src = 'lion-roar-44.gif';
      Roaring = Roaring + 1;
    }
    else{
      img.src = 'ear.png';
    }
  }
}