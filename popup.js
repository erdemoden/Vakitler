    let video = document.getElementsByClassName("video-stream html5-main-video")[0];
    let url2 = "https://namaz-vakti.vercel.app/api/timesFromCoordinates?lat=41.024616&lng=29.012341&date=2023-10-15&days=3&timezoneOffset=180&calculationMethod=Turkey"
    let url = " http://api.aladhan.com/v1/calendar/2023/10?latitude=41.022642&longitude=29.010916&method=2";
    let buton = document.getElementById("deneme");
    buton.addEventListener("click",async()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                let activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
            });        
      console.log('foo');
    });