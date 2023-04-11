const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input-el')
const lengthText = document.getElementById('length-text')
const volumeText = document.getElementById('volume-text')
const massText = document.getElementById('mass-text')


lengthText.textContent = "0 meters = 0 feet | 0 feet = 0 meters"
volumeText.textContent = "0 liters = 0 gallons | 0 gallons = 0 liters"
massText.textContent = "0 kilos = 0 pounds | 0 pounds = 0 kilos"


convertBtn.addEventListener('click', function () {
    const feet = inputEl.value * 3.2808
    const meters = inputEl.value * 0.3048
    const gallons = inputEl.value * 0.2642
    const liters = inputEl.value * 3.7854
    const pounds = inputEl.value * 2.2046
    const kilos = inputEl.value * 0.4536

    lengthText.textContent = `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meters.toFixed(3)} meters`
    
    volumeText.textContent = `${inputEl.value} liters = ${gallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${liters.toFixed(3)} liters`
    
    massText.textContent = `${inputEl.value} kilos = ${pounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilos.toFixed(3)} kilos`
})
