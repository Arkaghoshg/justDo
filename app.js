let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {

    if (inp.value.trim() === "") {
        alert("Please enter a valid task.");
        return; // Do nothing if input is blank or only spaces
    }
    let item = document.createElement("li");

    // Create a span for the task text
    let textSpan = document.createElement("span");
    textSpan.classList.add("task-text");
    textSpan.innerText = inp.value;

    // Create actions container
    let actions = document.createElement("span");
    actions.classList.add("actions");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    actions.appendChild(checkbox);
    actions.appendChild(delBtn);

    item.appendChild(textSpan);
    item.appendChild(actions);

    ul.appendChild(item);
    inp.value = "";
});

// Here we'll be using the concept of Event Bubling 
// with the help of event Delegation

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

ul.addEventListener("click",function(e){
    // console.dir(e.target.nodeName);
    // let listItem = e.target.parentElement;
    if (e.target.nodeName == "BUTTON"){
       const listItem = e.target.closest("li");
       if (listItem) {
            listItem.remove();
        }
    }
    
})