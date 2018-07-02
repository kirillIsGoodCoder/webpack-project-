var cardsElem = document.getElementsByClassName('card'); // выбрал все элементы с классом 'card'.
console.log('count of cardsElem : ');
for ( i=0; i < cardsElem.length; i++ ){
  console.log(cardsElem[i]);
  cardsElem[i].onmouseenter = cardsElem[i].onmouseleave = cardsElem[i].onmousemove = cardsElem[i].onmouseout= handler;
}

function handler( event ) {
  var type = event.type; 
  var target = event.target;
  var trDeg = 0,
      leftSide = false,
      rightSide = false;

  if (type === 'mouseout') {
    target.style.transform = "rotate3d(0, 1, 0, 0deg)";
    target.style.transition = '0s';
  }
  if (type === 'mousemove') {
    var targetCoords = target.getBoundingClientRect();
    var posX = event.clientX - targetCoords.x,
        posY = event.clientY - targetCoords.y;
    console.log(posX, posY);

    var center = targetCoords.x + 120;
    if (posX < center) {
      leftSide = true; 
    } else {
      rightSide = true;
    }
    
    if ( posX < 50 ){
      trDeg = posX / 2.5;
    } else { 
        trDeg = 27;
      };

    if ( leftSide ){
      var lTrDeg = trDeg;
      target.style.transform = "rotate3d(0, 1, 0, -"+lTrDeg+"deg)";
    }
    if ( rightSide && trDeg > 190){
      var rTrDeg = trDeg;
      target.style.transform = "rotate3d(0, 1, 0, "+rTrDeg+"deg)";
    }
  }
}
