// pin generator...............
function pinGenerate() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    document.getElementById('verify-success').style.display = 'none';
    document.getElementById('verify-wrong').style.display = 'none';
    document.getElementById('number-input').value = '';
    if (pinString.length == 4) {
        document.getElementById('pin-form').value = pin;
    }
    else {
        return pinGenerate();
    }
};

document.getElementById('number-btn').addEventListener('click', function (evetn) {
    let number = evetn.target.innerText;
    const numberString = number +'';
    const inputValue = document.getElementById('number-input').value;
    if (isNaN(number)) {
        if (number == 'C') {
            document.getElementById('number-input').value = '';
        }
    }
    else {
    document.getElementById('number-input').value = inputValue + numberString;
    }
})

document.getElementById('submit').addEventListener('click', function () {
    const generatePin =parseInt(document.getElementById('pin-form').value);
    const inputPin = parseInt(document.getElementById('number-input').value);
    if (generatePin == inputPin) {
        document.getElementById('verify-wrong').style.display = 'none';
        document.getElementById('verify-success').style.display = 'block';
    } else {
        document.getElementById('verify-success').style.display = 'none';
        document.getElementById('verify-wrong').style.display = 'block';
    }
})