function celToFar(celsius) {
    let cTemp = celsius;
    let cToF = cTemp * 9 / 5 + 32;
    let message = cTemp + '\xB0C is ' + cToF + ' \xB0F.';
        console.log(message);
}

function farToCel(fahrenheit) {
    let fTemp = fahrenheit;
    let fToC = (fTemp - 32) * 5 / 9;
    let message = fTemp + '\xB0F is  ' + fToC + '\xB0C.';
        console.log(message);
}

celToFar(60);
farToCel(45);