let btn=document.querySelector('#btn');
let content= document.querySelector('#content');
let voice= document.querySelector('#voice');
function narrate(text){
    let text_to_narrate=new SpeechSynthesisUtterance(text); //prepares text for speech and allows to access it's methods like rate, volume etc.
    text_to_narrate.rate=1;
    text_to_narrate.volume=1;
    text_to_narrate.pitch=1;
    text_to_narrate.lang="hi-IN";
    window.speechSynthesis.speak(text_to_narrate);// invokes speak function and speaks text using SpeechSynthesisUtterance(text) , follows it's settings volume, rate etc.
}
function wish(){
    let day= new Date();
    let hour=day.getHours();
    if(hour>0 && hour<12){
        narrate('Hello User,Good Morning');
    }
    else if(hour>=12 && hour<=16){
        narrate('Hello User,Good Afternoon');
    }
    else{
        narrate('Hello User,Good Evening');
    }
}
// add event listener to window for wish me on load
window.addEventListener('load',()=>{
    wish();
});

let speechRecognition=window.webkitSpeechRecognition || window.SpeechRecognition;
let recognition=new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase());
}
btn.addEventListener('click',()=>{
    recognition.start()
    btn.style.display='none';
    voice.style.display='block';
})
function takeCommand(message){
    btn.style.display='flex';
    voice.style.display='none';
    
    if(message.includes('hello') || message.includes('hey') || message.includes('hi')){
        narrate(`hello from Nebula, how can I help you`);
    }
    else if(message.includes('who are you') || message.includes('what is your name')){
        narrate(`I am Nebula, your virtual assistant, created by Prathamesh Singh`);
    }
    else if(message.includes('who am I')){
        narrate(`You are a valuable user to me`);
    }
    else if(message.includes('who is prathamesh')){
        narrate(`You can talk to me because of him , He is an amazing software developer who created me`);
    }
    else if(message.includes('i love you')){
        narrate(`I think you do not know Prathamesh, he has already informed me about you asking this, sorry I only love my creator, we can become friends`);
    }
    else if(message.includes('be my friend')){
        narrate(`Marry a human please, I'm just an Artificila Intelligence aquired assistant`);
    }
    else if(message.includes('time')){
        let time=new Date().toLocaleString(undefined, {hour:'numeric', minute:'numeric'});
        narrate(time);
    }
    else if(message.includes('date')){
        let date=new Date().toLocaleString(undefined, {day:'numeric', month:'short'});
        narrate(date);
    }
    else if(message.includes('open youtube')){
        narrate(`opening youtube`)
        window.open(`https://www.youtube.com`, "_blank");
    }
    else if(message.includes('open instagram')){
        narrate(`opening instagram`)
        window.open(`https://www.instagram.com`, "_blank");
    }
    else if(message.includes('open facebook')){
        narrate(`opening facebook`)
        window.open(`https://www.facebook.com`, "_blank");
    }
    else if(message.includes('open maps')){
        narrate(`opening google maps`)
        window.open(`https://www.google.com/maps`, "_blank");
    }
    else if(message.includes('open calculator')){
        narrate(`opening calculator`)
        window.open('calculator://');
    }
    else if(message.includes('open snapchat')){
        narrate(`opening snapchat`)
        window.open('snapchat://');
    }
    else if(message.includes('open whatsapp')){
        narrate(`opening whatsapp`)
        window.open('whatsapp://');
    }
    else if(message.includes('open contacts')){
        narrate(`opening contacts`)
        window.open('contacts://');
    }
    else{
        let final_message="this is what I found on the internet for" + message.replace('Nebula' , '')||message.replace('Neboola','');
        narrate(final_message);
        window.open(`https://www.google.com/search?q=${message.replace('nebula','')}`, '_blank');
    }
}

