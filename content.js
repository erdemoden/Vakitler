console.log("merhaba");
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "clicked_browser_action") {
            let video = document.getElementsByClassName("video-stream html5-main-video")[0];
            video.pause();
        }
        else if (request.message === "stop_with_five_seconds") {
            console.log("ifdeyim");
            let video = document.getElementsByClassName("video-stream html5-main-video")[0];
            video.pause();
        }
    }
);
