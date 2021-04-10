 var hour900 = 9;
 var hour1000 = 10;
 var hour1100 = 11;
 var hour1200 = 12;
 var hour1300 = 13;
 var hour1400 = 14;
 var hour1500 = 15;
 var hour1600 = 16;
 var hour1700 = 17;
 
 var currentHour = moment().format('H');

//Calculate the number of hours from now and a  given hour (in 24 hours format) of the day
// If result is <0 means the given time is in the future
// If result is >0 means the given time is in the past

function hoursFromNow(time) {
    //Create an instance of moment for the current time
    var now=moment();
    //Create an instance of moment for the given time
    var todayTime=moment(now.format("MM/DD/YYYY")+" "+time+":00");
    //Return the difference in hours between the two moments
    return now.diff(todayTime,"hours");
  }

  /* 
  GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar // moment JS current date 
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours // rows for each hour
WHEN I view the timeblocks for that day // timeBlockRow Class
THEN each timeblock is color coded to indicate whether it is in the past, present, or future // what??
WHEN I click into a timeblock
THEN I can enter an event // form? 
WHEN I click the save button for that timeblock //click event listener
THEN the text for that event is saved in local storage // save info/local storage????
WHEN I refresh the page // refresh page to make sure info is saved
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)
  */

 var displayTime = document.querySelector("#currentDay");

 var currentTime = moment();
 
 displayTime.textContent = currentTime.format("dddd, MMMM Do")
 
 $(".save-btn").on("click", function() {
     var value = $(this).siblings(".time-block-text").val();
     var time = $(this).parent().attr("id");
     localStorage.setItem(time, value);
 });

$("#row-900 .time-block-text").val(localStorage.getItem("row-900" /* localStorage KEY also the row id */));

$("#row-1000 .time-block-text").val(localStorage.getItem("row-1000" /* localStorage KEY also the row id */));

$("#row-1100 .time-block-text").val(localStorage.getItem("row-1100" /* localStorage KEY also the row id */));

$("#row-1200 .time-block-text").val(localStorage.getItem("row-1200" /* localStorage KEY also the row id */));

$("#row-1300 .time-block-text").val(localStorage.getItem("row-1300" /* localStorage KEY also the row id */));

$("#row-1400 .time-block-text").val(localStorage.getItem("row-1400" /* localStorage KEY also the row id */));

$("#row-1500 .time-block-text").val(localStorage.getItem("row-1500" /* localStorage KEY also the row id */));

$("#row-1600.time-block-text").val(localStorage.getItem("row-1600"/* localStorage KEY also the row id */));

$("#row-1700 .time-block-text").val(localStorage.getItem("row-1700" /* localStorage KEY also the row id */));
