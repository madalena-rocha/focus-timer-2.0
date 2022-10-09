import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
} from "./elements.js"

export default function({controls, timer, sound}) {
    buttonPlay.addEventListener('click', function() {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click', function() {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', function() {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonPlus.addEventListener('click', function() {
        controls.reset()
        timer.plus()
        sound.pressButton()
    })

    buttonMinus.addEventListener('click', function() {
        controls.reset()
        timer.minus()
        sound.pressButton()
    })

    buttonSoundForest.addEventListener('click', function() {
        controls.soundForest()
        sound.pressButton()
        sound.audioForest()
    })

    buttonSoundRain.addEventListener('click', function() {
        controls.soundRain()
        sound.pressButton()
        sound.audioRain()
    })

    buttonSoundCoffeeShop.addEventListener('click', function() {
        controls.soundCoffeeShop()
        sound.pressButton()
        sound.audioCoffeeShop()
    })

    buttonSoundFireplace.addEventListener('click', function() {
        controls.soundFireplace()
        sound.pressButton()
        sound.audioFireplace()
    })
}