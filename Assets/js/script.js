// I need to collection of buss hours 9-5

var bizHours  = [];
var isEditing = false;

// populating the array

function setupScheduler(){
    for (let index = 0, MAX_HOURS = 9; index < 9; index++) {
        bizHours[index] = index + MAX_HOURS; 
        $('#scheduler').append(`
            <tr class="row" onclick="scheduleAnEvent(event,'id-for-${bizHours[index]}');">
                <td class="hour"> ${bizHours[index]}</td>
                <td class='event ${applyColor(bizHours[index])}'> 
                    <span id='id-for-${bizHours[index]}'>EVENT</span>
                </td>
                <td class="action"><button onclick="saveEvent('id-for-${bizHours[index]}')">Save</button></td>
            </tr>`);
    }
}
// Apply colors to scheduler
// We need to pass an hour to this function
// a based on the time ( hour ) pass, we will apply the
// correct color.
function applyColor(toEventColumnForHour){
    const currentTime = 15;
    if ( currentTime < toEventColumnForHour) {
        return 'past';
    } else if (currentTime > toEventColumnForHour){
        return 'future';
    }
    return  'present';
}


// Create event for user
function scheduleAnEvent(event, timePicked){
    if ( isEditing === false) {
        isEditing = true;
        $(`#${timePicked}`).append('<input type="text" class="inputEvent"/>');
    }
}

// Save a new event
function saveEvent(timePicked) {
    const newEvent = $('input').val();
    saveDataOnLocalStorage({ time: 15, event: newEvent});
    $('tr input').remove();
    $(`#${timePicked}`).text(newEvent);
    isEditing = false;
}

function main(){
    setupScheduler();

}

function saveDataOnLocalStorage(data) {
    localStorage.setItem(data.time, data.event);
}

main();
 
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
