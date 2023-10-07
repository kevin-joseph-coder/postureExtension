function createAlarm() {
    chrome.alarms.create("fix_posture", {
        periodInMinutes: 1,
    }, () => {
        console.log("Alarm created: fix_posture");
    });
}

chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === "fix_posture") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "alarm.jpg",
            title: "Posture Check",
            message: "Make sure you are in a good posture.",
            silent: false
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    if (request.time) {
        createAlarm();
    }

    sendResponse({ success: true });
});
