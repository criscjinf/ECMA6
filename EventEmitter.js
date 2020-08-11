//EventEmitter exclusivo do Node JS
const EventEmitter = require('events')
const emitter = new EventEmitter()

//Permite extender a classe de eventemitter para dar funcionalidades de event listner a sua classe
class Users extends EventEmitter {
    userLoged(data) {
        this.emit('User Logged', data)
    }
}

emitter.on('User Logged', data => {
    console.log(data)
})

emitter.emit('User Logged', {user: 'Cristiano Lemos'})

const user = new Users()
// Método once consome apenas uma vez
user.once('User Logged', data => {
    console.log(data)
})

user.userLoged({user: 'Josiane'})
user.userLoged({user: 'Lívia'})