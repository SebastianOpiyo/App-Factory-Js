 
num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
sumNum = document.getElementById("numSum")

val1 = num1.addEventListener("input", addNums);
val2 = num2.addEventListener("input", addNums);

function addNums() {
    var one = val1.value
    var two = val2.value
    sumNum.innerHTML = one + two
}
       