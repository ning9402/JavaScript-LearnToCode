"use strict";

window.onload = function() {
    const btn = document.getElementById("theButton");
    btn.onclick = theButtonClicked;
}
function theButtonClicked() {
     const dateSelectionField = document.getElementById("dateSelection");
     let dateStr = dateSelectionField.value;
     const resultsPara = document.getElementById("results");
     resultsPara.innerHTML = dateStr;
}