// pin generator...............
function pinGenerate() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        console.log(pin);
        document.getElementById('pin-form').value = pin;
    }
    else {
        return pinGenerate();
    }
}