//empty function, code will be added later
function startButtonClick(){}

//empty function, code will be added later
function stopButtonClick(){}

//this is our new countdown function
function runTimer(countdownElement){

     //tracks current countdown time
     var currTime = 50;

     //tracks current timeout
     var timeout = 0;

     //represents the timer waiting 5 seconds before counting down
     var timeoutIncrement = 5000;

        //loops the countdown ten times, for loops are used when you know how many times you want the code to repeat itself
        for(var counter=0; counter < 11; counter++) {

            //takes whatever currTime is and print it on line 39
            setTimeout(function(){
                //when countdown is done
                if (currTime == 0){
                        //shows on webpage that the Countdown is over, and gives the viewer a popup screen
                        alert("Now it's time for take off!!!")
                        countdownElement.innerHTML = "Launch Successful!";
                }
                //if current time on countdown is less then 25, a new message will appear with the current timer appearing after the message
                else if (currTime < 30){
                    countdownElement.innerHTML = "WARNING: Approx. 50% time remaining till launch! Time left = " + currTime;
                }
                //shows currTime on webpage for reader to see until less then 25
                else{
                    countdownElement.innerHTML = currTime;
                }
                //simulates countdown by variables of 5
                currTime = currTime - 5;
            }, timeout);
            //simulates each timeout going down by 5
            timeout = timeout + timeoutIncrement;

        }
}