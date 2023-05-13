let textArea = document.querySelector('#textArea');

function boldIt() {
    textArea.setAttribute("style", "font-weight: bold");
}

function italicIt() {
    textArea.setAttribute("style", "font-style: italic");
}

function underlineIt() {
    textArea.setAttribute("style", "text-decoration: underline");
}
