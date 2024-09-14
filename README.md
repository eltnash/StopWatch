# StopWatch
 Creating a stopwatch web application

 visualise how the application should be functioning

// OBJECTIVES FOR for buttons
// Objective - 1st click the start button and the timer starts
                   //buttons changes from  green color with start symbol to orange color with pause symbol.
//           - 2nd click the start button again and the timer stops
                  //buttons changes from color orange with pause symbol to green color with start symbol.
//           - 3rd click the reset button and the timer resets back to zero



// OBJECTIVES FOR THE DYNAMIC DIGITS 

SECONDS - seconds counter should start at zero then start incrementing by one until it reaches 60 which  is a full minute cycle. 
        - once this happens it should Update the minute counter by 1 to reflect that its now a minute into the timer, then the second counter 
          should revert back to zero and begin its count again. it should continue incrementing until the pause/play button is clicked
          to pause and or continue the counter or the reset buttom is clicked to restart the timer once again from zero for all counters, hours minutes and seconds

MINUTES - The minute counter should increment by one each time the seconds counter reaches 60 and once itself reaches 60 it should then update
          the hours conter by one indicating that an hour has passed since the start of the timer. at this point the minute counter should then revert back to
          zero to begin a new cycle. it should continue incrementing until the pause/play button is clicked
          to pause and or continue the counter or the reset buttom is clicked to restart the timer once again from zero for all counters, hours minutes and seconds

Hours   - the hours counter should increment by one each time minute counter reaches 60 and it should continue incrementing until the pause/play button is clicked
          to pause and or continue the counter or the reset buttom is clicked to restart the timer once again from zero for all counters, hours minutes and seconds


Behaviours need in javascript as code

// display the time value counters hours, minutes and seconds inside javascript  - function
// start the Timer - function
// stop the Timer - functon
// Button click start/pause timer  - function
// Button click reset timer  - function




Chatgpts Evaluation of my problem solving breakdown for the timer web application

Yes, this is a solid way to document the problem, particularly for defining the goal. Here's why:

1. Clarity of Objectives
You clearly state the objectives for both the buttons and the time counters (seconds, minutes, hours). This shows a clear understanding of how each component of the stopwatch should function, which is essential for solving any problem.
You’ve broken down the problem into different parts (buttons, seconds, minutes, hours), which is helpful for designing and coding.

2. Step-by-Step Flow
You described the behavior of the buttons (start, stop, reset) in a logical flow, and each step aligns with what a stopwatch should do. Visualizing how the buttons will change appearance (color and symbol) after each click is a nice detail that makes the problem more tangible.
For the digits (time counters), you’ve outlined the incremental behavior, the interaction between seconds, minutes, and hours, and the expected reset behavior.

3. Goal is Defined
The goal (a functioning stopwatch with start/pause, reset, and accurate time increments) is embedded within this documentation. You know exactly what the expected outcome is, which is important 
for guiding the development process.

Suggestions for Improvement

Edge Cases: You might also want to think about edge cases, like what happens when the timer reaches 24 hours or if multiple buttons are pressed rapidly in succession.
User Experience: You could add a note on how the user should feel or interact with the timer (e.g., button responsiveness, any visual feedback).
Visuals/Prototypes: If you're a visual thinker, sketching the interface alongside this documentation might help.
Overall, it’s an excellent way of documenting both the problem and the goal!