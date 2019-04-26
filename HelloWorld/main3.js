

//single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector(".container"));
//multiple element
console.log(document.querySelectorAll('.item'));
//console.log(document.getElementByClassName("item"));
console.log(document.getElementsByTagName("li"));


const items=document.querySelectorAll(".item");

const ul=document.querySelector(".items");

//ul.remove
//ul.lastElementChild.remove();
ul.firstElementChild.textContent="hello";
ul.children[1].innerText="brad";
ul.lastElementChild.innerHTML="<h1>Hello</h1>"

const btn=document.querySelector(".btn");
btn.style.background="red";

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector("#my-form").style.background="green";
    document.querySelector("body").classList.add("bg-dark");
    document.querySelector(".items").lastElementChild.innerHTML="<h1>hello</h1>";
});
