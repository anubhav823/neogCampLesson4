// let promptAnswer = prompt('I am prompting you for an input')
// alert(promptAnswer)

let button = document.querySelector('#button-ex4')
let textarea = document.querySelector('#textarea-ex4')
let outputtextarea = document.querySelector('#textarea-ex4-1')

let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
button.addEventListener('click', () => {
    let text = textarea.value;
    let test = constructURL(text)
    event.preventDefault();
    fetchURL(test)
})

function constructURL(text) {
    return url + text;
}

function fetchURL(test) {
    fetch(test)
        .then((response) => response.json())
        .then(json => {
            let translatedText = json.contents.text;
            outputtextarea.innerText = translatedText;
        })
        .catch((err) => errorHandler(err))
}

function errorHandler(err) {
    console.log(err)
}
