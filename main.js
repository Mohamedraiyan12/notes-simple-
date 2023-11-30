
let popcontent =document.getElementById("popcontent")
let popoverlay =document.getElementById("popoverlay")
    function openpopup(){
        popoverlay.style.display ="block";
        popcontent.style.display ="block";
    }

    let cancelbtn =document.getElementById("popbtnclose")
    cancelbtn.addEventListener("click", function (){
        popoverlay.style.display = "none";
        popcontent.style.display ="none";
    });

let container = document.getElementById("container")
let addbtn = document.getElementById("addbtn")
let textcontent = document.getElementById("textcontent")
let inputval = document.getElementById("inputval")


    function add() {
    let div = document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML =`<p contenteditable ="true" class="input-box">${inputval.textContent}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display = "none";
    popcontent.style.display = "none";
    }
    function del(event){
        event.target.parentElement.remove()
    }