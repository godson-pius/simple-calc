
const display  = document.getElementById('display')

document.querySelectorAll('button').forEach((e) => {
    e.onclick = () => {
        if (display.innerHTML == 0) {
            display.innerHTML = ""
            display.append(e.innerHTML)
        } else {
            display.append(e.innerHTML)
        }
    }
})

// Clear display
document.getElementById('clr').onclick = () => display.innerHTML = 0

// Get calculations
document.getElementById('equal').onclick = () => {
    const result = eval(display.innerHTML)
    display.innerHTML = result
}