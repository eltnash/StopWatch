           
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


/**############################################################# */

// Function to start the timer


//Steps - write pseudocode and comments breakdown the problem and visualizing how the solution would look like to each problem
    //  - Research on the necessary tools (syntax) needed to solve each problem.
    //  - implement and test out the tools to see if they solve the problem. 
    //  - if problem is solved document the solution and the tools used. if problem is not solved revisit steop 1 and 2


// How do we start the timer and how do we make sure that when the seconds counter reaches 60 it updates the minute counter by one each time and in the process resests the seconds counter back to 0?. how do we also do the same for the minute counter in relation the hours counter? (run the whole process within a setTimer function)


// how do we update the seconds counter to  dynamically increment by one everysecond until it reaches 60? create a seconds variable to hold the number value then dynamically increment that number value by one (seconds ++)
// how do we check that the seconds counter has reached 60 ? (if and else statements) 
// how do we update the minute counter? create a minute counter variable which has a 0 value assigned to it. when the its TRUE that our second counter has reached a value of 60, one is added to the value inside the minute variable. (minute ++)
// how do we check that the minute counter has reached 60 ? (if and else statements)
// how do we update the hours counter ? create a hours variable which has a 0 value assigned to it. when its TRUE that our minute variable contains the number 60, one is added to the value inside the hours variable. (hours++)
// how do we make sure this whole process runs dynamically within a set interval  (setInterval function)



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

/**############################################################### */


// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
}



// Start/Stop Button functionality
// i want to start my timer by pressing a button and i want to pause the timer at any value during its run when i press the same button. so button serves two functions play and pause. so the buttion is play when what condition is present or what condition should be set to allow the function which starts the timer to be called and what condition should be set on the same button to allow the function which pauses the timer to be called ?
// how can i link pressing of a button with the behaviour of starting the timer and pausing it ?
// create an event listener which listens for a click event from an html element object and procees to execute a function where the behaviour of starting and pausing the timer is coded.

startStopBtn.addEventListener('click', function(){
    if (isRunning === false){
        startTimer();
        isRunning = true;
    } else if (isRunning === true){
        stopTimer();
        isRunning = false;
    }
});
  

// startStopBtn.addEventListener('click', function () {
//     if (!isRunning) {
//         startTimer();
//         isRunning = true;
//         // Change the button from play to pause
//         playPauseIcon.src = "img/pause_16dp_FFFFFF_FILL1_wght400_GRAD0_opsz20.png"; // Assuming you have an image for the pause symbol
//         playPauseIcon.style.backgroundColor = 'orange'; // Change button color to orange
//     } else {
//         stopTimer();
//         isRunning = false;
//         // Change the button from pause to play
//         playPauseIcon.src = "img/play_arrow_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
//         playPauseIcon.style.backgroundColor = 'green'; // Change button color back to green
//     }
// });

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
              
