import {navbar,displayFood }from "./navbar.js"
document.body.innerHTML = navbar();
function load(){
    let q = document.getElementById("search").value;
 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`)
 .then(function(response){
    return response.json()
 })
 .then(function(response){
     console.log(response.meals)
     displayFood(response.meals)
 })
 .catch(function(error){

 })
}



window.addEventListener("load", function(){
    let btn = document.getElementById("btn");
    btn.addEventListener("click",load)
})