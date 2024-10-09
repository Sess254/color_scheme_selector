const btnEl = document.getElementById('btn-el')
const colorEl = document.getElementById('color-el')
const colorSelection = document.getElementById('color-selector')
const colorModeSelection = document.getElementById('mode-selector')

let selectedMode = ""
let selectedColor = ""

colorSelection.addEventListener('change', (e) => {
    const colorValue = colorSelection.value
    selectedColor = colorValue.replace("#", "")

})

colorModeSelection.addEventListener('change', (e) => {
    selectedMode = colorModeSelection.value
    console.log(selectedMode)
})


function getColorScheme(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}`)
    .then(res => res.json())
    .then(data => {
        colorEl.innerHTML = ""

        for (let color of data.colors){
            console.log(color)
            colorEl.innerHTML += `
                    <div class="colors" id="color-el">
                        <img src="${color.image.bare}">
                        <p>${color.hex.value}</p>
                        <p>${color.name.value}</p>
                    </div> 
                `
        }

    }) 

}

btnEl.addEventListener('click', getColorScheme)