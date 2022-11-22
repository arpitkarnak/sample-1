var inpuT1 =document.querySelector('#input1');
var inpuT2 =document.querySelector('#input2');

var buttonN1 =document.querySelector('#button1');
var buttonN2 =document.querySelector('#button2');
var buttonN3 =document.querySelector('#button3');
var buttonN4 =document.querySelector('#button4');

var output1 = document.querySelector('#output')



function first(){
    var value1 = Number(inpuT1.value);
    var value2 = Number(inpuT2.value);

    var sum =value1+value2;
    output1.innerText = "hey , the sum is "+sum
    
    

}
function second(){s
    var value1 = Number(inpuT1.value);
    var value2 = Number(inpuT2.value);

    var sub =value1-value2
    output1.innerText = "hey , the subtract is "+sub
    

}
function third(){
    var value1 = Number(inpuT1.value);
    var value2 = Number(inpuT2.value);

    var sum =value1*value2
    output1.innerText = "hey , the multiply is "+sum

}
function fourth(){
    var value1 = Number(inpuT1.value);
    var value2 = Number(inpuT2.value);

    var sum =value1/value2
    output1.innerText = "hey , the division is "+sum

}


buttonN1.addEventListener('click',first)
buttonN2.addEventListener('click',second)
buttonN3.addEventListener('click',third)
buttonN4.addEventListener('click',fourth)
    
