function calculateAverage() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var num3 = parseFloat(document.getElementById('num3').value);
  
  var average = (num1 + num2 + num3) / 3;
  
  document.getElementById('averageResult').innerText = average.toFixed(2);
}