function calc(value) {
    document.getElementById('res').value += value
}

function ans() {
    let a = document.getElementById('res').value
    let b = eval(a)
    document.getElementById('res').value = b
}

function cls() {
    document.getElementById('res').value = ''
}