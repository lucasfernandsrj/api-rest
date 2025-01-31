import express from 'express'

const app = express()

//indicar para o express ler body com json
app.use(express.json())

//mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:2, selecao: 'Suiça', grupo: 'G'},
    {id:3, selecao: 'Servia', grupo: 'G'},
    {id:4, selecao: 'Camaroes', grupo: 'G'}
]

//criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Hello World! 2025')
})

//app.get('/selecoes', (request, response) => {})
app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

//req.head
//req.body
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

export default app