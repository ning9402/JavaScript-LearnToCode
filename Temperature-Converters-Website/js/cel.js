"use strict";

window.onload = function () {

    const celBtn = document.getElementById("celBtn");
    celBtn.onclick = celBtnClicked;
}


function celBtnClicked () {
    
    const celNumberField = document.getElementById("celNum");
    let celNum = Number(celNumberField.value);

    let answer = (celNum * (9/5)) + 32;

    const answerField = document.getElementById("answer");
    answerField.value = answer.toFixed(2);
}