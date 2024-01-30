var on_off = document.getElementById('on-off');
var display = document.getElementById('display');
display.value = "";
var nums = /\d/g;
var turnOn = true;
var ans = 0;
var memoryRecall = "";

on_off.addEventListener("click", function a() {
  if (turnOn) {
	fadeText("HELLO...");
    var keys = document.getElementsByClassName('on-off');
    for (var i = 0; i < keys.length; i += 1) {
      keys[i].setAttribute('onclick', "keysOn(value)");
    }
  } else {
	fadeText("GOODBYE...");
    var keys = document.getElementsByClassName('on-off');
    for (var j = 0; j < keys.length; j += 1) {
      keys[j].removeAttribute('onclick', "keysOn(value)");
    }
    //window.setTimeout(location.reload(true), 5000);
  }
  turnOn = !turnOn;
})

function keysOn(value) {
    if (value === 'CLR') {
        display.value = "";
        memoryRecall = "";
    } else if (value === 'equals') {
        // display.value = eval(display.value.replace(/[^\d]$/g, ''));
		if (display.value.includes("%")) {
			// 25%, 100*25%,
			var pct;
			if(!display.value.includes("*")) {
				pct = display.value.substring(display.value.indexOf("%")-2, display.value.length-1);
				pct.replace(/\D/g, "");
				pct = pct / 100;
				display.value = calculateDisplay(pct);
			} else {
				pct = display.value.substring(display.value.indexOf("*")+1, display.value.indexOf("%"));
				pct = pct / 100;
				var pctValue = `${display.value.slice(0, display.value.indexOf("*")+1)}${pct}`;
				//console.log(display.value);
				//console.log(pctValue);
				display.value = calculateDisplay(pctValue);
			}
			
			memoryRecall = display.value;	
		}
		if(display.value.includes("\u221A")) {
			display.value = Math.sqrt(display.value.replace(/\D/g, ""));
		} else {
			display.value = calculateDisplay(display.value);
		}
		memoryRecall = display.value;
    } else if (value === 'MR') {
        if (memoryRecall !== "") {
            display.value = memoryRecall;
		}
    } else if (value === 'M+') {
        if (memoryRecall !== "") {
			display.value = `${memoryRecall}+`;
			if(value.match(/^(\d*\.)?\d+/g)) {
				display.value += value;
			}
			
			if(value === "equals") {
				display.value = calculateDisplay(display.value);
			}
            memoryRecall = display.value;
        }
    } else if (value === 'M-') {
		if (memoryRecall !== "") {
			display.value = `${memoryRecall}-`;
			if(value.match(/^(\d*\.)?\d+/g)) {
				display.value += value;
			}
			
			if(value === "equals") {
				display.value = calculateDisplay(display.value);
			}
            memoryRecall = display.value;
        }
    //} else if (value === 'sqrt') {
    //    if (display.value.length > 1 && display.value.match(/\d+/g)){
    //        //display.value = Math.sqrt(display.value);
	//		display.value = calculateDisplay(display.value);
    //    }
    } else if (value === 'sign') {
        if (display.value.substring(0, 1) === '-') {
            display.value = display.value.substring(1, display.value.length);
            
        } else {
            display.value = '-' + display.value;
            
        }
    } else if (value.match(nums) || value.match(/[\+\-*\/%]/g)) {
            if (display.value !== "" && display.value.length < 20) {
                if(display.value === 0) {
                    display.value = value;
                } else {
                    display.value += value;
                }
            } else {
                display.value = value;
            } 
    }
}

function fadeText(str) {
	display.value = str;
	setTimeout(() => {display.value = ""}, 1000);
}

function calculateDisplay(str) {
	return Function(`'use strict'; return (${str})`)();
}