input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 4; X++) {
        led.toggle(X, X + -1)
        basic.pause(50)
        led.toggle(X, X + 1)
        basic.pause(50)
        led.toggle(X, X + -3)
        basic.pause(50)
        led.toggle(X, X + 3)
    }
})
basic.forever(function () {
	
})
