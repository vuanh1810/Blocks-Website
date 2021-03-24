var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

//variable to calculate the time
var secs = 0;
var currentSeconds = 0;
var currentMinutes = 0;
var timer;

//start game
$("#play").bind("click",function(){
  initialize();
  beginTime();
  $("#alert_puzzle").text("");
})

//calling move function when a cell is clicked
$("#puzzle .cell-puzzle").bind("click",function() {
  if(secs > 0){
    var obj = $(this);
    move(obj);
  }
})

//call and arrange the numbers in random array to start game
function initialize(){
  var arrRandomNumber = shuffleMatrix();

  var count = 0;
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      var number = arrRandomNumber[count];
      matrix[i][j] = number;

      if (i == 3 && j == 3) {
        matrix[i][j] = 0;
      }

      $("#puzzle .cell-puzzle[number=" + number + "]").css("top", i * 60 + "px");
      $("#puzzle .cell-puzzle[number=" + number + "]").css("left", j * 60 + "px");
      count++;
    }
  }
}

//generate random array of number from 1 to 15
function shuffleMatrix(){
  var arr = [];
  while(arr.length < 15){
    var r = Math.floor(Math.random() * 15) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

//function to start calculate time
function beginTime() {
  secs = 0;
  currentSeconds = 0;
  currentMinutes = 0;
  clearTimeout(timer);
  intervalTime();
}

//function to calculate time
function intervalTime() {
  currentMinutes = Math.floor(secs / 60);
  currentSeconds = secs % 60;

  if(currentMinutes <= 9) {
    currentMinutes = "0" + currentMinutes;
  }

  if(currentSeconds <= 9) {
    currentSeconds = "0" + currentSeconds;
  }

  secs++;
  $("#board-time").text(currentMinutes + ":" + currentSeconds);
  timer = setTimeout('intervalTime()', 1000);
  console.log(secs);
}

//function to move the cell
function move(obj) {
  var numberCell = parseFloat(obj.attr("number"));
  var win = false;

  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      if(matrix[i][j] == numberCell) {
        if(j > 0 && matrix[i][j-1] == 0) {
          $("#puzzle .cell-puzzle[number=0]").css("left", j * 60 + "px");
          obj.animate({
            'left': (j - 1) * 60 + 'px'
          }, 300);

          matrix[i][j - 1] = numberCell;
          matrix[i][j] = 0;

        } else if(j < 3 && matrix[i][j + 1] == 0) {
          $("#puzzle .cell-puzzle[number=0]").css("left",j * 60 + "px");
          obj.animate({
            'left': (j + 1) * 60 + 'px'
          }, 300);

          matrix[i][j + 1] = numberCell;
          matrix[i][j] = 0;

        } else if(i > 0 && matrix[i - 1][j] == 0) {
          $("#puzzle .cell-puzzle[number=0]").css("top", i * 60 + "px");
          obj.animate({
            'top': (i - 1) * 60 + 'px'
          },300);

          matrix[i-1][j] = numberCell;
          matrix[i][j] = 0;

        } else if(i<3 && matrix[i+1][j]==0) {
          $("#puzzle .cell-puzzle[number=0]").css("top", i * 60 + "px");
          obj.animate({
            'top': (i + 1) * 60 + 'px'
          },300);

          matrix[i + 1][j] = numberCell;
          matrix[i][j]=0;
        }

        win = checkWin();
        if (win){
          break;
        }
        return; 
      }
    }
  }
}

//check if player win and display the result
function checkWin(){
  var winner =false;
  var winString = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0";
  var loseString = "1,2,3,4,5,6,7,8,9,10,11,12,13,15,14,0";

  var matrixStr = matrix.toString();

  if(winString == matrixStr) {
    clearTimeout(timer);
    $("#alert_puzzle").text("You Win. Your result is " + $("#board-time").text());

  } else if (loseString == matrixStr) {
    $("#alert_puzzle").text('You cannot win. Click the button "click to play" to start new game');
  }
}