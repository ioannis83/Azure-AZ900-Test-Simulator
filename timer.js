let time = 100 * 60; // 1 hour 40 minutes in seconds

function startTimer() {
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
        if (time < 0) {
            clearInterval(interval);
            showResult(); // Show result when time is up
        }
    }, 1000);
}

// Initialize the timer display
const initialMinutes = Math.floor(time / 60);
const initialSeconds = time % 60;
document.getElementById('timer').textContent = `${initialMinutes}:${initialSeconds < 10 ? '0' : ''}${initialSeconds}`;

startTimer();
