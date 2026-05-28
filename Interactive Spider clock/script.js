const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const clock = document.querySelector('.clock');

for (let index = 0; index < 12; index += 1) {
    const marker = document.createElement('span');
    marker.className = 'marker';

    if (index % 3 === 0) {
        marker.classList.add('major');
    }

    marker.style.transform = `translate(-50%, -50%) rotate(${index * 30}deg) translateY(-125px)`;
    clock.appendChild(marker);
}

function updateClock(now = new Date()) {
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + milliseconds / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
}

function tick() {
    updateClock();
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);