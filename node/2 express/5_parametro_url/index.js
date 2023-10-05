const express = require('express')
const path = require('path')

const app =  express()

const caminho = path.join(__dirname, 'templates')

app.get('/usuarios', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

/* 4.56 */