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
        stopTimer();
    });




    function startTimer() {
        interval = setInterval(() =>{
            checkAlarm();
        }, 1000)
    }

    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }

    function createAlarm(alarmName) {
        chrome.alarms.create(alarmName, {
            delayInMinutes: 0.5166667
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
        if((scheduledTime - date) < 1000){
            stopTimer();
        }
        var remainingTime = insertDec(scheduledTime - date);
        console.log(remainingTime);
        // console.log(time - date);
    }

    function insertDec(num) {
        return (num/1000);
    }
}

timer();