const itemEl = document.querySelectorAll('.item');

let totalCategories = 0;

    itemEl.forEach((element) => {
    totalCategories +=1;
    });
    
console.log(`Number of categories: ${totalCategories}`);

itemEl.forEach(element => {

    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('ul > li').length}`);

    alert(`
    Number of categories: ${totalCategories}
    Category: ${element.querySelector('h2').textContent}
    Elements: ${element.querySelectorAll('ul > li').length}
    `);
});

// Как все вместе вывести в алерт?