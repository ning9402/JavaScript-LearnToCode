"use strict";

window.onload = function () {
    //add button
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;

    //sub button
    const subBtn = document.getElementById("subBtn");
    subBtn.onclick = subBtnClicked;

    //mult button
    const multBtn = document.getElementById("multBtn");
    multBtn.onclick = multBtnClicked;

    //divide button
    const divBtn = document.getElementById("divBtn");
    divBtn.onclick = divBtnclicked;
}

function addBtnClicked () {

    const numOneField = document.getElementById("numOne");
    let numOne= Number(numOneField.value);

    const numTwoField = document.getElementById("numTwo");
    let numTwo = Number(numTwoField.value);

    let answer = numOne + numTwo;

    const answerField = document.getElementById("Answer")
    answerField.innerHTML = answer;
}

function subBtnClicked () {

    const numOneField = document.getElementById("numOne");
    let numOne= Number(numOneField.value);

    const numTwoField = document.getElementById("numTwo");
    let numTwo = Number(numTwoField.value);

    let answer = numOne - numTwo;
    
    const answerField = document.getElementById("Answer")
    answerField.innerHTML = answer;
}

function multBtnClicked () {

    const numOneField = document.getElementById("numOne");
    let numOne= Number(numOneField.value);

    const numTwoField = document.getElementById("numTwo");
    let numTwo = Number(numTwoField.value);

    let answer = numOne * numTwo;

    const answerField = document.getElementById("Answer")
    answerField.innerHTML = answer;
}

function divBtnclicked () {

    const numOneField = document.getElementById("numOne");
    let numOne= Number(numOneField.value);

    const numTwoField = document.getElementById("numTwo");
    let numTwo = Number(numTwoField.value);

    let answer = numOne / numTwo;

    const answerField = document.getElementById("Answer")
    answerField.innerHTML = answer;
}