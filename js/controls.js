export default function Controls({
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
}) {
    function soundForest() {
        buttonSoundForest.classList.add('active')
        buttonSoundRain.classList.remove('active')
        buttonSoundCoffeeShop.classList.remove('active')
        buttonSoundFireplace.classList.remove('active')
    }

    function soundRain() {
        buttonSoundRain.classList.add('active')
        buttonSoundForest.classList.remove('active')
        buttonSoundCoffeeShop.classList.remove('active')
        buttonSoundFireplace.classList.remove('active')
    }

    function soundCoffeeShop() {
        buttonSoundCoffeeShop.classList.add('active')
        buttonSoundForest.classList.remove('active')
        buttonSoundRain.classList.remove('active')
        buttonSoundFireplace.classList.remove('active')
    }

    function soundFireplace() {
        buttonSoundFireplace.classList.add('active')
        buttonSoundForest.classList.remove('active')
        buttonSoundRain.classList.remove('active')
        buttonSoundCoffeeShop.classList.remove('active')
    }

    function reset() {
        buttonSoundForest.classList.remove('active')
        buttonSoundRain.classList.remove('active')
        buttonSoundCoffeeShop.classList.remove('active')
        buttonSoundFireplace.classList.remove('active')
    }

    return {
        soundForest,
        soundRain,
        soundCoffeeShop,
        soundFireplace,
        reset
    }
}