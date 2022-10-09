import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})