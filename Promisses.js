const doSomethingPromisse = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('First data')
        }, 1500);
})

const doOtherThingPromisse = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second data')
        }, 1000);
})

// doSomethingPromisse()
//     .then(data => {
//         console.log(data)
//         return doOtherThingPromisse()
//     })
//     .then(data2 => console.log(data2))
//     .catch(error => console.log('Ops', error))


Promise.all([doSomethingPromisse(), doOtherThingPromisse()]).then(
    data => {
        console.log(data[0])
        console.log(data[1])
    })
    .catch(error => console.log(error))
// A que resolver primeiro é retornada
Promise.race([doSomethingPromisse(), doOtherThingPromisse()]).then(
        data => console.log(data))
        .catch(error => console.log(error))