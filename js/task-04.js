const counter = {
    value:0,
    decrement() {
        this.value -= 1;
    },
    increment () {
        this.value +=1;
    },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', () => {
    if(counter.value == 0) {
        decrementBtn.classList.add('disabled-button');
        decrementBtn.disabled;
        alert("Добавьте товар в корзину");
    } else {
        counter.decrement();
    };
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', () => {
    if(counter.value >= 10) {
        incrementBtn.disabled;
        alert("Вы не можете добавить больше товаров");
    } else counter.increment();

    valueEl.textContent = counter.value;
});



// Для изменения цвета кнопок 
incrementBtn.addEventListener('click', () => {
    if(counter.value == 10){
        incrementBtn.classList.add('disabled-button');
    };
    if(counter.value > 0) {
        decrementBtn.classList.remove('disabled-button');
        decrementBtn.classList.add('action-button');
    };

    valueEl.textContent = counter.value;
});
decrementBtn.addEventListener('click', () => {
    if(counter.value == 0){
        decrementBtn.classList.add('disabled-button');
    };
    if(counter.value < 10) {
        incrementBtn.classList.remove('disabled-button');
        incrementBtn.classList.add('action-button');
    };

    valueEl.textContent = counter.value;
});

// ------------------- первым прогружает хтмл? Почему если я здесь уккажу 
// if(counter.value == 0){
//     decrementBtn.classList.add('disabled-button');
// };
// А в классах будет active-button, то вне зависимости от того, что изначально counter.value == 0 кнока остается активной?