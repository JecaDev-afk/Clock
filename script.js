let is24HourFormat = true;

const formatChanger = document.getElementById("formatChanger");
const themeSwitcher = document.getElementById("themeSwitcher");
const body = document.body



function UpdateClock(){
    const now = new Date();
    let hour = now.getHours();
    let period = null;
    (hour < 12 ) ? period = "AM" : period = "PM";
    if (!is24HourFormat){
        hour = hour % 12
        if (hour === 0){
            hour = 12
        }
        
    }
    
    
    const currentClockData = {
        
        hours: hour,
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        period: period,
        is24H: is24HourFormat,
        
        
        month: now.toLocaleString('en-US', {month: 'long'}),
        weekDay: now.toLocaleDateString('en-US', {weekday: 'long'}),
        
        day: now.getDate(),
        year: now.getFullYear(),
    }
    displayTime(currentClockData);
    
}

const savedFormat = localStorage.getItem('format')
if(savedFormat === '24'){
    is24HourFormat = true;
    formatChanger.textContent = '24H';
}else{
    is24HourFormat = false;
    formatChanger.textContent = '12H';
}
function displayTime(data){
    const timeElement = document.getElementById("time")
    const DateElement = document.getElementById("date")
    // const WeekElement = document.getElementById("weekDay")
    const PeriodElement = document.getElementById("period")
    
    const formattedHour = data.hours.toString().padStart(2, '0');
    const formattedMinute = data.minutes.toString().padStart(2, '0');
    const formattedSecond = data.seconds.toString().padStart(2, '0');
    
    const timeString = `${formattedHour} : ${formattedMinute} : ${formattedSecond}`
    const dateString = `${data.day} : ${data.weekDay} : ${data.month} : ${data.year}`
    // const weekString = `${data.weekDay}`
    const periodString = `${data.period}`
    if (data.is24H){
        PeriodElement.textContent = "";
    }else{
        PeriodElement.textContent = periodString;
    }
    timeElement.textContent = timeString;
    DateElement.textContent = dateString;
    // WeekElement.textContent = weekString;
}


UpdateClock()
setInterval(UpdateClock, 1000);
//buttons

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

formatChanger.addEventListener('click', function(){
    is24HourFormat = !is24HourFormat

    const formatValue = is24HourFormat ? '24' : '12';
    localStorage.setItem('format', formatValue);
    
    formatChanger.textContent = is24HourFormat ? '24H' : '12H';
});
UpdateClock()

//buttons