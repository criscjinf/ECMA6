var sum = (a, b) => a + b
var person = ()  => ({nome: 'Objeto implicito'})

console.log(sum(1, 2))
console.log(person)

var obj = {
    showContext: function showContext() {
        this.log('teste')
        setTimeout(function () {
            console.log(this)
        }.bind(this), 1000); //faz bind do contexto this

        setTimeout(() => console.log(this), 1000); //Simplificando o bind com arrow functions
    },

    log(value) {
        console.log(value)
    }
}

obj.showContext()