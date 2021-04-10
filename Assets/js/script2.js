// I need to collection of buss hours 9-5

var bussHours  = [];
var isEditing = false;

// populating the array

function setupScheduler(){
    for (let index = 0, MAX_HOURS = 9; index < 9; index++) {
        bussHours[index] = index + MAX_HOURS; 
        $('#scheduler').append(`
            <tr class="row" onclick="scheduleAnEvent(event,'id-for-${bussHours[index]}');">
                <td class="hour"> ${bussHours[index]}</td>
                <td class='event ${applyColor(bussHours[index])}'> 
                    <span id='id-for-${bussHours[index]}'>EVENT</span>
                </td>
                <td class="action"><button onclick="saveEvent('id-for-${bussHours[index]}')">Save</button></td>
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