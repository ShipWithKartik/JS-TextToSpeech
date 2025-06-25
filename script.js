const textInput=document.getElementById('text-input');
const languageSelector=document.querySelector('.language-selector');
const speakButton=document.querySelector('.speak-button');

let voices=[];
function loadVoices(){
    voices=speechSynthesis.getVoices();

    languageSelector.innerHTML="";
    voices.forEach((voice,index)=>{
        const option=document.createElement("option");
        option.value=index;
        option.text=`${voice.name} ${voice.lang}`; 
        languageSelector.appendChild(option);
    });
}
   
speechSynthesis.onvoiceschanged=loadVoices;



speakButton.addEventListener("click",()=>{
    const text=textInput.value.trim();
    const voiceIndex=languageSelector.value;

    if(!text){
        alert("Enter Some Text");
        return;
    }
    if(voiceIndex==""){
        alert("Select Some Voice");
        return;
    }

    const speech=new SpeechSynthesisUtterance(text);
    speech.voice=voices[voiceIndex];
    speechSynthesis.speak(speech);
});
