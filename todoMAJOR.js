let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let liS=document.querySelectorAll("li");
let btn=document.querySelector("button");


btn.addEventListener("click",function(){
let newListedItem=document.createElement("li");
//create a new li element for every new task u wanna add on page
newListedItem.innerText=inp.value;
//equate the value of inp.value to the li
ul.appendChild(newListedItem);
//to make the newly added  li visible on screen append it
// like child to the ul

let delBtn=document.createElement("button");
//this is to create buttons for new li which will be added 
delBtn.innerText="delete";
delBtn.classList.add("delete");
//adding class "delete" of already existing delbuttons in html code
newListedItem.appendChild(delBtn);
//we will append the new delBtn as a child to the newly added li

inp.value="";
//this resets the value of old task from input box
//  after adding ur old task
});


/*
---------------------------------------------------------------
let delBtns=document.querySelectorAll(".delete");
//we accessed all the delete button using its class delete
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
      this.parentElement.remove();
      console.log(this.parentElement);
    });
}
//this delbtns eventlistenever 
// will only work for already existing li in code 
//to overcome this use event delegation-which means the newly added
//  elements/delbtns wont be able to access the eventListeners
//so we will create eventListeneers for the already existing
// parent element of the child,so that when new child is added 
// uske liye automatically parent ka eventListener trigger kare..
//andar wala child click kiya toh bahar wala parent trigger hoga
//yeh concept of event bubbling ham yaha use krnge
------------------------------------------------------------------
*/

ul.addEventListener("click",function(event){
console.log("The element clicked inside ul is",event.target);
//this tells us ul parent ke andar konsa wala baccha click hua
//  by using event.target which gives html code
console.dir(event.target.nodeName);
//gives nodeName in object of ul 
//gives nodeName property of ul object

if(event.target.nodeName== "BUTTON" ){
    event.target.parentElement.remove();
    //this means we will access event.target se 
    // button ka html code phir usse button ke parentElement-li
    //ko remove krdenge aur hojayega li dlete uske sath button bhi
}
});