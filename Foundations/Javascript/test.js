// const button = document.querySelector('button')


// function  greet() { 
//     const name = prompt("what is your name")
//     const greeting = document.querySelector("#greeting")
//     greeting.textContent = `Hello ${name}, nice to see you`;
    
// }
// button.addEventListener("click",greet)
// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
// console.log(output); 

// const newline = "one day i will be writing backend like anything \n what would be the way to get there i dont know"


// console.log(newline)

// function draw() {
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgb(255 0 0 / 50%)";
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }


let ans = parseInt(prompt("please enter the number you would like to fizzbuzz up to: "))


for (let i = 1; i <= ans; i++) {
	if (i % 3===0 && i%5===0) {
		console.log("fizzbuzz")
	}
	else if (i % 3===0) {
		console.log("fizz")
	}else if(i % 5 === 0){
		console.log("buzz")
	}
	else {
		console.log(i)
	}
}




