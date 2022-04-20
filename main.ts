input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index + 3)
        basic.pause(50)
        led.plot(index, index + 1)
        basic.pause(50)
        led.plot(index, index + -1)
        basic.pause(50)
        led.plot(index, index + -3)
    }
})
basic.forever(function () {
	
})
