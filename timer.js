const timer = () => {
    var start = document.getElementById("start");
    var next = document.getElementById("next");
    var alarmName = "pomTime";

    start.addEventListener('click',() => {
        console.log("pressed");
        createAlarm();
    });

    next.addEventListener('click', () => {
        // clearAlarm();
        getAlarm();
    });


    function createAlarm() {
        chrome.alarms.create(alarmName, {
            delayInMinutes: 0.1
        });
    }

    function clearAlarm() {
        chrome.alarms.clear(alarmName);
    }

    function getAlarm(){
        chrome.alarms.getAll(function(alarms) {
            console.log(alarms[0]);
        });
    }


}

timer();