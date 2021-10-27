import {navbar,displayFood } from "./navbar.js";
document.body.innerHTML = navbar();
function load(){

 fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
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
    load();
})