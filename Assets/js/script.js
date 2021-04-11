// I need to collection of buss hours 9-5

var bussHours  = [];
var isEditing = false;
const timeFormat = "DD:MMMM:YYYY";
var currentTime = moment().format(timeFormat);
var schedulerData = [];  // data to be saved in localstorage


// populating the scheduler table
function setupScheduler(){
    let rows = '';
    for (let index = 0, MAX_HOURS = 9; index < 9; index++) {
        bussHours[index] = index + MAX_HOURS;
        rows += `
            <tr class="row">
                <td class="hour"> ${bussHours[index]}:00</td>
                <td class='event ${applyColor(index + MAX_HOURS)}' onclick="scheduleAnEvent(event,'id-for-${bussHours[index]}')"> 
                    <span id='id-for-${bussHours[index]}'></span>
                </td>
                <td class="action"><button onclick="saveEvent('id-for-${bussHours[index]}')">Save</button></td>
            </tr>`;
    }
    $('#scheduler').append(rows);
}
// Apply colors to scheduler
// We need to pass an hour to this function
// a based on the time ( hour ) pass, we will apply the
// correct color.
function applyColor(toEventColumnForHour){
    if (toEventColumnForHour <= moment().hour() ) {
        return 'past';
    } else if (moment().hour() >= toEventColumnForHour){
        return 'future';
    }
    return  'present';
}


// Create event for user
function scheduleAnEvent(event, timePicked){
    event.preventDefault();
    event.stopPropagation();
    if ( $(`#${timePicked} input`).length === 0) {
        $(`#${timePicked}`).append('<input type="text" class="inputEvent"/>').focus();
    }
}

// Save a new event
function saveEvent(timePicked) {
    const newEvent = $('input').val();
    saveDataOnLocalStorage({ time: timePicked, event: newEvent});
    $('tr input').remove();
    $(`#${timePicked}`).text(newEvent);currentTime
    isEditing = false;
}

//Display current time.
function displayCurrentTime(time){
    $('#currentDay').text(time);
}

// Main function
function main(){
    displayCurrentTime(currentTime);
    setupScheduler();
}


//Save data to local storage
function saveDataOnLocalStorage(data) {
    const item = schedulerData.find( (item) => item.time == data.time );
    if (item) {
        item.event = data.event;
    } else {
        schedulerData.push ({data})
    }
    localStorage.setItem('scheduler', schedulerData);
}


main();