// Retive todo from local storage or initialize an empty array
// Guarda toda la info de forma local para que cuando se vuelva a abrir la pagna todavia tenga almacenda las tareas que hice antes
let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCist = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton")
//facu 
//tec

// Inicializar proyecto //queda al pendiente de evemntos que sucedan, queda "Escuchando" los posibles eventos
document.addEventListener("DOMContentLoaded",function(){

}) 
