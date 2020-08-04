const uniqueID = Symbol('Hello')
const uniqueID2 = Symbol('Hello')

const obj = {
    [uniqueID]: 'teste de symbol prop'
}

//Possibilita a construção de iterators permitindo utilizar for of
const obj2 = {
    values: [5, 6, 7, 8],
    [Symbol.iterator]() {
        let i = -1
        return {
            next: () => {
                i++
                return {
                    value: this.values[i],
                    done: i > this.values.length
                }
            }
        }
    }
}

const itobj = obj2[Symbol.iterator]()

console.log(itobj.next())
console.log(itobj.next())

for (let value of obj2) {
    console.log(value)
}



const arr = [1, 2, 3, 4]
const it = arr[Symbol.iterator]()

console.log(uniqueID == uniqueID2)// mesmo que o identificador seja igual, o valor é diferente
console.log(Object.keys(obj)) // mesmo procurando as keys do objeto ele não aparece por ser um symbol
console.log(Object.getOwnPropertySymbols(obj))
console.log(it.next())
console.log(it.next())