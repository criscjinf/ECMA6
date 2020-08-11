//pode ser utilizados outros meios de processar como BLOB
fetch('./data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            responseStream.json()
        } else {
            throw new Error('Request Error')
        }
    })
    .then(data => {
        console.log(data)
    .catch(erro => {
        console.log(erro)
    })
    
})