function ascending() {
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var z = parseFloat(document.getElementById("num3").value);
    
    var numbers = [x,y,z];
    numbers.sort(function(a, b) {
        return a-b;
    });

    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Sorted numbers: ' + numbers.join(', ');
}