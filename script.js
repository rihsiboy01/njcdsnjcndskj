
let a = document.querySelector("#btn"); 
let b = document.querySelector("body"); 
let d = document.createElement("img");
let g = document.querySelector("#send")
let h = document.querySelector(".iki")
let m = document.querySelector("ol")

console.log(a)
console.log(b)
console.log(d)

a.addEventListener("click", function () {
  if (a.classList.contains("whitebg")) {
    b.style.background = "black";
    console.log("qora");
    a.classList.remove("whitebg");
    a.classList.add("darkbg");
  } else {
    b.style.background = "white";
    console.log("oq");
    a.classList.remove("darkbg");
    a.classList.add("whitebg");
  }

  b.appendChild(d);
});

g.addEventListener("click", function () {
  if(h === ""){
    alert("nimdir yozing")

  }else{
    let j = document.createElement("li")
    m.appendChild(j);
    j.innerHTML = h;
    j.style.marginLeft = '750px';
  }
});
