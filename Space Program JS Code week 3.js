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

      //takes whatever currTime is and print it on line 39
      setTimeout(function(){
        //shows currTime on webpage for reader to see
        countdownElement.innerHTML = currTime;
        //simulates countdown by variables of 5
        currTime = currTime - 5;
    }, timeout);
    //simulates each timeout going down by 5
    timeout = timeout + timeoutIncrement;

    //repeat first setTimeout function to simulate the countdown going down
    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    setTimeout(function(){
        countdownElement.innerHTML = currTime;
        currTime = currTime - 5;
    }, timeout);
    timeout = timeout + timeoutIncrement;

    //This is the last time we need to call the setTimeout function, currTime is now 0
    setTimeout(function(){
        //shows on webpage that the Countdown is over
        alert("Now it's time for take off!!!")
        countdownElement.innerHTML = "Launch Successful!";
    }, timeout);

}