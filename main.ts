input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.toggle(X, X + -1)
            basic.pause(50)
        }
    }
})
basic.forever(function () {
	
})
