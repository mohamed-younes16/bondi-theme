let nav = document.querySelector("nav")
let ulNav = document.querySelector("nav ul.nav")
let past = window.scrollY
let navSearch = document.querySelector("nav form button")
window.onscroll = function (){
    let cur = window.scrollY
    let toBottom = cur > past ;
    nav.classList.toggle("bg-body-secondary" ,toBottom )
    ulNav.classList.toggle("text-white" , !toBottom)
    navSearch.classList.toggle ("btn-outline-info" , !toBottom)
    navSearch.classList.toggle("btn-outline-dark" ,toBottom)
    past=cur
}
function order(words){
    words = words.split(" ")
    let w = []
    let i 
    words.forEach((el)=> {
    i = +el.match(/\d/)[0] -1
    w.splice(i ,0 ,el)
})
return w.join(" ")
}

console.log(order("E2rnst H1eidi I5gor C6indy Gre7g F4iona 3Jamila"))




let observer = new IntersectionObserver((elmnts)=>{
 
  elmnts.forEach(e=>{
    if (e.isIntersecting) {
       e.target.classList.add("shown")
   
    }
   
  })
    },{
      threshold :window.innerWidth < 768 ? 0 : 0.2 ,
      rootMargin :window.innerWidth < 768 ? "200px" : "0px"
      
    })

let bigchs = document.querySelectorAll("body > *:not(:first-child)")
bigchs.forEach(e=>e.classList.add("hidden"))

bigchs.forEach((e)=>{
observer.observe(e)
})
