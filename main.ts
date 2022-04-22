input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(x - y, x + 1)
            led.toggle(x, x)
        }
    }
})
basic.forever(function () {
	
})
