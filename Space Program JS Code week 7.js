//arrays can hold multiple values, this is where we put those
var arrInterval = new Array();

//upon loading webpage, you can see and click a start button, starting the countdown when the viewer is ready
function startButtonClick(){
    //don't let user click the start button while countdown is running
    document.getElementById("buttonStart").disabled = true;
    document.getElementById("buttonEnd").disabled = false;
    
    //allows this variable to get easier access to span id countdown from line 39
    var countdownElement = document.getElementById("Countdown"); 
        
    // passes the value to the function in the JS file so it can add the countdown element
    runTimer(countdownElement); 
}

/*the stop button will read the currTime counters, and upon clicking the button it will
stop the countdown at the currTime counter. */
function stopButtonClick(){
      //don't let user click the stop button while countdown is running
      document.getElementById("buttonStart").disabled = false;
      document.getElementById("buttonEnd").disabled = true;
    
    for (counter = 0; counter < 51; counter++){
        clearTimeout(arrInterval[counter]);
    }
}

//validate and gather user input, this function will ask for a first/last name and badge number
//the name needs to be less then 20 characters
//the badge number needs to be 3 characters or less
function getUserInput(){
    var fullName = "";
    var badgeNumber = 0;

    do{
        var firstName = prompt("Please enter first name (under 10 characters): ");
        var lastName = prompt("Please enter last name (under 10 characters): ");

        fullName = firstName + " " + lastName;

        if(fullName.length < 2){
            alert("Please enter your name!");
        }
        
        if(fullName.length > 20){
            alert("Too many characters!! You had: " + fullName.length + " characters! Please try again");
        }
    }
    while(fullName.length < 1, fullName.length > 20);

    do{
        badgeNumber = prompt("Please enter your Space Program ID Number (6 digits max): ");

        if(badgeNumber < 1){
            alert("Please enter a badge number.");
        }
        
        if(badgeNumber > 999999){
            alert("The Space Program ID you have provided doesn't exist, please try again.");
        }
    }
    while(badgeNumber < 1, badgeNumber > 999999);

    return fullName + ", ID #" + badgeNumber;
}

//this is our new countdown function
function runTimer(countdownElement){

     //tracks current countdown time
     var currTime = 50;

     //tracks current timeout
     var timeout = 0;

     //represents the timer waiting 5 seconds before counting down
     var timeoutIncrement = 1000;

        //loops the countdown ten times, for loops are used when you know how many times you want the code to repeat itself
        for(var counter=0; counter < 51; counter++) {

            //takes whatever currTime is and print it
            arrInterval[counter] = setTimeout(function(){
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
                currTime = currTime - 1;
            }, timeout);
            //simulates each timeout going down by 5
            timeout = timeout + timeoutIncrement;

        }
}