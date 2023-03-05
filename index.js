const toggle = document.getElementById("toggle");
toggle.addEventListener("click",(e) => {
    chrome.tabs.query({
        active : true,
        currentWindow: true
    }, function(activeTabs){
        const activeTab = activeTabs[0]
        chrome.scripting.executeScript({
            target: {tabId: activeTab.id, allFrames : true},
            files: ["script.js"]
        })
    })
})