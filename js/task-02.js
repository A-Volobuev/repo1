const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');

ingredients.forEach(element => {
  const newItemEl = document.createElement('li');
  newItemEl.classList.add('item', 'content__alert', 'alert__info');

  const newTitleEl = document.createElement('strong');
  newTitleEl.textContent = element;
  newTitleEl.classList.add('info__title');

  // Нагуглил свг обьекты создаются другим кодом
    // svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
  const newSvgContainerEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  newSvgContainerEl.classList.add('alert__info-icon');

    // useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  const newUseEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    // useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon-close');
  newUseEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './images/symbol-defs.svg#icon-star');

  newSvgContainerEl.appendChild(newUseEl); // svg ->  use
  newItemEl.append(newSvgContainerEl, newTitleEl); //  li -> svgUse, strong
  listEl.appendChild(newItemEl); // ul -> li
});


// Старое решение, которое не работает(
        //--------Добавляет в коде, но не отображает
  // newSvgContainerEl.innerHTML = '<use href="./images/symbol-defs.svg#icon-star" width="24" height="24"></use>'; 

  // ------ Проблема с ссылкой изображения???
  // const newUseEl = document.createElement('use');
  // newUseEl.width = '24'; 
  // newUseEl.height = '24';
  // newUseEl.href = './images/symbol-defs.svg#icon-star';
  // newUseEl.setAttribute('href', './images/symbol-defs.svg#icon-star');
  // console.log(newUseEl.href)  //--- Почему свойство и значение находит, но на странице не подставляет ?
