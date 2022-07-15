input.onGesture(Gesture.TiltLeft, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Fabulous)
        basic.showIcon(IconNames.Silly)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Asleep)
    }
})
