const user = document.getElementById("user")
const dots = document.getElementById("dots")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const cta = document.getElementById("cta")
const navLink = document.querySelector(".nav-link")

console.log("app running...")

const tl = gsap.timeline()
tl.from(".navbar", {
    width : 0,
    duration:5,

})
tl.from(".nav-link", {

    y: "100",
    stagger:0.2,
    duration:1
})

tl.from(user, {
    y: "100vh",
    opacity: 0,
    duration: 1
})
tl.from(dots, {
    rotation: 360,
    scale: -2,
    opacity: 0,
    duration: 1
})
tl.from(title, {
    x: "-200vh",
    duration: 1
})
tl.from(desc, {
    x: "200vh",
    duration: 1
})
tl.from(cta, {
    scale:2,
    // x: "200vh",
    opacity:0,
    duration: 1
})

window.addEventListener("mousemove", function(event){
    const x=event.pageX
    const y=event.pageY
    gsap.to(".circal", 0.7, {x,y})
    gsap.to(".tiny", 0.2, {x,y})

    console.log(x,y); 
})
// window.addEventListener("mousemove", function(event){
//     const x=event.clientX
//     const y=event.clientY
//     gsap.to(".circle",0.7,{x,y})
//     gsap.to(".tiny",0.2,{x,y})
// })