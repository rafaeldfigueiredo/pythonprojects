let textArea = document.querySelector('#textArea');
let boldButton = document.querySelector('.bold');
let italicButton = document.querySelector('.italic');
let underlineButton = document.querySelector('underline');

function italicIt() {
    if (textArea.setAttribute("style", "font-style: italic")) {
        textArea.setAttribute("style", "font-style: italic");
    }
}
function underlineIt() {
    textArea.setAttribute("style", "text-decoration: underline");
}
