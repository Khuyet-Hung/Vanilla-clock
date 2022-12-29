const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const minute = $$('.minute')[0];
const second = $$('.second')[0];
const millisecond = $$('.millisecond')[0];
const startBtn = $('#btnStart');
const stopBtn = $('#btnStop');
const resetBtn = $('#btnReset');

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var myClock;

startBtn.onclick = function () {
    clearInterval(myClock);
    myClock = setInterval(function () {
        if (milliseconds === 100) {
            seconds += 1;
            milliseconds = 0;
            if (seconds === 60) {
                minutes += 1;
                seconds = 0;
            }
        } else {
            milliseconds += 1;
        }
        millisecond.innerText = milliseconds >= 10 ? String(milliseconds) : '0' + String(milliseconds);
        second.innerText = seconds >= 10 ? String(seconds) : '0' + String(seconds);
        minute.innerText = minutes >= 10 ? String(minutes) : '0' + String(minutes);
    }, 10);


    stopBtn.onclick = function () {
        clearInterval(myClock);
    }
    resetBtn.onclick = function () {
        clearInterval(myClock);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        millisecond.innerText = milliseconds >= 10 ? String(milliseconds) : '0' + String(milliseconds);
        second.innerText = seconds >= 10 ? String(seconds) : '0' + String(seconds);
        minute.innerText = minutes >= 10 ? String(minutes) : '0' + String(minutes);
    }
}
