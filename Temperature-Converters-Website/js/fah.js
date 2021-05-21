"use strict";

window.onload = function () {
    //convert F to C
    const fahBtn = document.getElementById("fahBtn");
    fahBtn.onclick = fahBtnClicked;

}

function fahBtnClicked () {
    
    const fahNumberField = document.getElementById("fahNum");
    let fahNum = Number(fahNumberField.value);

    let answer = (fahNum - 32) * (5/9);

    const answerField = document.getElementById("answer");
    answerField.value = answer.toFixed(2);
}

