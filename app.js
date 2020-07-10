//date
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

//stopwatch
var min=0;
var sec=0;
var msec=0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec =0
    }else if(sec >= 60){
        min++
        sec = 0
        minHeading.innerHTML = minsec = 0
    }
}
function start(btn){
    btn.setAttribute('disabled', 'disabled');
interval = setInterval(timer,10)
}
function stop(){
    document.getElementsByClassName('btn')[0].removeAttribute('disabled');
clearInterval(interval)
}
function reset(){
    document.getElementsByClassName('btn')[0].removeAttribute('disabled');
    
min=0;
sec = 0;
msec = 0;
minHeading.innerHTML = min
secHeading.innerHTML= sec
msecHeading.innerHTML = msec
stop()
}
