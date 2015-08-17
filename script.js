var parent = document.getElementsByTagName("body")[0];
var randomRgb = Math.round(Math.random()*255);
var newBox = document.getElementsByTagName("div");


function checkerBoard() {
  for (var i = 1; i < 64; i++) {
    if (i % 2 === 1) {
      var newBox = document.createElement("div");
      newBox.style.width = "11.1%";
      newBox.style.float = "left";
      newBox.style.paddingBottom = "11.1%";
      newBox.style.backgroundColor = randomColor();
      parent.appendChild(newBox)
    } else {
      var newBox = document.createElement("div");
      newBox.style.width = "11.1%";
      newBox.style.float = "left";
      newBox.style.paddingBottom = "11.1%";
      newBox.style.backgroundColor = randomColor();
      parent.appendChild(newBox)
    }

  }
}

checkerBoard();


function randomColor(){
  var red = Math.round(Math.random()*255);
  var green = Math.round(Math.random()*255);
  var blue = Math.round(Math.random()*255);
  return "rgb("+red+","+green+","+blue+")"
  // return `rgb(${red},${green},${blue})` es6 concatination syntax
}
randomColor()

function flashColor(){
  for (var i = 0; i < newBox.length; i++) {
    newBox[i].style.backgroundColor = randomColor()
  }
}
var flash = setInterval(flashColor, 250);
