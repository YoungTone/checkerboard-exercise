var parent = document.getElementsByTagName("body")[0];


function checkerBoard() {
  for (var i = 1; i < 64; i++) {
    if (i % 2 === 1) {
      var newBox = document.createElement("div");
      newBox.style.width = "11.1%";
      newBox.style.float = "left";
      newBox.style.paddingBottom = "11.1%";
      newBox.style.backgroundColor = "black";
      parent.appendChild(newBox)
    } else {
      var newBox = document.createElement("div");
      newBox.style.width = "11.1%";
      newBox.style.float = "left";
      newBox.style.paddingBottom = "11.1%";
      newBox.style.backgroundColor = "red";
      parent.appendChild(newBox)
    }

  }
}

checkerBoard();
