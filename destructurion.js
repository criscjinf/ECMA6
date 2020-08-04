function destruindoArray() {
    var arr = ['apple', 'banana', 'orange', ['tomato']]
    var apple1 = arr[0]
    var banana1 = arr[1]
    var orange1 = arr[2]
    var tomato1 = arr[3][0]
    var [apple2, banana2, orange2, [tomato2]] = arr //destruindo o array

    console.log(apple1, apple2)
    console.log(tomato1, tomato2)
}

function destruindoObjetos() {
    let obj = {
        name: 'Cristiano',
        data: {dados: 'Dados vindos da api'},
        arr: ['red', 'blue', 'yellow']
    }
    let arrObj = [{nameobj: 'array object property'}]

    let name1 = obj.name
    let { name } = obj //busca e cria variavel com mesmo nome
    let { name: name2 } = obj //busca variavel com o nome e atribui a variavel com nome diferente
    let { data } = obj //extraindo subobjeto (nested object - objeto aninhado)
    let {data: { dados }} = obj // desconstruindo sub objetos
    let { arr: arr1 } = obj //extraindo array
    let { arr: [ color1 ] } = obj //desconstruir subarray
    let [{ nameobj }] = arrObj //desconstruindo array e primeiro objeto
    console.log(name1, name, name2, data, dados, arr1, color1, nameobj)
}

function funDesctructionArrayArgs([a, b] = [0, 0]) {
    console.log(a + b)
}

destruindoArray()
destruindoObjetos()
funDesctructionArrayArgs([1, 2])

