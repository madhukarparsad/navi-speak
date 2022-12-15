var btn = document.querySelector("#clichBtn");
var inputtxt = document.querySelector("#inputTxt");
var outputDIV= document.querySelector("#output");

var srcURL= "https://api.funtranslations.com/translate/navi.json"

function callFunction(srcURL){
    return srcURL+"?"+"text= "+inputtxt.value
}
function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! Try again after some time")
}
function clickHandler() {
    fetch(callFunction(srcURL))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputDIV.innerText=translatedText
    })
}
btn.addEventListener("click",clickHandler);