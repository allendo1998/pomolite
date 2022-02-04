const timer = () => {
    var start = document.getElementById("start");
    var alarmName = "pomTime";

    start.addEventListener('click',() => {
        console.log("pressed");
        createAlarm();
    });


    function createAlarm() {
        chrome.alarms.create(alarmName, {
            delayInMinutes: 0.1
        });
    }

    function clearAlarm() {
        chrome.alarms.clear(alarmName);
    }
}

timer();