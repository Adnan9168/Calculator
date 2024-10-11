
// let clearOnNextInput = false;

// function disVal(val){
//     if(clearOnNextInput)
//         clrData();
//         clearOnNextInput = false;
    
//     document.getElementById("res").innerHTML += val;  
//     }


// function clrData()
// {
//     document.getElementById("res").innerHTML = "";

// }

// function solve()
// {
//     let x = document.getElementById("res").innerHTML;
//     let y = math.evaluate(x);
//     document.getElementById("res").innerHTML = y;
//     clearOnNextInput = true;
// }

// function myFunction(event) { 
// 			if (event.key == '0' || event.key == '1' 
// 				|| event.key == '2' || event.key == '3' 
// 				|| event.key == '4' || event.key == '5' 
// 				|| event.key == '6' || event.key == '7' 
// 				|| event.key == '8' || event.key == '9' 
// 				|| event.key == '+' || event.key == '-' 
// 				|| event.key == '*' || event.key == '/') 
// 				document.getElementById("res").value += event.key; 
// 		} 

let nxtinput = false;

document.addEventListener('keydown', keyPress);
   

function disVal(val) {
    if (nxtinput)
        clrData();
    nxtinput = false;
    document.getElementById("res").innerHTML += val;

}

function keyPress(ev) {
    if (/[\d+\-*/.=]/.test(ev.key)) {
        disVal(ev.key);
    } else if (ev.key === "Enter") {
        solve();
    } else if (ev.key === "Backspace") {
        backspace();
    }
}

function clrData() {
    document.getElementById("res").innerHTML = "";
}

function backspace() {
    let res = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = res.slice(0, -1);
}

function solve() {
    try {
        let result = eval(document.getElementById("res").innerHTML);
        document.getElementById("res").innerHTML = result;
        
    } catch (e) {
        document.getElementById("res").innerHTML = "Error";
        
    }
    nxtinput = true;
}



