const frontendskills = [
{name : "html",percent:100},
{name : "css",percent:35},
{name : "Js",percent:15},
{name : "React",percent:10},
]
const backendskills = [
{name : "node js",percent:70},
{name : "mongo DB ",percent:52},
{name : "SQL",percent:25},
{name : "express Js",percent:60},
]


const fe =document.getElementById("frontend")
const be =document.getElementById("backend")
display(frontendskills,fe)
display(backendskills,be)

 function display(arr ,el){

     for (const item of arr) {
         el.innerHTML+=`<div class="progress-bar">
         <div class="progress" style=" width:${item.percent}%"> ${item.name} </div>
       </div>`
         
 }
}