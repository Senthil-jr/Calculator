
const display = document.getElementById("display");


function appendToDisplay(input){
display.value += input;
}

function clear(){
   display.value = "";
}

function calculate(){
 try {
    display.value = eval(display.value);
}
catch (error) {
    display.value = "Error";
}
}


// const display = document.getElementById("display");


// function appendToDisplay(input){
// display.value += input;
// }

// function clear(){ 
//    display.value = "";
// }

// function calculate(){
//  try {
//     display.value = eval(display.value);
// }
// catch (error) {
//     display.value = "Error";
// }
// }




// document.addEventListener('DOMContentLoaded', () => {
//     const display = document.getElementById('display');

//     function appendToDisplay(input) {
//         display.value += value;
//     }

//     function clear() {
//         display.value = "";
//     }

//     function calculate() {
//         try {
//             display.value = eval(display.value);
//         } catch (error) {
//             display.value = 'Error';
//         }
//     }

//     function handleKeyPress(event) {
//         const key = event.key;
//         if ((key >= '0' && key <= '9') || key === '.') {
//             appendToDisplay(key);
//         } else if (key === '+' || key === '-' || key === '*' || key === '/') {
//             appendToDisplay(key);
//         } else if (key === 'Enter') {
//             calculate();
//         } else if (key === 'Backspace') {
//             display.value = display.value.slice(0, -1);
//         } else if (key === 'Escape') {
//             clear();
//         }
//     }





//     document.addEventListener('keydown', handleKeyPress);

//     window.appendToDisplay = appendToDisplay;
//     window.clear = clear;
//     window.calculate = calculate;
// });

// function appendToDisplay(value) {
//     const display = document.getElementById("display");
//     if (value === "BS") {
//       display.value = display.value.slice(0, -1);
//     } else {
//       display.value += value;
//     }
//   }
  
//   function clear() {
//     const display = document.getElementById("display");
//     display.value = "";
//   }
  
//   function calculate() {
//     const display = document.getElementById("display");
//     try {
//       display.value = eval(display.value);
//     } catch (error) {
//       display.value = "Error";
//     }
//   }
