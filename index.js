//Assigment 3
function isValidPassword(password, username) {
    //Check if password is atleast 8 characters long
    if (password.length < 8) {
        return false;
    }
    //Check if password contains spaces
    if (password.includes(' ')) {
        return false;
    }
    //Check if password contains the username
    if (password.includes(username)) {
        return false;
    }
    //If all conditions are met, return true
    else{
    return true;
    }
}

// Examples
console.log(isValidPassword('password123', 'Anna'));  // true
console.log(isValidPassword('pass word', 'Ahmed'));    // false
console.log(isValidPassword('pass', 'Daphne'));     // false
console.log(isValidPassword('Markopolo', 'Marko'));     // false



/*Second assignment

// Ask the user to enter a price tag using prompt(), for example: 49.99
let price = prompt("Enter the price, for example: 49.99");

// Convert the input from string to number
parseInt(price);

// Print out the chosen price
console.log(`Chosen price: $${price}`);

// Reduce the price by 10 percent
let discountPrice = price - (price * 0.10);

// Print the calculation of discount price
console.log(`Discount: ${price} - (${price} * 0.10) = ${discountPrice}`);

// Print out the new price
console.log(`New price: $${discountPrice}`);

*/





/*First assignment

console.log('Hello World!');
alert('Hello World!');

let name = "Zakia";  
let age = 31;  
let favoriteColor = "Yellow";

console.log('My name is ' + name,', my age is ' + age, 'and my favorite color is ' + favoriteColor); 

let num1 = 8;
let num2 = 6;

console.log('My numbers are ' + num1 + ' and ' + num2);
 
console.log('addition: ' + (num1 + num2));
console.log('subtraction: ' + (num1 - num2));
console.log('multiplication: ' + (num1 * num2));
console.log('division: ' + (num1 / num2)); 

*/