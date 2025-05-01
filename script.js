let myObj = {};
async function searchWord() {
    let word = document.getElementsByClassName("input-word")[0].value;
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();
    myObj = data;
    changeContent(data);
}

let audio;
function changeContent(data) {
    document.getElementsByClassName("def")[0].innerHTML = data[0].meanings[0].definitions[0].definition;
    document.getElementsByClassName("example")[0].innerHTML = data[0].meanings[0].definitions[0].example || "No example available";

    const audioUrl = data[0].phonetics.find(p => p.audio)?.audio;
    
    if (audioUrl) {
        audio = new Audio(audioUrl);
    } else {
        audio = null;
        console.log("No audio available");
    }
}

function playAudio() { 
    audio.play();
}
