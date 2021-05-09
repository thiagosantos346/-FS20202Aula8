var bt0 = document.querySelector('.bt0');
var bt1 = document.querySelector('.bt1');
var bt2 = document.querySelector('.bt2');
var bt3 = document.querySelector('.bt3');
var bt4 = document.querySelector('.bt4');
var bt5 = document.querySelector('.bt5');
var bt6 = document.querySelector('.bt6');
var bt7 = document.querySelector('.bt7');
var bt8 = document.querySelector('.bt8');
var bt9 = document.querySelector('.bt9');

var btAdd = document.querySelector('.btAdd');
var btSub = document.querySelector('.btSub');
var btMul = document.querySelector('.btMul');
var btDiv = document.querySelector('.btDiv');

var btReset = document.querySelector('.btReset');
var btPonto = document.querySelector('.btPonto');
var btResut = document.querySelector('.btResut');

var num1 = 0;
var num2 = 0;
var op = null;
var resultado = null;
var concluido = false;
var decimal = false;
var display = document.querySelector('.display');

function EnableResult(){
    btResut.disabled = false;
    btResut.style.backgroundColor = "green";
}

function DisableleResult(){
    btResut.disabled = true;
    btResut.style.backgroundColor = "red";
}

var operations = {
    "add"  : "+",
    "sub"  : "-",
    "plus" : "*",
    "div"  : "/",
    "cls"  : "C",
    "dot"  : ".",
    "eql"  : "."
}

btAdd.addEventListener('click', function(){
    decimal = false;
    addDisplay(operations.add);
});

btSub.addEventListener('click', function(){
    decimal = false;
    addDisplay(operations.sub);
});

btMul.addEventListener('click', function(){
    decimal = false;
    addDisplay(operations.plus);
});

btDiv.addEventListener('click', function(){
    decimal = false;
    addDisplay(operations.div);
});

btPonto.addEventListener('click', function(){
    decimal = false;
    addDisplay(orientations.dot);
});

btResut.addEventListener('click', function(){
    decimal = false;
});

bt1.addEventListener('click', function(){
    addDisplay(1);
});

bt2.addEventListener('click', function(){
    addDisplay(2);
});

bt3.addEventListener('click', function(){
    addDisplay(3);
});

bt4.addEventListener('click', function(){
    addDisplay(4);
});

bt5.addEventListener('click', function(){
    addDisplay(5);
});

bt6.addEventListener('click', function(){
    addDisplay(6);
});

bt7.addEventListener('click', function(){
    addDisplay(7);
});

bt8.addEventListener('click', function(){
    addDisplay(8);
});

bt9.addEventListener('click', function(){
    addDisplay(9);
});

bt0.addEventListener('click', function(){
    addDisplay(0);
});

btResut.addEventListener('click', function(){
    concluido = true;
    setDisplay(eval(display.textContent));
})

function addDisplay(n){
    console.log(display.textContent.length);
    
    if(display.textContent.length < 12){
        display.textContent += n; 
    }

    try {
        eval(display.textContent);
        EnableResult();
    } catch (e) {
        if(e instanceof SyntaxError){
            DisableleResult();            
        }
        
    }

}

function setDisplay(str){
    display.textContent = str;
    if(display.textContent <= 12){
        display.textContent = display.textContent.trim();
    }else{
        display.textContent = display.textContent.substr(0, 11);
    }
}

function cls(){
    display.textContent = "";
}

btReset.addEventListener('click', reset);


function reset(){
    resultado = null;
    cls()
    EnableResult();
    decimal = false;
}
