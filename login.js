let modal= document.querySelector(".login-modal-hide");

function showlogin(){
    modal.classList.toggle("login-modal-hide");
}

function onlogin(){
    let name = modal.querySelector("input#name").value 
    alert(`Hi ${name}, Welcome to MovieHub`);
    showlogin();
}

function nav(){
    window.location = "#related";
}