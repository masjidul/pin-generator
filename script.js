let displayPin = document.getElementById('display-pin'); 
displayPin.readOnly = true;

let inputDisplay = document.getElementById('input-display');
inputDisplay.readOnly = true;

let submitBtn = document.getElementById("submit-btn");
submitBtn.style.backgroundColor = "#b92f2f";

  
document.getElementById("generate-btn").addEventListener('click', function(){
        let pinDigits = ("" + Math.random()).substring(2, 6);
        displayPin.value = pinDigits;
})

function clickNumber(number){
    let clickPad = document.getElementById('dialpad-' + number);
    if (number == 'del'){
        let dlt = inputDisplay.value.slice(0, -1);
        inputDisplay.value = dlt;
    }
    else if (number == 'clear'){
        inputDisplay.value = "";
    }
    else {
        let num = clickPad.innerText;
        inputDisplay.value += num; 
    }
}

submitBtn.addEventListener('click', function(){
    if(inputDisplay.value == ""){
       alertWarning('nul', 'match', 'mismatch',  true);
       attempt();
    }
    else if(inputDisplay.value == displayPin.value){
        alertWarning('match', 'mismatch', 'nul', true);
        inputDisplay.value = "";
        displayPin.value = "";
        setTimeout(function(){
            window.location.href = "html.htm";
        }, 1000);
    
    }
    else {
        alertWarning('mismatch', 'match', 'nul', true);
        inputDisplay.value = "";
        attempt();
    }
})

function alertWarning(first, sec, third, displayOutput){
    if(displayOutput = true){
        document.getElementById('pin-' + first).style.display = "block";
    }
    document.getElementById('pin-' + sec).style.display = "none";
    document.getElementById('pin-' + third).style.display = "none";
}

function attempt(){
    let attemptNum = parseInt(document.getElementById('attempt-left').innerHTML);
    let attemptLft = attemptNum - 1;
    if(attemptLft > 0){
       document.getElementById('attempt-left').innerHTML = attemptLft;
    }
    else{
        submitBtn.disabled = 'true';
        document.getElementById('submit-btn').style.backgroundColor = 'black';
    }
}