const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');

// Решение через map
ingredients.map((element) => {
  const newItemEl = document.createElement('li');
  const newTitleEl = document.createElement('strong');
  const newSvgContainerEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const newUseEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  newItemEl.classList.add('item', 'content__alert', 'alert__info');

  newTitleEl.textContent = element;
  newTitleEl.classList.add('info__title');

  newSvgContainerEl.classList.add('alert__info-icon');

  newUseEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './images/symbol-defs.svg#icon-star');

  newSvgContainerEl.appendChild(newUseEl); // svg ->  use
  newItemEl.append(newSvgContainerEl, newTitleEl); //  li -> svgUse, strong
   listEl.appendChild(newItemEl); // ul -> li
})


// // Старое решение
// ingredients.forEach(element => {
//   const newItemEl = document.createElement('li');
//   newItemEl.classList.add('item', 'content__alert', 'alert__info');

//   const newTitleEl = document.createElement('strong');
//   newTitleEl.textContent = element;
//   newTitleEl.classList.add('info__title');

//   // Нагуглил свг обьекты создаются другим кодом
//     // svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
//   const newSvgContainerEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//   newSvgContainerEl.classList.add('alert__info-icon');

//     // useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
//   const newUseEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
//     // useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon-close');
//   newUseEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './images/symbol-defs.svg#icon-star');

//   newSvgContainerEl.appendChild(newUseEl); // svg ->  use
//   newItemEl.append(newSvgContainerEl, newTitleEl); //  li -> svgUse, strong
//   listEl.appendChild(newItemEl); // ul -> li
// });
