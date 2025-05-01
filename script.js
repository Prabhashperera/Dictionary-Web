
async function searchWord() {
    let word = document.getElementsByClassName("input-word")[0].value;
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();
    myObj = data;
    console.log(data[0].meanings[0].definitions[0].definition)
    changeContent(data);
}

function changeContent(data) {
    document.getElementsByClassName("def")[0].innerHTML = data[0].meanings[0].definitions[0].definition;
    document.getElementsByClassName("example")[0].innerHTML = data[0].meanings[0].definitions[0].example;
}