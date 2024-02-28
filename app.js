var list =[]; //to do activity list

//input_value stores to do activites added in the form
var input_value = document.getElementById("input");

//ul tag
var toDoList = document.getElementById("todolist");


var btn = document.getElementById("button");
//Using onlclick to run the click function when button is clicked.

btn.onclick=function click(){
    list.push(input.value);
    console.log(list);
    input.value ="";
    showList();
}

//displaying each to-do activity
function showList(){
    toDoList.innerHTML=" ";
    list.forEach(function(n,i)
    {
        toDoList.innerHTML += "<li>" + n 
        + "<a onclick ='editItem(" + i + ")'> Edit </a>" 
        + "<a onclick='deleteItem(" + i + ")'>&times | </a></li>";
    });
}

//deleting an activity
function deleteItem(i){
    list.splice(i,1); // removing one item at specified index
    showList();
}

function editItem(i){
    var newListValue = prompt("Please insert your new value");
    list.splice(i,1,newListValue); //removing previous activity and adding the new activity
    showList();
}