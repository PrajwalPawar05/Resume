const projects = [
    { 
        name: "Todo",
        image: "https://images.unsplash.com/photo-1580923368248-877f237696cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        url: "https://www.google.com",
        desc: "Lorem"
},

    { 
        name: "Todo",
        image: "https://images.unsplash.com/photo-1580923368248-877f237696cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        url: "https://www.google.com",
        desc: "Lorem"
},

    { 
        name: "Todo",
        image: "https://images.unsplash.com/photo-1580923368248-877f237696cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        url: "https://www.google.com",
        desc: "Lorem"
}
]

let str = ""
for (const item of projects) {
    str += `
    <div class="card">
    <img src="${item.image}" alt="">
    <div class="card-body">
        <h1>${item.name}</h1>
        <p>${item.desc}</p>
        <a href="${item.url}">Visit</a>
    </div>
    </div>`
}

document.getElementById("projects").innerHTML = str

gsap.registerPlugin(ScrollTrigger)

gsap.from(".card",{
    ScrollTrigger:{
        trigger: ".card",
        scrub: 1,
        start: 1,
        end: "+=200"
    },
        
    scale: 0, 
    rotation: 360, 
    stagger: 0.5
})