var cardsElem = document.getElementsByClassName('card'); // выбрал все элементы с классом 'card'.
console.log('count of cardsElem : ');
for ( i=0; i < cardsElem.length; i++ ){
  console.log(cardsElem[i]);
  cardsElem[i].onmouseenter = cardsElem[i].onmouseleave = cardsElem[i].onmousemove = cardsElem[i].onmouseout= handler;
}

function handler( event ) {
  var type = event.type; 
  var target = event.target;
  var leftSide = false,
      rightSide = false,
      topSide = false,
      bottomSide = false;
console.log('targetCoords')
console.log(target.getBoundingClientRect());
  if (type === 'mouseout') {
    var that = this;
    setTimeout(function () {  
      that.style.transform = "rotateY(0deg)";
    }, 2000);

  if (type === 'mouseout') {
    var that = this;
    setTimeout(function () {  
      that.style.transform = "rotateX(0deg)";
    }, 2000);
  }

  if (type === 'mousemove') {
    var targetCoords = this.getBoundingClientRect();// targetCoords.height - высота.
                                                      // targetCoords.width - ширина.
    var posX = event.clientX,
        posY = event.clientY;
    console.log(posX, posY);

    var centerX = targetCoords.width / 2;
    var centerY = targetCoords.height / 2;
    if (posX < centerX) {
      leftSide = true; 
    } else {
      rightSide = true;
    }

    if (posY < centerY) {
      topSide = true; 
    } else {
      bottomSide = true;
    }
    
    console.log(posX > 30 && posX < centerX);
    console.log(posX > centerX && posX < (this.offsetWidth - 30));
    if (posX < 30 && posX < centerX){   // ( posX > targetCoords.width - 50)
      trDeg = posX;
    } else {
        trDeg = 30;
      }

    if ( posX < this.offsetWidth && posX > (this.offsetWidth - 30)) {
      trDeg = posX;
    } else {
      trdeg = 30;
    }

    if ( leftSide ){
      var lTrDeg = trDeg;
      this.style.transform = "rotateY(-"+lTrDeg+"deg)";
    }
    if ( rightSide){
      var rTrDeg = trDeg;
      this.style.transform = "rotateY("+rTrDeg+"deg)";
    }
        //  для У.

    console.log(posY > 50 && posY < centerY); // верхний край 
    console.log( posY < this.offsetHeigth && posY > (this.offsetHeight - 50));
    if (posY < 50 && posY < centerY){   // ( posX > targetCoords.width - 50)
      trDeg = posY;
    } else {
        trDeg = 50;
      }

    if (posY < this.offsetHeigth && posY > (this.offsetHeight - 50)) {
      trDeg = posY;
    } else {
      trdeg = 50;
    }

    if ( topSide ){
      var topTrDeg = trDeg;
      this.style.transform = "rotateX(-"+topTrDeg+"deg)";
    }
    if ( bottomSide){
      var bottomTrDeg = trDeg;
      this.style.transform = "rotateX("+bottomTrDeg+"deg)";
    }

  }
}
