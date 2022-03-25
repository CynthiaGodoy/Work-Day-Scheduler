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
        $("#task13PM").addClass("past"); 
    } else if (now <= 13 && now < 14) {
        $("#task13PM").addclass("present"); 
    } else if (now < 13) {
        $("#task13PM").addClass("future");
    }

    if (now > 14) { //2PM
        $("#task14PM").addClass("past"); 
    } else if (now <= 14 && now < 15) {
        $("#task14PM").addclass("present"); 
    } else if (now < 14) {
        $("#task14PM").addClass("future");
    }

    if (now > 15) { //3PM
        $("#task15PM").addClass("past"); 
    } else if (now <= 15 && now < 16) {
        $("#task15PM").addclass("present"); 
    } else if (now < 15) {
        $("#task15PM").addClass("future");
    }

    if (now > 16) { //4PM
        $("#task16PM").addClass("past"); 
    } else if (now <= 16 && now < 17) {
        $("#task16PM").addclass("present"); 
    } else if (now < 16) {
        $("#task16PM").addClass("future");
    }

    if (now > 17) { //5PM
        $("#task17PM").addClass("past"); 
    } else if (now <= 17 && now < 18) {
        $("#task17PM").addclass("present"); 
    } else if (now < 17) {
        $("#task17PM").addClass("future");
    }

}