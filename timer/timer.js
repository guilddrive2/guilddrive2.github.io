

/* need event handler for go button that reads the seconds and sets timer for that number of seconds, then calls function to change background-color */
/* eslint-disable */


function pageLoad() { document.getElementById("go").onclick = goClick; }

function goClick() {
    //const seconds = +document.getElementById("sec").value;
    setTimeout(countDown, 1000);
    //setInterval(countDown, 1000);
}

function alarm() {
    const bodyElement = document.getElementById("body");
    bodyElement.className = "awesome";
}

/**
 * make the textbox count down the seconds
 * get the current value and reduce it to 0
 * if value is 0 cancel the timer
 */
function countDown() {
    secondsTextbox = document.getElementById("sec")
    const seconds = +secondsTextbox.value;
    if (seconds > 0) {
        secondsTextbox.value = seconds - 1;
        setTimeout(countDown, 1000);
    } else {
        alarm();
    }
}

window.onload = pageLoad;