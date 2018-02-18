
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
