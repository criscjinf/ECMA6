var prop1 = 'Teste de atribuição de prop'
var propName = 'Test'

function method1() {
    console.log('method called')
}

var obj = {
    //shorthand para methods e props em objetos
    prop1,
    method1,
    sum(a = 0, b = 0) {
        return a + b
    },
    [propName + 'concat']: 'prop value'
}

console.log(obj)
console.log(obj.sum(4, 2))
obj.method1()