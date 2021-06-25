function calculate() {
var area = Number(document.getElementById("text_input1").value) * Number(document.getElementById("text_input1").value);
var perimeter = Number(document.getElementById("text_input1").value) * Number(4);
document.getElementById("lblArea").innerHTML = area;
document.getElementById("lblPerimeter").innerHTML = perimeter;
document.getElementById("text_input1").value = null;
}
