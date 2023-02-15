let colorsArr = []

const getColorSchemeBtn = document.getElementById("get-color-scheme-btn")

function getColorSchemeHtml(){
    let html = ""
    for (color of colorsArr) {
        html += `<div class="color-line">
                    <div class="color-block" style="background:${color}"></div>
                    <p>${color}</p>
                </div>`
    }
    document.getElementById("color-scheme").innerHTML = html
    
}

function renderColorScheme() {
    const hex = document.getElementById("color-picker").value.slice(1)
    const inputMode = document.getElementById("color-mode").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${inputMode}&count=5`)
        .then (response => response.json())
        .then (data => {
            for (color of data.colors){
                colorsArr.push(color.hex.value)
                }
            getColorSchemeHtml()
            colorsArr = []
        })
}

getColorSchemeBtn.addEventListener("click", renderColorScheme)

renderColorScheme()



  


