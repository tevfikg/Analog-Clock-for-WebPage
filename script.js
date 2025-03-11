/* CLOCK */
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function updateClock() {
    const now = moment();
    const seconds = now.seconds() + now.milliseconds() / 1000;
    const minutes = (now.minutes() + seconds / 60) / 60;
    const hours = (now.hours() % 12 + minutes) / 12;

    setRotation(secondHand, seconds / 60);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);
}

function setRotation(element, rotationFraction) {
    element.style.setProperty('--rotate', `${rotationFraction * 360}deg`);
}

// Update clock every 100 milliseconds for smooth movement
setInterval(updateClock, 100);

// Initialize clock immediately
updateClock();

