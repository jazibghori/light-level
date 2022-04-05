let box = 0
basic.forever(function () {
    box = input.lightLevel()
    pins.digitalWritePin(DigitalPin.P0, box)
    basic.showNumber(box)
})
