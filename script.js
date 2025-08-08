let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    text_speak.voice = speechSynthesis.getVoices().find(v => v.name.includes("DAVID"));

    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hour=day.getHours()
    if(hour>=0 && hour<12){
        speak("good morning sir")
    }else if(hour>=12 && hour<16){
        speak("good afternoon sir")
    }else{
        speak("good evening sir")
    }

}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")

    }else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by suraj sir")

    }else if(message.includes("alexa can you here me")){
        speak("yes sir,please tell me about questions")

    }else if(message.includes("tell me about developer biodata")){
        speak(" my owner mister suraj kumar singh")

    }else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")

    }else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")

    }else if(message.includes("open my insta profile")){
        speak("opening your insta profile")
        window.open("https://www.instagram.com/_suraj__singh__rajput__/")

    }else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/")

    }else if(message.includes("open linkden")){
        speak("opening linkden")
        window.open("https://in.linkedin.com/")

    }else if(message.includes("open leetcode")){
        speak("opening leetcode please wait")
        window.open("https://leetcode.com/")


    }else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")


    }else if(message.includes("open whatsapp")){
        speak("opening whatapps")
        window.open("whatsapp://")

    }else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
        
    }else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)

    }else{
        let finalText="this is what i am found internet regarding"+message.replace("alexa","" )
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("alexa","")}`,"_blank")

    }



}