function navbar(){
return `<div id="nav">
<div id="nav_left">
    <input type="text" placeholder="search" id="search"/>
    <button id="btn">Search</button>
</div>
<div id="nav_right">
    <h3><a href="index.html">Home</a></h3>
    <h3><a href="receipe.html">Get Recipe of the Day</a></h3>
    <h3><a href="meal.html">Show Latest Receipe</a></h3>
</div>
</div>
<div id="display"></div>`

}
function displayFood(data){
    let dis = document.getElementById('display');
    for(let i=0; i<data.length; i++){
    let div = document.createElement('div');
    div.className = "foodbox";
    let p = document.createElement('p')
    p.innerText = `${data[i].strMeal}`
    let p1 = document.createElement('p')
    p1.innerText = `Category: ${data[0].strCategory}`
    let p2 = document.createElement('p')
    p2.innerText = `Instructions: ${data[i].strInstructions}`
     let img = document.createElement('img');
     img.src = `${data[i].strMealThumb}`

     div.append(img,p,p1,p2);
     dis.append(div);
    }
    

}

export  {navbar,displayFood}