var cardsElem = document.getElementsByClassName('card'); // выбрал все элементы с классом 'card'.
console.log('count of cardsElem : ');
for ( i = 0; i < cardsElem.length; i++ ){
  console.log(cardsElem[i]);
  cardsElem[i].onmouseenter = cardsElem[i].onmouseleave = cardsElem[i].onmousemove = cardsElem[i].onmouseout= handler;
}

function handler( event ) {
  var type = event.type,
      targetCoords = this.getBoundingClientRect();// targetCoords.height - высота.
                                                  // targetCoords.width - ширина.

  if (type === 'mouseout') {
    var that = this;
    setTimeout(function () {  
      that.style.transform = "rotateX(0deg)";
    }, 1200);
  }

  if (type === 'mousemove') {
    var posX = event.pageX - targetCoords.x,
        posY = event.pageY - targetCoords.y,
        mouseX = posX > (targetCoords.width / 2) 
        ? (posX / targetCoords.width) * 30 
        : (posX - (targetCoords.width / 2)) / (targetCoords.width / 2) * 30,
        mouseY = posY > (targetCoords.height / 2) 
        ? (posY / targetCoords.height) * -30 
        : (posY - (targetCoords.height / 2)) / (targetCoords.height / 2) * -30;

    // var centerX = targetCoords.width / 2;
    // var centerY = targetCoords.height / 2;



    // if (posX < centerX) {
    //   leftSide = true; 
    // } else {
    //   rightSide = true;
    // }

    // if (posY < centerY) {
    //   topSide = true; 
    // } else {
    //   bottomSide = true;
    // }
    
    // console.log(posX > 30 && posX < centerX);
    // console.log(posX > centerX && posX < (this.offsetWidth - 30));
    // if (posX < 30 && posX < centerX){   // ( posX > targetCoords.width - 50)
    //   trDeg = posX;
    // } else {
    //     trDeg = 30;
    //   }

    // if ( posX < this.offsetWidth && posX > (this.offsetWidth - 30)) {
    //   trDeg = posX;
    // } else {
    //   trdeg = 30;
    // }

    // var horizontalDeg, verticalDeg;

    // if ( leftSide ){
    //   horizontalDeg = -trDeg;
    //   // this.style.transform = "rotateY(-"+lTrDeg+"deg)";
    // }
    // if ( rightSide){
    //   horizontalDeg = trDeg;
    //   // this.style.transform = "rotateY("+rTrDeg+"deg)";
    // }
    //     //  для У.

    // console.log(posY > 50 && posY < centerY); // верхний край 
    // console.log( posY < this.offsetHeigth && posY > (this.offsetHeight - 50));
    // if (posY < 50 && posY < centerY){   // ( posX > targetCoords.width - 50)
    //   trDeg = posY;
    // } else {
    //     trDeg = 50;
    //   }

    // if (posY < this.offsetHeigth && posY > (this.offsetHeight - 50)) {
    //   trDeg = posY;
    // } else {
    //   trdeg = 50;
    // }

    // if ( topSide ){
    //   verticalDeg = -trDeg;
    //   // this.style.transform = "rotateX(-"+topTrDeg+"deg)";
    // }
    // if ( bottomSide){
    //   verticalDeg = trDeg;
    //   // this.style.transform = "rotateX("+bottomTrDeg+"deg)";
    // }
    
    this.style.transform = "rotateY(" + mouseX + "deg) rotateX(" + mouseY + "deg)";
    
  }
}
