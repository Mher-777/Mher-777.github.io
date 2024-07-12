const copyBtn = document.querySelector('.intro__copy-btn');

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copyBtn.classList.add('copied');
    setTimeout(() => {
        copyBtn.classList.remove('copied');
    }, 200);
}

copyBtn.addEventListener('click', (e) => {
    const text = document.querySelector('.intro__copy-text')
    copyToClipboard(text.textContent)
})