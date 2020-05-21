var v, result;

function show(val) {
  document.getElementById("inp1").value += val;
}

function calculate() {
  v = document.getElementById("inp1").value;
  result = eval(v);
  document.getElementById("result").value = result;
}

function clearAll() {
  document.getElementById("inp1").value = "";
  document.getElementById("result").value = "";
}
