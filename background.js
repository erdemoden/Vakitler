function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Ayı iki basamaklı yapar
    const day = String(today.getDate()).padStart(2, '0'); // Günü iki basamaklı yapar
    return `${year}-${month}-${day}`;
}
function getTimeString(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}


let day = "";
let i = 2;
self.addEventListener("activate",async()=>{
    day = getTodayDateString();
    const url = "https://namaz-vakti.vercel.app/api/timesFromCoordinates?lat=41.024616&lng=29.012341&date=${date}&days=3&timezoneOffset=180&calculationMethod=Turkey"
    let response = await fetch(url);
    data = await response.json();
});
setInterval(function() {
    const date = getTimeString(new Date());
    chrome.tabs.query({active:true,currentWindow:true}, (tabs) => {
        let activeTab = tabs[0];
        if(data.times[day][i] == date){
        chrome.tabs.sendMessage(activeTab.id, {"message": "stop_with_five_seconds"});
       i++;
    }});
    if(i == 5){
        i = 2;
    }
    },10000);
