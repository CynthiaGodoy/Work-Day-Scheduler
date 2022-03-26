window.onload = function() { //PROCESSES LOAD EVENT AFTER THE ELEMENT HAS FINISHED LOADING. CANNOT BE AN ACTUAL NUMBER
    colorCode();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
}

var currentDay = moment().format("dddd LL"); //dddd: DAY OF THE WEEK. LL: Month day, year
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT"); //LT: 00:00 AM/PM
$("#currentTime").append(currentTime);

var now = new Date().getHours();

function colorCode() { // PAST, PRESENT, FUTURE COLOR CODING SCRIPT
    if (now > 9) { //9AM
        $("#task9am").addClass("past"); //BEFORE CURRENT HOUR IS THE PAST
    } else if (now >= 9 && now < 10) {
        $("#task9am").addclass("present"); //AT CURRENT HOUR IS PRESENT
    } else if (now < 9) {
        $("#task9am").addClass("future"); //AFTER CURRENT HOUR IS FUTURE
    }

    if (now > 10) { //10AM
        $("#task10am").addClass("past"); 
    } else if (now >= 10 && now < 11) {
        $("#task10am").addclass("present"); 
    } else if (now < 10) {
        $("#task10am").addClass("future");
    }

    if (now > 11) { //11AM
        $("#task11am").addClass("past"); 
    } else if (now >= 11 && now < 12) {
        $("#task11am").addclass("present"); 
    } else if (now < 11) {
        $("#task11am").addClass("future");
    }

    if (now > 12) { //12PM
        $("#task12pm").addClass("past"); 
    } else if (now >= 12 && now < 13) {
        $("#task12pm").addclass("present"); 
    } else if (now < 12) {
        $("#task12pm").addClass("future");
    }

    if (now > 13) { //1PM
        $("#task1pm").addClass("past"); 
    } else if (now >= 13 && now < 14) {
        $("#task1pm").addclass("present"); 
    } else if (now < 13) {
        $("#task1pm").addClass("future");
    }

    if (now > 14) { //2PM
        $("#task2pm").addClass("past"); 
    } else if (now >= 14 && now < 15) {
        $("#task2pm").addclass("present"); 
    } else if (now < 14) {
        $("#task2pm").addClass("future");
    }

    if (now > 15) { //3PM
        $("#task3pm").addClass("past"); 
    } else if (now >= 15 && now < 16) {
        $("#task3pm").addclass("present"); 
    } else if (now < 15) {
        $("#task3pm").addClass("future");
    }

    if (now > 16) { //4PM
        $("#task4pm").addClass("past"); 
    } else if (now >= 16 && now < 17) {
        $("#task4pm").addclass("present"); 
    } else if (now < 16) {
        $("#task4pm").addClass("future");
    }

    if (now > 17) { //5PM
        $("#task5pm").addClass("past"); 
    } else if (now >= 17 && now < 18) {
        $("#task5pm").addclass("present"); 
    } else if (now < 17) {
        $("#task5pm").addClass("future");
    }
}

function nineAM() {
var inputTextarea = document.querySelector("#task9am"); //SET VARIABLE INPUTTEXTAREA TO TASK9AM
var outputDiv = document.querySelector("#task9am"); //SET VARIABLE OUTPUTDIV TO TASK9AM
var saveButton = document.querySelector("#button9am"); //SET VARIABLE SAVEBUTTON TO BUTTON9AM

saveButton.addEventListener("click", updateOutput); //EVENT LISTENER THAT FIRES WHEN CLICK SAVEBUTTON

outputDiv.textContent = localStorage.getItem("content9"); //GET ITEMS FROM LOCAL STORAGE
inputTextarea.value =localStorage.getItem("content9"); 

function updateOutput () {
    localStorage.setItem("content9", inputTextarea.value) //ACCESSES LOCAL STORAGE & ADDS ITEM
    outputDiv.textContent = inputTextarea.value; 
}
}

function tenAM() { //10AM
    var inputTextarea = document.querySelector("#task10am");
    var outputDiv = document.querySelector("#task10am");
    var saveButton = document.querySelector("#button10am");
    
    saveButton.addEventListener("click", updateOutput);
    
    outputDiv.textContent = localStorage.getItem("content10")
    inputTextarea.value =localStorage.getItem("content10");
    
    function updateOutput () {
        localStorage.setItem("content10", inputTextarea.value);
        outputDiv.textContent = inputTextarea.value;
    }
    }

function elevenAM() { //11AM
    var inputTextarea = document.querySelector("#task11am");
    var outputDiv = document.querySelector("#task11am");
    var saveButton = document.querySelector("#button11am");

    saveButton.addEventListener("click", updateOutput);
    
    outputDiv.textContent = localStorage.getItem("content11")
    inputTextarea.value =localStorage.getItem("content11");

    function updateOutput () {
        localStorage.setItem("content11", inputTextarea.value);
        outputDiv.textContent = inputTextarea.value;
    }
    }

function twelvePM() { //12PM
    var inputTextarea = document.querySelector("#task12pm");
    var outputDiv = document.querySelector("#task12pm");
    var saveButton = document.querySelector("#button12pm");

    saveButton.addEventListener("click", updateOutput);
    
    outputDiv.textContent = localStorage.getItem("content12")
    inputTextarea.value =localStorage.getItem("content12");
    
    function updateOutput () {
        localStorage.setItem("content12", inputTextarea.value);
        outputDiv.textContent = inputTextarea.value;
    }
    }

function onePM() { //1PM
    var inputTextarea = document.querySelector("#task1pm");
    var outputDiv = document.querySelector("#task1pm");
    var saveButton = document.querySelector("#button1pm");
    
    saveButton.addEventListener("click", updateOutput);
        
    outputDiv.textContent = localStorage.getItem("content1")
    inputTextarea.value =localStorage.getItem("content1");
        
    function updateOutput () {
        localStorage.setItem("content1", inputTextarea.value);
        outputDiv.textContent = inputTextarea.value;
    }
    }

function twoPM() { //2PM
    var inputTextarea = document.querySelector("#task2pm");
    var outputDiv = document.querySelector("#task2pm");
    var saveButton = document.querySelector("#button2pm");
    
    saveButton.addEventListener("click", updateOutput);
    
    outputDiv.textContent = localStorage.getItem("content2")
    inputTextarea.value =localStorage.getItem("content2");
    
    function updateOutput () {
        localStorage.setItem("content2", inputTextarea.value);
        outputDiv.textContent = inputTextarea.value;
    }
    }

function threePM() { //3PM
    var inputTextarea = document.querySelector("#task3pm");
    var outputDiv = document.querySelector("#task3pm");
    var saveButton = document.querySelector("#button3pm");
        
    saveButton.addEventListener("click", updateOutput);
        
    outputDiv.textContent = localStorage.getItem("content3")
    inputTextarea.value =localStorage.getItem("content3");
        
    function updateOutput () {
    localStorage.setItem("content3", inputTextarea.value);
    outputDiv.textContent = inputTextarea.value;
    }
    }

function fourPM() { //4PM
    var inputTextarea = document.querySelector("#task4pm");
    var outputDiv = document.querySelector("#task4pm");
    var saveButton = document.querySelector("#button4pm");
                
    saveButton.addEventListener("click", updateOutput);
                
    outputDiv.textContent = localStorage.getItem("content4")
    inputTextarea.value =localStorage.getItem("content4");
                
    function updateOutput () {
        localStorage.setItem("content4", inputTextarea.value);
        outputDiv.textContent = inputTextarea.value;
    }
    }

function fivePM() { //5PM
    var inputTextarea = document.querySelector("#task5pm");
    var outputDiv = document.querySelector("#task5pm");
    var saveButton = document.querySelector("#button5pm");
    
    saveButton.addEventListener("click", updateOutput);
    
    outputDiv.textContent = localStorage.getItem("content5")
    inputTextarea.value =localStorage.getItem("content5");
    
    function updateOutput () {
        localStorage.setItem("content5", inputTextarea.value);
        outputDiv.textContent = inputTextarea.value;
    }
    }