/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import GoogleLang from './googleLang.js';
// import TextToSpeech from './textToSpeech.js';

function handleFormSubmission(event) {
  event.preventDefault();
  let phrase = document.getElementById('phrase').value;
  let toLang = document.querySelector('#toLang option:checked').id;
  let promise = GoogleLang.translateLang(phrase, toLang);
  promise.then(function(args){
    printElement(args[0], args[1], args[2]);
  }, function(args) {
    printError(args[0], args[1], args[2], args[3]);
  });
}

function printElement(json, phrase, toLang) {
  let spot = document.querySelector(".showTranslated");
  spot.innerText = json.data.translations[0].translatedText;
}


function printError(request, jsonResponse, phrase, toLang) {
  let spot = document.querySelector(".showTranslated");
  spot.innerText = `${jsonResponse.error.code} ${jsonResponse.error.message}`;
}

function fillOutSelectOptions(jsonResponse) {
  let select = document.createElement("select");
  select.id= 'toLang';

  jsonResponse.data.languages.forEach(object=>{
    let opt = document.createElement("option");
    opt.innerText = object.name;
    opt.id = object.language;
    select.append(opt);
  });

  let div = document.getElementById("insertOptions");
  div.innerText = "";
  div.append(select);
  
}

// function getSpeechFromText() {
//   let phrase = 'test phrase';
//   let lang = 'en-us';
//   let audioP = document.getElementById("aud");
  
//   let promise = TextToSpeech.getSpeech(phrase, lang)
//   promise.then(function(response) {
//     debugger;
//     const audio = new Audio(response);
//     console.log(audio)
//     console.log(typeof audio)
//     audio.play();
//   })

// }

window.onload = () => { 
  let promise = GoogleLang.getLangOptions();
  promise.then(
    function(args) {
      fillOutSelectOptions(args);
    },
    function(args) {
      printError(args[0], args[1]);
    });
};
document.getElementById('translateText').addEventListener('submit', handleFormSubmission);
// document.getElementById('listen').addEventListener('click', getSpeechFromText)