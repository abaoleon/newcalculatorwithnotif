function add1(p1,p2){
     return Number (p1) + Number (p2);  
}

function add(){
    let age=prompt("how old are you?");
        alert(age);
    
    let num1=document.getElementById('add1').value;
    let num2=document.getElementById('add2').value;
    let result= add1(num1,num2);
    document.getElementById('ans1').value=result;
}
function subs(p1,p2){
    return Number (p1)-Number (p2);
}

function subtract(){
    let isboss=confirm("are you there?");
    if(isboss==true){
        alert("welcome boss");
    }
    else {
        alert("get lost brother!");
    }
    let num1=document.getElementById('sub1').value;
    let num2=document.getElementById('sub2').value;
    let result= subs(num1,num2);
    document.getElementById('ans2').value=result;
}
function multiply(p1,p2){
    return Number(p1)* Number(p2);
}
function multiplyNumbers(){
   let num1=document.getElementById('mul1').value;
   let num2=document.getElementById('mul2').value;

if(num1==false){
        alert("num1 is empty");
    }
        else if(num2==false){
        alert("num2 is empty");
    }
   else{
        let result= multiply (num1,num2);
        document.getElementById('ans3').value=result;
}
}
     function divide(p1,p2){
    return Number(p1)/Number(p2);
}
function divideNumbers(){
    let num1=document.getElementById('div1').value;
    let num2=document.getElementById('div2').value;
    let result= divide (num1,num2);
    document.getElementById('ans4').value=result;
}
