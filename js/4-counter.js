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


// нотифай 
function notify () {
    const perm = Notification.requestPermission();

    if(perm == 'granted'){
        new Notification('hi');
        console.log('what');
    } else {
        console.log('error');
    }
};


decrementBtn.addEventListener('click', () => {
    if(counter.value == 0) {
        decrementBtn.classList.add('disabled-button');
        decrementBtn.disabled;
        notify();
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
        incrementBtn.classList.add('button__disabled');
    };
    if(counter.value > 0) {
        decrementBtn.classList.remove('button__disabled');
        decrementBtn.classList.add('button');
    };

    valueEl.textContent = counter.value;
});
decrementBtn.addEventListener('click', () => {
    if(counter.value == 0){
        decrementBtn.classList.add('button__disabled');
    };
    if(counter.value < 10) {
        incrementBtn.classList.remove('button__disabled');
        incrementBtn.classList.add('button');
    };

    valueEl.textContent = counter.value;
});

