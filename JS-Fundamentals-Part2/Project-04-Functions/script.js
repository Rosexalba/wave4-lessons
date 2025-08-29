function sayHello() {
    console.log("Hello!")
}

sayHello();












function addNumbers(a,b) {
    console.log(a + b);             // the logic given to the function what you want it to do
}

addNumbers(3, 5);             // arguments: giving the funtion the true values you want it to us




// another way 

function addNUmbers(a,b) {
    return a + b;
}

addNUmbers(3,5);

let result = addNUmbers(3,5);
console.log(result);






function greetUser(name) {
    console.log("hello " + name);
}

greetUser("Alex");







function multiply(a,b) {
    console.log(a * b);
}

multiply(3, 5);







function multiply2(a,b) {
    return a * b;
}

let show = multiply2(5,5);
console.log(show);



function favoriteQuote() {
    console.log ("Quote")
}

favoriteQuote();


// arrow functions 


const subtract = (a,b) => {
    console.log(a -b);
};

subtract(10,5);


const divide = (a,b) => {
    console.log(a / b);
};

divide(10, 2);


const even = (num) => {
    if (num % 2 === 0) {
    console.log("True");
} else {
    console.log("False");
}
};

even(2);
even(7);

// ternay operator 


const isEven = (num) => (num % 2 === 0 ? "True" : "False");


console.log(isEven(2));
console.log(isEven(7));


const greet = (name) => {
    console.log(`Hi ${name}`);
}

greet("Andy");


const square = (num) => {
    console.log(num ** 2);
}

square(27);


const todaysDate = () => {
    console.log(new Date().toDateString());
};

todaysDate();














