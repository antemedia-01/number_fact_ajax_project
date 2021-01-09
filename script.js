let number = document.getElementById('number');
let content = document.getElementById('content');
number.addEventListener('input', display);

function display() {
    let value = number.value;
    console.log(value);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(value);
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            content.textContent = this.responseText;
            // displayResults(this);
        }
    };
    xhttp.open('GET', 'http://numbersapi.com/' + value);
    xhttp.send();
}

