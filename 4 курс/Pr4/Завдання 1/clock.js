function formatTimeUnit(value) {
   
    return value < 10 ? '0' + value : value;
}

function updateClock() {
    const now = new Date(); 
    const hours = formatTimeUnit(now.getHours()); 
    const minutes = formatTimeUnit(now.getMinutes()); 
    const seconds = formatTimeUnit(now.getSeconds()); 
    
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();
