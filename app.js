// selection

var hour = document.querySelector('.hour-value');
var minute = document.querySelector('.minute-value');
var second = document.querySelector('.second-value');

// clock
function clock(){
    let date = new Date();
    let hour_value = date.getHours();
    let minute_value=date.getMinutes();
    let second_value=date.getSeconds();


    hour.innerHTML= hour_value;
    minute.innerHTML= minute_value;
    second.innerHTML=second_value;
}

setInterval(clock,1000)