function randomNumber() {
    return Math.random() * 10
}

function multiply(a, b) {
    b = b || 0
    return a * b
}

function multiplyDef(a = 0, b = 0) {
    return a * b
}

function multiplyDefVar(a = 0, b = a) {
    return a * b
}

function multiplyDefFunc(a = 0, b = randomNumber()) {
    return a * b
}

console.log(multiply(5))
console.log(multiplyDef(5))
console.log(multiplyDefVar(5))
console.log(multiplyDefFunc(5))
