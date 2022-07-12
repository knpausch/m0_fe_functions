// 1: Write a function named printGreeting that prints a simple
//greeting message, the same one, every time it is called. Call
//this function 3 times.
function printGreeting() {
  console.log("Hello");
}
printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should
//console.log a sentence that interpolates the data passed in.
function dogAge(age) {
  console.log(`Your Dog's age is: ${age}`);
}
dogAge(5);

// 3: Write a function that has 3 parameters: a string and two numbers.
//The String will be the name of a company, and the numbers will represent
//the minimum and maximum of a pay range for a posted job. The function
//should print out a sentence that includes the name of the company and
//the range itself (if the numbers passed in are 90000 and 110000, the
//pay range is 20000).
function company(companyName, min, max) {
  var range = max - min;
  console.log(`The company ${companyName} has a pay range of $${range}`);
}
company("costco", 9, 15);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(amount, item) {
var status = "unknown"

if (amount >= 4)
{
  status = "is stocked"
}
else if (amount < 4 && amount != 0)
{
  status = "- running LOW"
}
else if (amount === 0)
{
  status = "- OUT of stock!"
}

  console.log(`${item} ${status}`);
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
