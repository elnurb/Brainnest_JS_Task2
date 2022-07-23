let display = document.getElementById("input_text");

//function for displaying values
function operate(number){
  display.value += number;
 }

//function for evaluation
function calculate(){
  try{
      display.value = eval(display.value);
    }
  catch{
    display.value = "Error!"
  }
}

// display for percent of numbers
function percent(){
  display.value = (display.value/100).toString()
}
// dispey for sign of numbers
function sign(){
  display.value =  (display.value * -1).toString();
}

//function for clearing the display
function clears(){
  display.value = "";
}

//function for delete the display of numbers
function backspace(){
  display.value = display.value.slice(0, -1);
}