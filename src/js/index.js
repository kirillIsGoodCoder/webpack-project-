var cardsElem = document.getElementsByClassName('card'); // выбрал все элементы с классом 'card'.
console.log('count of cardsElem : '+cardsElem);
for ( i=0; i < cardsElem.length; i++ ){
  console.log(cardsElem[i]);
  cardsElem[i].onmouseenter = cardsElem[i].onmouseleave = handler;
}

function handler( event ) {
  var type = event.type; 
  var target = event.target;
  var leftSide = false,
      rightSide = false;

  if (type === 'mouseout') {
    setInterval()
  }
  if (type === 'mousemove') {
    var targetCoords = target.getBoundingClientRect();
    var posX = event.clientX - targetCoords.x,
        posY = event.clientY - targetCoords.y;
    console.log(posX, posY);
    var center = targetCoords.x + (240px / 2);
    if (posX < center) {
      leftSide = true; 
    } else {
      rightSide = true;
    }
    
    if ( leftSide ){
      card.style.transform = "rotate3d(0, 1, 0, -20deg)";
    }
    if ( rightSide){
      cardsElem.style.transform = "rotate3d(0, 1, 0, 20deg)";
    }
  }
}
