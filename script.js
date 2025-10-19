
function UpdateClock(){
    // current time
    const now = new Date();
    const currentClockData = {

        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        
        
        month: now.toLocaleString('en-US', {month: 'long'}),
        weekDay: now.toLocaleDateString('en-US', {weekday: 'long'}),

        day: now.getDate(),
        year: now.getFullYear(),
    }
     displayTime(currentClockData);
    
}

function displayTime(data){
    const timeElement = document.getElementById("time")
    const DateElement = document.getElementById("date")
    // const WeekElement = document.getElementById("weekDay")

    const formattedHour = data.hours.toString().padStart(2, '0');
    const formattedMinute = data.minutes.toString().padStart(2, '0');
    const formattedSecond = data.seconds.toString().padStart(2, '0');

    const timeString = `${formattedHour} : ${formattedMinute} : ${formattedSecond}`
    const dateString = `${data.day} : ${data.weekDay} : ${data.month} : ${data.year}`
    // const weekString = `${data.weekDay}`
    
    timeElement.textContent = timeString;
    DateElement.textContent = dateString;
    // WeekElement.textContent = weekString;
}

UpdateClock()
setInterval(UpdateClock, 1000);

const themeSwitcher = document.getElementById("themeSwitcher");
const body = document.body

    themeSwitcher.addEventListener('click', function() {
        // Code to be executed when the button is clicked
       body.classList.toggle('lightTheme')
    //    themeSwitcher.textContent = ();

    if(body.classList.contains('lightTheme')){
        localStorage.setItem("theme","light")
        themeSwitcher.textContent = '🌙';
    }else{
        localStorage.setItem("theme","dark")
        themeSwitcher.textContent = '☀️';
    }
    });
const savedTheme = localStorage.getItem('theme');
if(savedTheme == "light"){
    body.classList.add('lightTheme');
}