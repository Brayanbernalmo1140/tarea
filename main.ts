input.onButtonPressed(Button.A, function () {
    basic.showString("#")
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # . . . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("#")
})
basic.forever(function () {
	
})
