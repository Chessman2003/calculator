const arrayPlus = () => {
let result;
let arr1 = Number(document.getElementById("num1").value);
let arr2 = Number(document.getElementById("num2").value);

let i = 0;
while (i < arr1.length &  i < arr2.length) {
result = [arr1[i] + arr2[i]];
i += 1;	
}
document.getElementById("result").innerHTML = result;
}