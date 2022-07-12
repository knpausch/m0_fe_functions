// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: Added ; after each line of code. Good habit to make as a coder.
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();


// EX 2: Added ; after line of code on line 21. Changed output message to
// "The sum is: " on line 22 so it is easier to understand.
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(`The sum is: ${sum}`);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3: Completed line "funct" to "function" on line 30 so it calls properly
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();


//  EX 4: Move "." on line 46 to inside of ``, it was causing a syntax error.
//  Called function later so we may utilize it.
function average(num1, num2)
  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`)
}
average(3,6);
