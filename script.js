var heading= document.createElement("h1");
heading.innerHTML="Promise Task 2";
var p= document.createElement("p");
p.innerHTML="This is task for fetching the Api data and displaying the content using promise async and await"
var container=document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.className="row";


async function foo(){
try{
    var data = await fetch("https://api.tcgdex.net/v2/en/sets")
    var result = await data.json()
    console.log(result);
    result.forEach((res) =>{
        var col = document.createElement("div");
        col.className= "col-lg-4 col-sm-12 "
       col.innerHTML =` <div class="card" style="width: 18rem;">
    
       <div class="card-header "><h5>${res.name}</h5></div>
      
      
      <div class="card-body">
      <img src="${res.logo}.png" class="card-img-top" alt="Image Not Available">
        <p class="card-text">ID:${res.id.toUpperCase()}</p>
        <p class="card-text">Name:${res.name}</p>
        <p class="card-text">Card Count:${res.cardCount.total}</p>
        
      
        </div>
    </div>`

    row.appendChild(col);
    })
}
catch (err){
    console.log("Error");
}
}

foo()
container.append(row);
document.body.append(heading,p,container);
