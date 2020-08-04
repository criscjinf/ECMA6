//Possibilita a construção de iterators permitindo utilizar for of
const obj2 = {
    values: [5, 6, 7, 8],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
}

 for (let value of obj2) {
     console.log(value)
 }


function* hello () {
    console.log('Hello')
    yield 'hello'
    console.log('from')
    const value = yield 'from'
    console.log('function ' + value)
    return 'function'
}

const it = hello()
console.log(it.next())
console.log(it.next())
console.log(it.next('Outside'))

function* naturalNumber() {
    let number = 0
    while (true) {
        yield number
        number++
    }
}
const itn = naturalNumber()

console.log(itn.next())
console.log(itn.next())