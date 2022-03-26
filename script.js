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
        $("#task9AM").addClass("past"); //BEFORE CURRENT HOUR IS THE PAST
    } else if (now <= 9 && now < 10) {
        $("#task9AM").addclass("present"); //AT CURRENT HOUR IS PRESENT
    } else if (now < 9) {
        $("#task9AM").addClass("future"); //AFTER CURRENT HOUR IS FUTURE
    }

    if (now > 10) { //10AM
        $("#task10AM").addClass("past"); 
    } else if (now <= 10 && now < 11) {
        $("#task10AM").addclass("present"); 
    } else if (now < 10) {
        $("#task10AM").addClass("future");
    }

    if (now > 11) { //11AM
        $("#task11AM").addClass("past"); 
    } else if (now <= 11 && now < 12) {
        $("#task11AM").addclass("present"); 
    } else if (now < 11) {
        $("#task11AM").addClass("future");
    }

    if (now > 12) { //12PM
        $("#task12PM").addClass("past"); 
    } else if (now <= 12 && now < 13) {
        $("#task12PM").addclass("present"); 
    } else if (now < 12) {
        $("#task12PM").addClass("future");
    }

    if (now > 13) { //1PM
        $("#task1PM").addClass("past"); 
    } else if (now <= 13 && now < 14) {
        $("#task1PM").addclass("present"); 
    } else if (now < 13) {
        $("#task1PM").addClass("future");
    }

    if (now > 14) { //2PM
        $("#task2PM").addClass("past"); 
    } else if (now <= 14 && now < 15) {
        $("#task2PM").addclass("present"); 
    } else if (now < 14) {
        $("#task2PM").addClass("future");
    }

    if (now > 15) { //3PM
        $("#task3PM").addClass("past"); 
    } else if (now <= 15 && now < 16) {
        $("#task3PM").addclass("present"); 
    } else if (now < 15) {
        $("#task3PM").addClass("future");
    }

    if (now > 16) { //4PM
        $("#task4PM").addClass("past"); 
    } else if (now <= 16 && now < 17) {
        $("#task4PM").addclass("present"); 
    } else if (now < 16) {
        $("#task4PM").addClass("future");
    }

    if (now > 17) { //5PM
        $("#task5PM").addClass("past"); 
    } else if (now <= 17 && now < 18) {
        $("#task5PM").addclass("present"); 
    } else if (now < 17) {
        $("#task5PM").addClass("future");
    }
}

function nineAM() {
var inputTextarea = document.querySelector("#task9AM");
var outputDiv = document.querySelector("#task9AM");
var saveButton = document.querySelector("#button9AM");

saveButton.addEventListener("click", updateOutput);

outputDiv.textContent = localStorage.getItem("content");
inputTextarea.value =localStorage.getItem("content");

function updateOutput () {
    localStorage.setItem("content", inputTextarea.value)

    outputDiv.textContent = inputTextarea.value;
}
}

function tenAM() {
    var inputTextarea = document.querySelector("#task10AM");
    var outputDiv2 = document.querySelector("#task10AM");
    var saveButton = document.querySelector("#button10AM");
    
    saveButton.addEventListener("click", updateOutput);
    
    outputDiv2.textContent = localStorage.getItem("content")
    inputTextarea.value =localStorage.getItem("content");
    
    function updateOutput () {
        localStorage.setItem("content", inputTextarea.value);
        outputDiv2.textContent = inputTextarea.value;
    }
    }

function elevenAM() {
    var inputTextarea = document.querySelector("#task11AM");
    var outputDiv3 = document.querySelector("#task11AM");
    var saveButton = document.querySelector("#button11AM");

    saveButton.addEventListener("click", updateOutput);
    
    outputDiv3.textContent = localStorage.getItem("content")
    inputTextarea.value =localStorage.getItem("content");

    function updateOutput () {
        localStorage.setItem("content", inputTextarea.value);
        outputDiv3.textContent = inputTextarea.value;
    }
    }

function twelvePM() {
    var inputTextarea = document.querySelector("#task12PM");
    var outputDiv4 = document.querySelector("#task12PM");
    var saveButton = document.querySelector("#button12PM");

    saveButton.addEventListener("click", updateOutput);
    
    outputDiv4.textContent = localStorage.getItem("content")
    inputTextarea.value =localStorage.getItem("content");
    
    function updateOutput () {
        localStorage.setItem("content", inputTextarea.value);
        outputDiv4.textContent = inputTextarea.value;
    }
    }

function onePM() {
    var inputTextarea = document.querySelector("#task1PM");
    var outputDiv5 = document.querySelector("#task1PM");
    var saveButton = document.querySelector("#button1PM");
    
    saveButton.addEventListener("click", updateOutput);
        
    outputDiv5.textContent = localStorage.getItem("content")
    inputTextarea.value =localStorage.getItem("content");
        
    function updateOutput () {
        localStorage.setItem("content", inputTextarea.value);
        outputDiv5.textContent = inputTextarea.value;
    }
    }

function twoPM() {
    var inputTextarea = document.querySelector("#task2PM");
    var outputDiv6 = document.querySelector("#task2PM");
    var saveButton = document.querySelector("#button2PM");
    
    saveButton.addEventListener("click", updateOutput);
    
    outputDiv6.textContent = localStorage.getItem("content")
    inputTextarea.value =localStorage.getItem("content");
    
    function updateOutput () {
        localStorage.setItem("content", inputTextarea.value);
        outputDiv6.textContent = inputTextarea.value;
    }
    }

function threePM() {
    var inputTextarea = document.querySelector("#task3PM");
    var outputDiv7 = document.querySelector("#task3PM");
    var saveButton = document.querySelector("#button3PM");
        
    saveButton.addEventListener("click", updateOutput);
        
    outputDiv7.textContent = localStorage.getItem("content")
    inputTextarea.value =localStorage.getItem("content");
        
    function updateOutput () {
    localStorage.setItem("content", inputTextarea.value);
    outputDiv7.textContent = inputTextarea.value;
    }
    }

function fourPM() {
    var inputTextarea = document.querySelector("#task4PM");
    var outputDiv8 = document.querySelector("#task4PM");
    var saveButton = document.querySelector("#button4PM");
                
    saveButton.addEventListener("click", updateOutput);
                
    outputDiv8.textContent = localStorage.getItem("content")
    inputTextarea.value =localStorage.getItem("content");
                
    function updateOutput () {
        localStorage.setItem("content", inputTextarea.value);
        outputDiv8.textContent = inputTextarea.value;
    }
    }

function fivePM() {
    var inputTextarea = document.querySelector("#task5PM");
    var outputDiv9 = document.querySelector("#task5PM");
    var saveButton = document.querySelector("#button5PM");
    
    saveButton.addEventListener("click", updateOutput);
    
    outputDiv9.textContent = localStorage.getItem("content")
    inputTextarea.value =localStorage.getItem("content");
    
    function updateOutput () {
        localStorage.setItem("content", inputTextarea.value);
        outputDiv9.textContent = inputTextarea.value;
    }
    }