const input = document.getElementById('validation-input');
const label = document.querySelector('.js-user-label');

function onInputBlur(event) {
    // console.log("Инпут потерял фокус(");
    // console.log(input.dataset.length);
    // console.log(typeof input.dataset.length);
    // console.log(event.currentTarget.value.length)
    // console.log(typeof event.currentTarget.value.length)
    // Поставил не строгое, потому что там строка, а там цифра

    if(input.dataset.length == event.currentTarget.value.length){
        input.classList.remove('invalid');
        label.classList.remove('invalid-label');
        input.classList.add('valid');
        label.classList.add('valid-label');
        console.log('ok')
    } else {
        input.classList.add('invalid');
        label.classList.add('invalid-label');
    };
};
input.addEventListener('blur', onInputBlur);

// Добавил что бы надпись была равна дата-атрибуту инпута
label.textContent = `${input.dataset.length} symbols *`;
console.log(label.textContent);