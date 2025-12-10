let minutes = 0, seconds = 0, milliseconds = 0;
let timer = null;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(run, 10); // update every 10ms
    }
}

function run() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    displayTimer();
}

function displayTimer() {
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerText = `${m}:${s}:${ms}`;
}

document.getElementById("start").onclick = startTimer;

document.getElementById("pause").onclick = function () {
    clearInterval(timer);
    isRunning = false;
};

document.getElementById("reset").onclick = function () {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
};
