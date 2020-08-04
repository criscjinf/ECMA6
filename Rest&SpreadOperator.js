// rest operator ...
function sum () {
    var value = 0
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i]
    }
    return value
}

var sumRest = (...args) => {
    return args.reduce((agg, value) => agg + value, 0) //ZERO VALOR INICIAL DO REDUCE
}

var testRest = (a, b, ...rest) => {
    console.log(a, b, rest) // os argumentos passados a mais vão para o rest
}

const multiply = (...args) => args.reduce((agg, value) => agg * value, 1)

const testSpread = (...rest) => {
    return multiply(...rest) //SpreadOperator => quebra o array em variáveis e repassa para a função 
}

const spreadArrayTest = (...args) => {
    console.log('Rest Operator')
    console.log(args)
    console.log('Spred Operator')
    console.log(...args)
}

function concatArraySpread() {
    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]
    console.log('Concat array')
    console.log([...arr1, ...arr2])
    console.log([1, 5, 4, ...arr2])
}

function objLiteralSpread() {
    const obj = {
        test: 'prop obj1',
        test2:'prop obj1 não sobrescrita',
        subObjeto: { test: 123 }
    }
    const obj2 = { 
        ...obj, 
        test: 'sobrescrevi prop test',
        unica: 'prop objeto2'
    }
    obj2.subObjeto.test = 859

    const objMerge = {
        ...obj,
        ...obj2,
        subObj: { ...obj.subObjeto }
    } //necessário fazer spread dos subobjetos para não acabar alterando os dados do objeto origem
    objMerge.subObj.test = 456
    console.log('Cópia rasa (shallow clone) de objeto literal. não cópia objetos aninhados')
    console.log(obj2)
    console.log(objMerge)
}

console.log(sum(1,2,3,4,5))
console.log(sumRest(1,2,3,4,5))

testRest(1,2,3,4,5)
console.log(multiply(2,4))

console.log(testSpread(2,4,5))

spreadArrayTest(1, 2, 3, 4)

concatArraySpread()
objLiteralSpread()