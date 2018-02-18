
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