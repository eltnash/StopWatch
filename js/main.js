           
//GRAB THE NECESSARY ELEMENTS WE NEED TO MANIPULATE FROM THE DOM

const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const playPauseIcon = document.getElementById('imageStartStop');
const resetIcon = document.getElementById('imageReset');


let interval;
let isRunning = false; // flag to track the state of the timer



let seconds = 0
let minutes = 0
let hours = 0


// How do we display our digits which will change dynmaically on our webpage
// Function to update the timer display
function updateDisplay() {
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    
    //Applying our code above as content to our div timer element tag
    timerDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


// How do we start the timer
// Function to start the timer
function startTimer() {
    interval = setInterval(() => {
        //execute this behavour after a certain time has passed
        seconds++;

        if (seconds === 60) {
            seconds = 0; // reset seconds counter back to zero
            minutes++; // increment the minute counter by one
        }

        if (minutes === 60) {
            minutes = 0;  // reset minute counter back to zero
            hours++; // increment the hours counter by one
        }

        updateDisplay();
    }, 1000);
}




// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
}

// Start/Stop Button functionality
startStopBtn.addEventListener('click', function () {
    if (!isRunning) {
        startTimer();
        isRunning = true;
        // Change the button from play to pause
        playPauseIcon.src = "img/pause_16dp_FFFFFF_FILL1_wght400_GRAD0_opsz20.png"; // Assuming you have an image for the pause symbol
        playPauseIcon.style.backgroundColor = 'orange'; // Change button color to orange
    } else {
        stopTimer();
        isRunning = false;
        // Change the button from pause to play
        playPauseIcon.src = "img/play_arrow_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
        playPauseIcon.style.backgroundColor = 'green'; // Change button color back to green
    }
});

// Reset Button functionality
resetBtn.addEventListener('click', function () {
    stopTimer();
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    // Change the play button back to its initial state
    playPauseIcon.src = "img/play_arrow_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
    playPauseIcon.style.backgroundColor = 'green'; // Reset button color to green
});
              
