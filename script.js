const availablePar 			= [3, 4, 5],
			availableStrokes 	= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			setPar 						= document.querySelector("#setpar"),
			parValue 					= document.querySelector("#parvalue"),
			strokeValue 			= document.querySelector("#strokevalue"),
			hitTheBall 				= document.querySelector("#hittheball"),
			displayResult 		= document.querySelector("#displayresult"),
			actualResult 			= document.querySelector("#actualresult"),
			remark 						= document.querySelector("#remark"),
			animation					= document.querySelectorAll(".animation");


// Sounds
let sounds = ["sounds/GolfSwing.mp3", "sounds/Audience.mp3", "sounds/HoleInOne.mp3", "sounds/Boo.mp3"]
let swingSound 	= new Howl({
			src: [sounds[0]]
}),
 		audience 		= new Howl({
			src: [sounds[1]]
}),
 		holeInOne 	= new Howl({
			src: [sounds[2]]
}),
 		boo 				= new Howl({
 			src: [sounds[3]]
});

// Initiating Script
init();

// Initial Scripts
function init() {
	par();
	strokes();
	result();
}

// Function to Determine Par Value
function par() {
	setPar.addEventListener("click", function() {
		parValue.textContent = availablePar[Math.floor(Math.random() * availablePar.length)];
		strokeValue.textContent = "";
		actualResult.textContent = "";
		remark.textContent = "";
	})
}

// Function to determine Stroke Value
function strokes() {
	hitTheBall.addEventListener("click", function() {
		let strokes = availableStrokes[Math.floor(Math.random() * availableStrokes.length)];
		strokeValue.textContent = strokes;
		swingSound.play();
		actualResult.textContent = "";
		remark.textContent = "";

	})
}

// Function to Show Result
function result() {
	displayResult.addEventListener("click", function() {
		if (Number(strokeValue.textContent) === 1) {
			actualResult.textContent = "Hole-in-One";
			remark.textContent = "Perfect Stroke!!!";
			holeInOne.play();
		} else if (Number(strokeValue.textContent) <= Number(parValue.textContent) - 2) {
			actualResult.textContent = "Eagle";
			remark.textContent = "Outstanding Stroke!! You got an eagle."
			audience.play();
		} else if (Number(strokeValue.textContent) === Number(parValue.textContent) - 1) {
			actualResult.textContent = "Birdie";
			remark.textContent = "Greak Job! You got a birdie."
			audience.play();
		} else if (Number(strokeValue.textContent) === Number(parValue.textContent)) {
			actualResult.textContent = "Par";
			remark.textContent = "You got Par."
			audience.play();
		} else if (Number(strokeValue.textContent) === Number(parValue.textContent) + 1) {
			actualResult.textContent = "Bogey";
			remark.textContent = "Ooh! You get a bogey."
			boo.play();
		} else if (Number(strokeValue.textContent) === Number(parValue.textContent) + 2) {
			actualResult.textContent = "Double Bogey";
			remark.textContent = "You can do better than that! You got a double bogey."
			boo.play();
		} else {
			actualResult.textContent = "Go Home!";
			remark.textContent = "Game Over! Better luck next time."
			boo.play();
		}
	})
}