
var cardsElem = document.getElementsByClassName('card'); // выбрал все элементы с классом 'card'.
console.log('count of cardsElem : ');
for ( i = 0; i < cardsElem.length; i++ ){
  console.log(cardsElem[i]);
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
