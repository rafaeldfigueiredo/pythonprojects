let textArea = document.querySelector('#textArea');
let selected = document.getSelection.toString();

function boldIt() {
    textArea.style.fontWeight == "bold" ? textArea.style.fontWeight = "normal" : textArea.style.fontWeight = "bold"
}

function italicIt() {
    textArea.style.fontStyle == "italic" ? textArea.style.fontStyle = "normal" : textArea.style.fontStyle = "italic"
}

function underlineIt() {
    textArea.style.textDecorationLine == "underline" ? textArea.style.textDecorationLine = "normal" : textArea.style.textDecorationLine = "underline";
}