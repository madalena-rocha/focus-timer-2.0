export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudioForest = new Audio("https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/forest.wav?raw=true")
    const bgAudioRain = new Audio("https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/rain.wav?raw=true")
    const bgAudioCoffeeShop = new Audio("https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/coffee-shop.wav?raw=true")
    const bgAudioFireplace = new Audio("https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/fireplace.wav?raw=true")

    bgAudioForest.loop = true
    bgAudioRain.loop = true
    bgAudioCoffeeShop.loop = true
    bgAudioFireplace.loop = true
    
    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()

        bgAudioForest.pause()
        bgAudioRain.pause()
        bgAudioCoffeeShop.pause()
        bgAudioFireplace.pause()
    }

    function audioForest() {
        bgAudioForest.play()
        bgAudioRain.pause()
        bgAudioCoffeeShop.pause()
        bgAudioFireplace.pause()
    }

    function audioRain() {
        bgAudioRain.play()
        bgAudioForest.pause()
        bgAudioCoffeeShop.pause()
        bgAudioFireplace.pause()
    }

    function audioCoffeeShop() {
        bgAudioCoffeeShop.play()
        bgAudioForest.pause()
        bgAudioRain.pause()
        bgAudioFireplace.pause()
    }

    function audioFireplace() {
        bgAudioFireplace.play()
        bgAudioForest.pause()
        bgAudioRain.pause()
        bgAudioCoffeeShop.pause()
    }

    return {
        pressButton,
        timeEnd,
        audioForest,
        audioRain,
        audioCoffeeShop,
        audioFireplace
    }
}
