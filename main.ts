input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, x + 3)
        basic.pause(50)
        led.plot(x, x + 1)
        basic.pause(50)
        led.plot(x, x + -1)
        basic.pause(50)
        led.plot(x, x + -3)
        basic.pause(50)
    }
})
basic.forever(function () {
	
})
