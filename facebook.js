
// SELECT DOM ELEMENTS
var input = document.getElementById("input"),
    button = document.getElementById("enter"),
    ul = document.querySelector("ul");

// TO CREATE A DELETE BUTTON & STYLE IT
function deleteButton () {
    var button = document.createElement("button");
    button.innerHTML = "delete";
    button.classList.add("delete");
    return button;
}

// PERFROMS 3 FUNCTIONS. ADDS/DELETE AN ITEM, ADDS DELETE BUTTON, AND ADDS THE "DONE" EVENT LISTENER
function toggleListItem () {
        var li = document.createElement("li");
        var del = deleteButton();
        var val = document.createTextNode(input.value);
        if (input.value){
            li.appendChild(val);
            li.appendChild(del);
            ul.appendChild(li);
        }
        input.value = '';
        del.addEventListener("click", function(){
            ul.removeChild(li);
        })
        li.addEventListener("click", function(){
            li.classList.toggle("done");
        })   
}

//ADD ELEMENT BY KEYPRESS
function addByKey (event) {
    if (event.keyCode === 13) {
        toggleListItem();
    }
}

//CALL
button.addEventListener("click", toggleListItem);
input.addEventListener("keypress", addByKey);

