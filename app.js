var btnTrans = document.querySelector("#btn-trans")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
var url = "https://api.funtranslations.com/translate/dothraki.json"


function getTranslationUrl(input){
return url+ "?"+"text="+input

}
function errorHandler(){
alert("Something gone wrong")
}
function clickInputHandler(){

//outputDiv.innerHTML = txtInput.value
var input =txtInput.value
fetch(getTranslationUrl(input))
.then(response=>response.json())
.then(json=>{
    var translatedText =json.contents.translated;
    outputDiv.innerHTML=translatedText;
})
.catch(errorHandler)

}



btnTrans.addEventListener("click",clickInputHandler)

