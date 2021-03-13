

/* need event handler for go button that reads the seconds and sets timer for that number of seconds, then calls function to change background-color */
/* eslint-disable */


function pageLoad() { document.getElementById("go").onclick = goClick; } 

function goClick() { 
    const seconds = +document.getElementById("sec").value;
    setTimeout(alarm, seconds * 1000);
} 

function alarm(){
    const bodyElement = document.getElementById("body");
    bodyElement.className = "awesome";
}

window.onload = pageLoad;