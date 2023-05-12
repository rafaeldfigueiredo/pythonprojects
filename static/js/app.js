function boldIt() {
    if (document.querySelector('.bold').onclick) {
        if (document.querySelector('textArea').onselect)  {
            document.querySelector('textArea').style.fontWeight = 'bold';
        }
    }
}

function italicIt() {
    document.querySelector('textArea').style.fontStyle = 'italic';
}

function underlineIt() {
    document.querySelector('textArea').style.textDecoration = 'underline';
}
