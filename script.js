"use strict";

const toDoList = document.querySelector(".todo-list");
const input = document.querySelector(".input");
const btnAdd = document.querySelector('.btn-add');
const btnClear = document.querySelector(".btn-clear");

btnAdd.addEventListener('click', (e)=>{
    e.preventDefault;
    
    if(input.value != ""){
        const toDoItem = document.createElement("li");
        toDoItem.textContent = input.value;
        toDoList.append(toDoItem);
    }
    
    input.value = "";
});

btnClear.addEventListener('click', (e)=>{
    e.preventDefault;

    toDoList.childElementCount > 0 ? toDoList.lastElementChild.remove() : null;

});
