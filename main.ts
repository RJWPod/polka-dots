input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 8; y++) {
            led.toggle(x, x - 1)
            basic.pause(50)
        }
    }
})
basic.forever(function () {
	
})
