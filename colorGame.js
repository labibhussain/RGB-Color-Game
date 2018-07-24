var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#pickedColor");
var messageDisplay = document.querySelector("#message");
var headerDisplay = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numberofSquares = 6;


for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberofSquares = 3: numberofSquares = 6; 
		reset(numberofSquares);
	});
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numberofSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	headerDisplay.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			resetButton.textContent = "Play Again?";
		}
		else {
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColor(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	headerDisplay.style.backgroundColor = color;
}

function pickColor() {
	var randomIndex = Math.floor((Math.random() * colors.length));
	return colors[randomIndex];
}

function generateRandomColors(numColors) {
	var colorArr = []
	for (var i = 0; i < numColors; i++) {
		colorArr.push(randomColor());
	}

	return colorArr;
}

function randomColor() {
	var r = (Math.floor(Math.random() * 256));
	var g = (Math.floor(Math.random() * 256));
	var b = (Math.floor(Math.random() * 256));
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
