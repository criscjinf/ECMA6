const asyncTimer = () => {
    new Promisse((resolve, reject) => {
        setTimeout(() => {
            resolve(123456)
        }, 1000)
    })
}

const simpleFunction = async () => {
    const data = await Promisse.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ])
    return data
}

simpleFunction()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })