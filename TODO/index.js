let add_btn = document.querySelector(".add_btn")
let ul = document.querySelector("#ul")
let add_inp = document.querySelector(".add_inp")
let lists = document.querySelectorAll(".li")

add_btn.addEventListener("click", () => {

    if (add_inp.value == "") {
        alert("Please enter item name")
    } else {
        
        ul.innerHTML += 
        `<li class= "li">
                <input type="checkbox" class="check">
                <h5 class="nam_taker">${add_inp.value}</h5>
    
            <i class="fas fa-trash close"></i>
        </li>
        `
        add_inp.value = ""
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";

    }
    }

})



var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

let bar = document.querySelector("#bars")
let overlay = document.querySelector("#overlay")
let cross = document.querySelector("#cross")
let menu_items = document.querySelector(".menu_items")
function left_menu() {
    cross.classList.toggle("cross_left")
    overlay.classList.toggle("lefting")
    menu_items.classList.toggle("lefting")
}

bar.addEventListener("click", () =>{
    left_menu()
})

overlay.addEventListener("click", () =>{
    left_menu()
})

cross.addEventListener("click", () =>{
    left_menu()
})


