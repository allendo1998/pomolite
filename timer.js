const timer = () => {
    var start = document.getElementById("start");
    var alarmName = "pomTime";
    start.addEventListener('click',() => {
        console.log("pressed");
        chrome.alarms.create(alarmName, {
            delayInMinutes: 0.1
        });
    });
}

timer();