//Traffic Lights
let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

//Tarffic Buttons
let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");

//DriverMsg
let driverMsg = document.getElementById("driverMsg")



function turnOnRed(){
    //Traffic Lights
    stopLight.style.backgroundColor = "Red";
    readyLight.style.backgroundColor = "grey"
    goLight.style.backgroundColor = "grey";

    //Tarffic Buttons
    stopButton.style.backgroundColor = "Red";
    readyButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "#1f1d41";

    //DriverMsg
        driverMsg.textContent = "Please STOP Now!!";
        driverMsg.style.color = "Red"
    
}

function turnOnYellow(){
    //Traffic Lights
    stopLight.style.backgroundColor = "grey";
    readyLight.style.backgroundColor = "orange"
    goLight.style.backgroundColor = "grey";

    //Tarffic Buttons
    stopButton.style.backgroundColor = "#1f1d41";
    readyButton.style.backgroundColor = "orange";
    goButton.style.backgroundColor = "#1f1d41";

    //DriverMsg
    driverMsg.textContent = "Get Ready To GO!!";
    driverMsg.style.color = "Orange"
}

function turnOnGreen(){
    //Traffic Lights
    stopLight.style.backgroundColor = "grey";
    readyLight.style.backgroundColor = "grey";
    goLight.style.backgroundColor = "green";

    //Tarffic Buttons
    stopButton.style.backgroundColor = "#1f1d41";
    readyButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "green";

    //DriverMsg
        driverMsg.textContent = "You can GO Now!!";
        driverMsg.style.color = "Green"
    
}