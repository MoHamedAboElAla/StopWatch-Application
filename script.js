const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const resetButton = document.getElementById("resetBtn");
const pauseButton = document.getElementById("pauseBtn");
const labList = document.getElementById("lablist");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
pauseButton.addEventListener('click', pauseTimer);

function startTimer() {

    interval = setInterval(updateTimer,10);
    startButton.disabled = true;
    

}

function stopTimer() {
    clearInterval(interval);
    addToLabList();
    resetTimerData();
    startButton.disabled = false;
   
  
}

function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;
 
}
function pauseTimer() {
    clearInterval(interval);
    
    startButton.disabled = false;
  
}

function updateTimer() 
{
    milliseconds++;
    if(milliseconds ===100)
    {
        milliseconds = 0;
        seconds++;
    if(seconds === 60)
    {
        seconds = 0;
        minutes++;
    }
}
displayTimer();
}

function displayTimer() {
    minutesLabel.textContent = padTime(minutes);
    secondsLabel.textContent = padTime(seconds);
    millisecondsLabel.textContent = padTime(milliseconds);
}

function padTime(time){
return time.toString().padStart(2, '0');
}

function resetTimerData()
{
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}

function addToLabList(){
    const lapTime=`${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML=`<span>Lap ${labList.childElementCount + 1}: </span>
    <span>${lapTime}</span>`;
    labList.appendChild(listItem);
}