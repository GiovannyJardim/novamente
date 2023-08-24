const fs = require('fs')

fs.readFile('arquivo.txt', 'hex', (erro, dados) => {
    if(erro) {
        console.log(erro)
    }

    console.log(dados)

})