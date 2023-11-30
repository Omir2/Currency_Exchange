let dollar = document.getElementById('dollar');
let tl = document.getElementById('tl');


// لما اضغط على الكيبورد
// onkeyup

dollar.onkeyup = function(){
    tl.value = dollar.value * 28,86 ;
}

tl.onkeyup = function(){
    dollar.value = tl.value / 28,86 ;
}










