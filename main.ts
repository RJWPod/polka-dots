input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, X + 3)
        basic.pause(50)
        led.plot(X, X + 1)
        basic.pause(50)
        led.plot(X, X + -1)
        basic.pause(50)
        led.plot(X, X + -3)
    }
})
basic.forever(function () {
	
})
