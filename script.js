// CREATING ALL VARIABLES HERE 

let [minutes, seconds] = [0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

// ALL FUNCTION STARTS HERE 

// 1. MAIN STOPWATCH FUNCTION 

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    let m = minutes < 10 ? "0"+ minutes : minutes;
    let s = seconds < 10 ? "0"+ seconds : seconds

    displayTime.innerHTML = m +":"+ s;
}


// 2.  START STOPWATCH FUNCTION 

function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}


// 3. WATCH STOP FUNCTION

function  watchStop(){
    clearInterval(timer);
}

// 4. RESET TIMER FUNCTION 

function watchReset(){
    clearInterval(timer);
    [minutes, seconds] = [0,0];
    displayTime.innerHTML = "00:00";
}