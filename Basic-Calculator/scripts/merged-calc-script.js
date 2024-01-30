var on_off = document.getElementById('on-off');
var display = document.getElementById('display');
var nums = /\d/g;
var turnOn = true;
var ans = '0';
var memoryRecall = '';

on_off.addEventListener("click", function a() {
  if (turnOn) {
    display.value = 'Hello...';
    var keys = document.getElementsByClassName('on-off');
    for (var i = 0; i < keys.length; i += 1) {
      keys[i].setAttribute('onclick', "keysOn(value)");
    }
    console.log(keys);
  } else {
    display.value = 'Goodbye...';
    var keys = document.getElementsByClassName('on-off');
    for (var j = 0; j < keys.length; j += 1) {
      keys[j].removeAttribute('onclick', "keysOn(value)");
    }
    window.setTimeout(location.reload(true), 10000);
  }
  turnOn = !turnOn;
})

function keysOn(value) {
    if (value === 'CLR') {
        display.value = '0';
        memoryRecall = '';
        ans = '0';
        console.log(ans);
    } else if (value === 'equals') {
        // memoryRecall = display.value[display.value.length - 1];
        display.value = eval(display.value.replace(/[^\d]$/g, ''));
        console.log(display.value);
        ans = display.value;
        memoryRecall = display.value;
        console.log('Memory: ' + memoryRecall);
    } else if (value === 'MR') {
        if (memoryRecall === '') {
            display.value = '0';
        } else if (memoryRecall.match(/[0-9\/\*\+\-.]{3,}/g)) {
            display.value = eval(memoryRecall);
            ans = display.value;
        } else {
            display.value = memoryRecall;
            ans = display.value;
        }
    } else if (value === 'M+') {
        if ('M+') {
            memoryRecall += '+' + display.value;
            ans = memoryRecall;
            console.log('Memory plus: ' + memoryRecall);
        }
    } else if (value === 'M-') {
        if ('M-') {
            memoryRecall += '-' + display.value;
            ans = memoryRecall;
            console.log('Memory minus: ' + memoryRecall);
        }
    } else if (value === '%') {
        if ('%') {
            display.value = display.value / 100;
            ans = '';
        }
    } else if (value === 'sqrt') {
        if ('sqrt') {
            display.value = Math.sqrt(display.value);
            ans = '';
        }
    } else if (value === 'sign') {
        if (display.value.substring(0, 1) === '-') {
            display.value = display.value.substring(1, display.value.length);
            ans = '';
        } else {
            display.value = '-' + display.value;
            ans = '';
        }
    } else {
        if (ans !== '' && display.value !== '') {
            if (value.match(nums)) {
                display.value = value;
                ans = '';
            } else {
                display.value = '0';
            }
        } else if (display.value.length < 20) {
            display.value += value;
        } else {
            display.value = display.value;
        }
    }
}