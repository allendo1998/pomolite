const timer = () => {
    var start = document.getElementById("start");
    var next = document.getElementById("next");
    var alarmName = "pomTime";
    var interval = null;

    start.addEventListener('click',() => {
        createAlarm(alarmName);
        startTimer();
    });

    next.addEventListener('click', () => {
        clearAlarm();
    });




    function startTimer() {
        interval = setInterval(() =>{
            checkAlarm();
        }, 1000)
    }

    function createAlarm(alarmName) {
        chrome.alarms.create(alarmName, {
            delayInMinutes: 0.5
        });
    }

    function clearAlarm() {
        chrome.alarms.clear(alarmName);
    }

    function checkAlarm(){
        chrome.alarms.getAll(function(alarms) {
            if(alarms[0] != null) {
                getRemainingSeconds(alarms[0]['scheduledTime']);
            } else {
                console.log("no alarms set");
            }
        });
    }

    function getRemainingSeconds(scheduledTime) {
        var date = new Date();
        console.log(scheduledTime - date);
    }
}

timer();