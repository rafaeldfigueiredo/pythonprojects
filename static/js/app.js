let textArea = document.querySelector('#textArea');
let boldButton = document.querySelector('.bold');
let italicButton = document.querySelector('.italic');
let underlineButton = document.querySelector('underline');

function italicIt() {
    if (!textArea.getAttribute("style", "font-style: italic")) {
        textArea.setAttribute("style", "font-style: italic");
    }
}
function underlineIt() {
    if (!textArea.setAttribute("style", "text-decoration: underline")) {
        textArea.setAttribute("style", "text-decoration: underline");
}
}