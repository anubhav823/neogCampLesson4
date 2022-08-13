// let promptAnswer = prompt('I am prompting you for an input')
// alert(promptAnswer)

let button_yoda = document.querySelector('#button-yoda')
let button_minionese = document.querySelector('#button-minionese')
let button_vulcan = document.querySelector('#button-vulcan')
let button_dothraki = document.querySelector('#button-dothraki')
let textarea = document.querySelector('#textarea-ex4')
let outputtextarea = document.querySelector('#outputtextarea')

let url = "https://api.funtranslations.com/translate/"
button_yoda.addEventListener('click', () => {
    let text = textarea.value;
    let test = constructURL('yoda',text)
    console.log(test);
    event.preventDefault();
    fetchURL(test)
})

button_minionese.addEventListener('click', () => {
    let text = textarea.value;
    let test = constructURL('minion', text)
    console.log(test);
    event.preventDefault();
    fetchURL(test)
})

button_vulcan.addEventListener('click', () => {
    let text = textarea.value;
    let test = constructURL('vulcan',text)
    console.log(test);
    event.preventDefault();
    fetchURL(test)
})

button_dothraki.addEventListener('click', () => {
    let text = textarea.value;
    let test = constructURL('dothraki',text)
    console.log(test);
    event.preventDefault();
    fetchURL(test)
})

function constructURL(language, text) {
    return url + language + '.json?text=' + text;
}

function fetchURL(test) {
    fetch(test)
        .then((response) => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            let textNode = document.createElement("p");
            while (outputtextarea.firstChild) {
                outputtextarea.removeChild(outputtextarea.firstChild);
            }
            textNode.innerText = translatedText;
            outputtextarea.appendChild(textNode)
        })
        .catch(errorHandler)
}

function errorHandler() {
    while (outputtextarea.firstChild) {
        outputtextarea.removeChild(outputtextarea.firstChild);
    }
    let textNode = document.createElement("p");
    textNode.innerText = "Something went wrong. Please try again later."
    outputtextarea.appendChild(textNode)
}
