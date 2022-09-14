import {
    buttonPlay,
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
        timer.countdown()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', function() {
        timer.reset()
        sound.pressButton()
    })

    buttonPlus.addEventListener('click', function() {
        timer.plus()
        sound.pressButton()
    })

    buttonMinus.addEventListener('click', function() {
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