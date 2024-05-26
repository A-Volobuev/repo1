const input = document.querySelector('.js-name-input');
const nameOutput = document.querySelector('.js-name-output');

function onInput (event) {
    if(event.currentTarget.value === ''){
        nameOutput.textContent = 'Anonymous';
    } else nameOutput.textContent = event.currentTarget.value;
};
input.addEventListener('input', onInput);

function onInputValidity(symbol){
    if (symbol.key >= '0' && symbol.key <= '9'){
        alert('В имени могут быть указаны только буквы');
        symbol.preventDefault();
    }
}
input.addEventListener('keydown', onInputValidity)