let label = document.getElementById("label");


label.addEventListener("click", ()=> {
    label.classList.add('bubble-out');
    setTimeout(() => {
        label.classList.remove("bubble-out");
    }, 500);
    
})