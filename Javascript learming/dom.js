// let get = document.querySelector("div")
// console.log(get.getAttribute("class"))

// let btn = document.querySelector("button")
// console.log(btn.setAttribute("id" , "oror"));

// btn.style.backgroundColor = "red"

// btn.style.border = "none"
// btn.style.borderRadius = "50px"

// btn.style.visibility = "hidden"

// get.after(btn)

// let newhead = document.createElement("h1")
// newhead.innerHTML = "This is new heading"

// document.querySelector("body").prepend(newhead)

// let newdiv = document.querySelector("div");
// newdiv.getAttribute("class").prepend(btn)

// question 1

let newbtn = document.createElement("button");
newbtn.innerText = "Click Me";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector("body").prepend(newbtn);

// question 2

let para = document.querySelector("p")
para.classList.add("newclass")
