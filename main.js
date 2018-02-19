
const first_name = "Sandy";
const last_name = "Rao";

function displayName (first_name, last_name) {

    console.log("full name: ", `${first_name} ${last_name}`);
}

displayName("Jamal", "Haynes");
displayName("Debra", "Gordon");
displayName("Svetlana", "Irinov");
displayName("Sequina", "Rodriguez");
displayName("Jessawynne", "Parker");


const updateDOM = function(message) {
    const newMsg = document.getElementById("messages");
    newMsg.innerHTML += message;
    return message;
}


var words = ["A", "list", "of", "words", "go", "here"];
var sentence = words.filter(function(word) {
    return word.length >= 2;
});
    console.log("Sentence: ", sentence);

   var newArray = Array.isArray('input'); // isArray is a function that takes one parameter
   var newMethod = Math.random(); //outputs a random value between 0 and 1.

   
   // writing function with Object and its key
   var getKey = function(object, key) {
       return object[key];
   }

   // Higher Order functions
   function logNegative(number) {
       var negative = -number;
       console.log("negative number", negative);
   }
   logNegative(5); // if you put -5 it shows 5.

   // for list of number to make negative use for each loop
   var myArray = [1,2,3,4,5];
   myArray.forEach(logNegative); // answer: -1, -2, -3, -4, -5
   // This is a higher order function. We put a function inside a function

   myArray.forEach(function(number) {
        var addingThree = number + 3;
        console.log("Adding three", addingThree);
   }) ;

   // New function
   var first = function(array, callback) {
       var first = array[0];
       callback(first);
   }
    first([1, 2, 3, 4], console.log);

    // "use strict" tells the browser to use the latest functionality ES6

    //using fat arrow
    // We usually write a function like this
    // var getA = function(a) {
    //     return a;
    // }

    //with fat arrow you write
    let getA = a =>  a;
    console.log(getA(1)); // should return 1.

    // let square = a => a * a;
    // console.log(square(2));

    // can be re-written as

    let square = a => { return a * a };
    console.log(square(2));

    var x = function() {
        var that = this;
        this.val = 1;
        setTimeout(function() { 
            that.val++;
            console.log("using setTimeout:", that.val)
        }, 1)
    };

    var xx = new x();

    // fat arrow does not have it's own this. It has to get its parent's this.
    // You can re-write the above function as

    var x = function() {
        this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log("incrementing this.val++", this.val);
    }, 1)
};
// This function can be re-written using the fat arrow below.
// var x = function() {
//     console.log(argument[0]);
// };
// x(1,2,3); // should give the answer 1 which is the first array index

// es6 ...n is call spread operator passing n number of arguments
var x = (...n) => {
    console.log("using n spread operator", n[0]);
};

x(1, 2, 3);

function calculateRectangleArea(length, width) {
    return length * width;
}
var roomArea = calculateRectangleArea(10, 10);
console.log("find room Area: ", roomArea);

/// Function returning a function

function youSayGoodBye() {
    console.log("You say Good Bye", youSayGoodBye);

    function andISayHello() {
        console.log("I say hello: ", andISayHello);
        alert("Hello!")
    }

    return andISayHello;
}

var something = youSayGoodBye();
something();

// Closures get involved when the returned inner function isn't self-contained.

function stopWatch() {
    var startTime = Date.now();

    function getDelay() {
        var timeElapsed = Date.now() - startTime;
        console.log("Check time Elapsed: ", timeElapsed);
        alert("time Elapsed", timeElapsed);
    }
        return getDelay;
}

// The above function loops through to get an output to timer()

var timer = stopWatch();

for (var i = 0; i < 1000000; i++) {
    var calc = Math.random() * 10000;
}

// invoke the returned function timer
timer();

// When javascript runtime detects that an inner function relies on variables stored by an outer function, *it ensures those variables are available even if the outer function goes away.*

// The combination of the inner function and the variable the function relies on is called a closure.

// CLOSURE: retains state and scope after it executes

$(document).ready(function() {
    var a = 1;

    $('button').on('click', function() {
        a++;
        alert(a);
    });
    // when the js is done using the function it is called memory leak
    $('button').off('click');
});