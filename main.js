let label = document.getElementById("label");
let checkbox = document.getElementById("checkbox");

label.addEventListener("click", ()=> {
    /* label.classList.toggle('bubble-out'); */
    label.classList.add('bubble-out');
    setTimeout(() => {
        label.classList.remove("bubble-out");
    }, 1000);
    
})