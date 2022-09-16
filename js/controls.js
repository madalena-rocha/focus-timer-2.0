export default function Controls({
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
}) {
    function soundForest() {
        buttonSoundForest.classList.contains('active') 
        ? buttonSoundForest.classList.remove('active')
        : buttonSoundForest.classList.add('active')
    }

    function soundRain() {
        buttonSoundRain.classList.contains('active') 
        ? buttonSoundRain.classList.remove('active')
        : buttonSoundRain.classList.add('active')
    }

    function soundCoffeeShop() {
        buttonSoundCoffeeShop.classList.contains('active') 
        ? buttonSoundCoffeeShop.classList.remove('active')
        : buttonSoundCoffeeShop.classList.add('active')
    }

    function soundFireplace() {
        buttonSoundFireplace.classList.contains('active') 
        ? buttonSoundFireplace.classList.remove('active')
        : buttonSoundFireplace.classList.add('active')
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