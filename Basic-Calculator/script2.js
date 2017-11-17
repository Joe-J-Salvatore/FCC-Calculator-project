var buttons = document.querySelectorAll("button");
var display = document.getElementById("display");
var form = document.getElementsByName('calculator');
var key = '';
var begRegex = /^[\+*\/0.]/g;
var endRegex = /[\+*\/\-\(.]$/g;
var ans = '';
var memoryRecall = '';
var on = false;
var reset = false;
// DONE eval() to get answers
// DONE store answers in memory
// DONE add/subtract to and/or from memory
// DONE recall current memory
// DONE clear the display
// DONE disallow concatenating digits after equals has been clicked and answer displayed
// DONE convert digit to percent, square root, change sign, power on
// check for and clean display string for operators at beginning or end of string
// ^[\+*\/0.] ... [\+*\/\-\(.]$
buttons[4].addEventListener("click", keysOn);

function keysOn() {
    display.value = 'Hello...';
    ans = display.value;
    on = true;
for (var i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", function(event) {
            if (this.value === 'CLR') {
                display.value = '';
            } else if (this.value === 'equals') {
                memoryRecall = display.value[display.value.length - 1];
                display.value = eval(display.value);
                ans = display.value;
                console.log('Memory: ' + memoryRecall);
            } else if (this.value === 'MR') {
                if (memoryRecall === '') {
                    display.value = '0';
                } else {
                    display.value = eval(memoryRecall);
                    ans = display.value;;
                }
            } else if (this.value === 'M+' || this.value === 'M-') {
                if ('M+') {
                    memoryRecall += '+' + display.value;
                    console.log('Memory plus: ' + memoryRecall);
                } else {
                    memoryRecall -= '-' + display.value;
                    console.log('Memory minus: ' + memoryRecall);
                }
            } else if (this.value === '%') {
                if ('%') {
                    display.value = display.value / 100;
                    ans = display.value;
                }
            } else if (this.value === 'sqrt') {
                if ('sqrt') {
                    display.value = Math.sqrt(display.value);
                    ans = display.value;
                }
            } else if (this.value === 'sign') {
                if (display.value.substring(0, 1) === '-') {
                    display.value = display.value.substring(1, display.value.length);
                } else {
                    display.value = '-' + display.value;
                }
            } else {
                if (ans !== '' && display.value !== '') {
                    display.value = this.value;
                    ans = '';
                } else {
                    display.value += this.value;
                }
            }
    }, true);
}
}