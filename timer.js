const timer = () => {
    var start = document.getElementById("start");
    var next = document.getElementById("next");
    var alarmName = "pomTime";

    start.addEventListener('click',() => {
        console.log("pressed");
        createAlarm(alarmName);
    });

    next.addEventListener('click', () => {
        // clearAlarm();
        console.log(loggetAlarm());
    });


    function createAlarm(alarmName) {
        chrome.alarms.create(alarmName, {
            delayInMinutes: 0.1
        });
    }

    function clearAlarm() {
        chrome.alarms.clear(alarmName);
    }

    function getAlarm(){
        chrome.alarms.getAll(function(alarms) {
            // console.log(alarms[0]['scheduledTime']);
            return alarms[0];
        });
    }

    function getRemainingSeconds(scheduledTime) {
        var date = new Date();
        console.log(scheduledTime - date);
    }


}

timer();