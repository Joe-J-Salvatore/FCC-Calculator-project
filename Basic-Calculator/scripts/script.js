function powerOn(value) {
    var keyValue = document.getElementById("display");
    keyValue.value += '0';
}

function input(value) {
    var keyValue = document.getElementById("display");
    if (value === 'CLR') {
        keyValue.value = "";
    } else if (keyValue.value.length >= 33) {
        return;
    } else {
        keyValue.value += value;
    }
}

function percent(value) {
    var keyValue = document.getElementById("display");
    keyValue.value = keyValue.value / 100;
}

function sqRt(value) {
    var keyValue = document.getElementById("display");
    keyValue.value = Math.sqrt(keyValue.value);
}

function changeSign() {
    var keyValue = document.getElementById("display");
    if (keyValue.value.substring(0, 1) === '-') {
        keyValue.value = keyValue.value.substring(1, keyValue.value.length);
    } else {
        keyValue.value = '-' + keyValue.value;
    }  
}

var storeResult = '';
function memory(memKey) {
    var display = document.getElementById("display");
    if (memKey === 'M+') {
      // add to memory value
      storeResult +=  '+' + display.value;
      display.value = eval(storeResult);
    }
    else if (memKey === 'M-') {
      // subtract from memory value
      storeResult += '-' + display.value;
      display.value = eval(storeResult);
    }
    else {
      // recall memory value
      display.value = storeResult;
    }
}

function result() {
    var display = document.getElementById("display");
    // sanitize value here
    display.value = eval(display.value);
    storeResult += display.value;
    console.log('storeResult: ' + storeResult);
}