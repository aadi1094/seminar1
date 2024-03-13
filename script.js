let modal = document.querySelector(".rate-modal-hide")
let ratebtn =  document.querySelector(".rate-btn")


ratebtn.onclick = function(){
    modal.classList.toggle("rate-modal-hide");
}

function rate(i,prevrate){
    document.querySelector(".rate-modal .num").innerHTML = prevrate + i;
}

function minus(){
    let prevrate = parseInt(document.querySelector(".rate-modal .num").innerHTML);
    if(prevrate > 0){
        rate(-1, prevrate);
    }
}

function plus(){
    let prevrate = parseInt(document.querySelector(".rate-modal .num").innerHTML);
    if(prevrate < 5){
        rate(1, prevrate);
    }
}

function onrate(){
    let rateNum = parseFloat(document.querySelector(".rating h2").innerHTML);
    let newrate = parseInt(document.querySelector(".rate-modal .num").innerHTML);
    rateNum = (rateNum+newrate)/2;
    document.querySelector(".rating h2").innerHTML = rateNum;
    modal.classList.toggle("rate-modal-hide");
}