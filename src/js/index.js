
var cardsElem = document.getElementsByClassName('card'); // выбрал все элементы с классом 'card'.
for ( i = 0; i < cardsElem.length; i++ ){
  // console.log(cardsElem[i]);
  cardsElem[i].onmouseenter = cardsElem[i].onmouseleave = cardsElem[i].onmousemove = cardsElem[i].onmouseout= handler;
  //вешаем слушателя на событие мыши чтобы совершать трансформацию при событии.
}

/**
 * Хенделр события mouseenter, mousemove, mouseleave
 * трансформирует элемент
 * @param {*} event
 */
function handler( event ) {
  var type = event.type,
      targetCoords = this.getBoundingClientRect();
  /**
   * когда мышь ушла из блока - возврашщаем в начальное положение
   */                                                
  if (type === 'mouseout') { 
    var that = this;
    setTimeout(function () {  
      that.style.transform = "rotateX(0deg)";
    }, 1200); 
  }
  /*
  * когда мышь на блоке 
  * вычисляем позицию мыши, координаты по x и y
  * генерируем углы трансформаций   
  */
  if (type === 'mousemove') { // мышь на карточке 
    var posX = event.pageX - targetCoords.x, //высчитываем позицию мыши относительно окна браузера.
        posY = event.pageY - targetCoords.y,
        mouseX = posX > (targetCoords.width / 2) // генер. угл трансформации по Х
        ? (posX / targetCoords.width) * 15 
        : (posX - (targetCoords.width / 2)) / (targetCoords.width / 2) * 15,
        mouseY = posY > (targetCoords.height / 2)  // генер. угл трансформации по У
        ? (posY / targetCoords.height) * -15 
        : (posY - (targetCoords.height / 2)) / (targetCoords.height / 2) * -15;
    /*
    * выполняем трансформацию на ранее заданные углы
    */    
    this.style.transform = "rotateY(" + mouseX + "deg) rotateX(" + mouseY + "deg)"; // трансформация по х - mouseX
                                                                                    // трансформация по y - mouseY
    
  }
}



document.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var form = document.forms.searchform;
  var select = form.elements.slct;
  var input = { text: form.elements.text.value, title: form.elements.title.value };
  var container = document.getElementById('card-list');
  // копирую контейнер.
  var copyContainer = container.cloneNode(true);
  // console.log("input value is ' "+input.value +" '  select value is "+select.value );
  var elements = [...cardsElem];
  
  // filtered  = elements.sort(function(a, b) {
  //   return Number(a.dataset.price) > Number(b.dataset.price);
  // });

  // console.log(filtered);
  
  
  if (select.value === 'prUp' ){
    let copy = console.log();
    elements.sort(function(a, b) {
      return Number(a.dataset.price) > Number(b.dataset.price);
    }); 
  }
  if (select.value === 'prDown' ){
    elements.sort(function(a, b) {
      return Number(a.dataset.price) < Number(b.dataset.price);
    })
  }
  if (select.value === 'rateUp' ){
    elements.sort(function(a, b) {
      return Number(a.dataset.rate) > Number(b.dataset.rate);
    }); 
  }
  if (select.value === 'rateDown' ){
    elements.sort(function(a, b) {
      return Number(a.dataset.rate) < Number(b.dataset.rate);
    })
  }

  // elements = elements.filter( function (element) {
  //   var str = element.dataset.title.toUpperCase();
  //   if (!str.includes(input.value.toUpperCase())) {
  //     element.parentElement.parentElement.style.display = "none";
  //   } else {
  //     element.parentElement.parentElement.style.display = "block";
  //   }
  //   return str.includes(input.value.toUpperCase())
  // });
  
  elements.forEach(function(element) {
    container.appendChild(element.parentElement.parentElement);
  });
  // console.log(elements);
  // return elements;

  // elements.forEach(function(element) {
  //   var str = element.dataset.title.toUpperCase;
  //   if (!str.includes(input.value.toUpperCase)) {
  //     element.parentElement.parentElement.style.display = "none";
  //   } else {
  //     element.parentElement.parentElement.style.display = "block";
  //   } 
  // });
  Object.keys(input).forEach(function(key) {
    elements = search(elements, key, input[key]);
  });
  console.log(elements);
}
);
// function search(cards, dataName, value) {
//   elements = cards
//   element.dataset[dataName]
//   var str = value.toUpperCase();
// }

function search ( cards, dataName, value ) {
  if (value !== undefined){
  return cards.filter( function (element) {
      var myStr = element.dataset[dataName].toUpperCase();
      // if (!myStr.includes(value.toUpperCase())) {
      //   element.parentElement.parentElement.style.display = "none";
      // } else {
      //   element.parentElement.parentElement.style.display = "block";
      // }
      return myStr.includes(value.toUpperCase());
  });
  }
}
