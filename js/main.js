let minutes = 0;
let seconds = 0;

function countup(){
    seconds++;
    if (seconds === 60){
        seconds = 0;
        minutes++;
    }

    if (minutes < 10){
        document.getElementById("min").innerHTML = "0" + minutes;
    }else {
        document.getElementById("min").innerHTML = "0" + minutes;
    }

    if (seconds < 10){
        document.getElementById("sec").innerHTML = "0" + seconds;
    }else {
        document.getElementById("sec").innerHTML = "0" + seconds;
    }
}

function watch(state){
    if (state === "start"){
        setInterval(countup,1000);
    }
}