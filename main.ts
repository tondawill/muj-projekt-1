let test3 = 1
let test2 = 1
let test = 0
basic.showLeds(`
    . # . # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showString("" + (test))
    cuteBot.motors(test2, test3)
    test3 += 1
    test2 += 1
    test += 1
    basic.pause(500)
})
