const myform=document.querySelector("#my-form");
const nameinput=document.querySelector("#name");
const emailinput=document.querySelector("#email");
const msg=document.querySelector(".msg");
const userlist=document.querySelector("#users");
myform.addEventListener("submit",onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameinput.value===""||emailinput===""){
        msg.classList.add("error")
        msg.innerHTML="<h1>enter all fields</h1>"
        setTimeout(()=> msg.remove(),3000);
        }
    else{
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`));

        userlist.appendChild(li);

        //clear
        nameinput.value="";
        emailinput.value="";
        }
}