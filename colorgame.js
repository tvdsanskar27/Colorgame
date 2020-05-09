var blocks = 6

var colors = generateRandomColor(blocks);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colordisplay = document.querySelector('#colordisplay');
colordisplay.textContent = pickedColor;
var result = document.querySelector('#result');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
easy.addEventListener("click", function() {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  blocks = 3;
  colors = generateRandomColor(blocks);
  pickedColor = pickColor();
  colordisplay.textContent = pickedColor;
  for (var i=0 ;i< squares.length; i++){
    if (colors[i]) {
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
});
hard.addEventListener("click", function() {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  blocks=6;
  colors = generateRandomColor(blocks);
  pickedColor = pickColor();
  colordisplay.textContent = pickedColor;
  for (var i=0 ;i< squares.length; i++){

      squares[i].style.display = "block";
      squares[i].style.background = colors[i];

    }
});

// ********************************************************************
resetButton.addEventListener("click", function() {
  colors = generateRandomColor(blocks);
  pickedColor = pickColor();
  colordisplay.textContent = pickedColor;
  for (var i=0; i< squares.length; i++){
     squares[i].style.backgroundColor = colors[i];
}
  h1.style.backgroundColor = "steelblue";
  result.textContent = "";
  this.textContent = "New Colors"
})

// ********************************************************************
for (var i=0; i< squares.length; i++){
   squares[i].style.backgroundColor = colors[i];

   //add clicklistner to squares
   squares[i].addEventListener("click", function(){
     // storing clicked color
     var clickedcolor = this.style.backgroundColor;
     //comparing colors
     if (clickedcolor === pickedColor) {
       result.textContent = "Correct";
       resetButton.textContent = "Play Again";
       changecolor();

     }
     else {
       this.style.backgroundColor = "#232323";
      result.textContent = "Try Again"
     }
   });
 }
function changecolor(){
  for (var i = 0; i<squares.length ; i++){
    squares[i].style.backgroundColor = pickedColor;
    h1.style.backgroundColor = pickedColor;
  }
}
function pickColor() {
  var random = Math.floor( Math.random() * colors.length);
  return colors[random];
}
function generateRandomColor(num) {
      var a = [];
      for (var i =0; i<num ;i++)
      {
        a.push(randomcolor());
      }
      return a;
}
function randomcolor() {
  var red = Math.floor( Math.random() * 256);
  var green = Math.floor( Math.random() * 256);
  var blue = Math.floor( Math.random() * 256);
  return "rgb(" +red+ ", " +green+ ", " +blue+")";
}
