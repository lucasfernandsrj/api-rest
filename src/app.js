import express from 'express'

const app = express()

//indicar para o express ler body com json!
app.use(express.json()) 

//mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:2, selecao: 'Suíça', grupo: 'G'},
    {id:3, selecao: 'Camarões', grupo: 'G'},
    {id:4, selecao: 'Sérvia', grupo: 'G'}
]

//retorna o objeto por id
function buscarSelecaoPorId(id){
    return selecoes.filter( selecao => selecao.id == id )
}

//pegar a posicao ou index do elemento no array por id
function buscarIndexSelecao(id){
    return selecoes.findIndex( selecao => selecao.id == id )
}

//criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Hello World! 2025')
})

app.get('/selecoes/:id', (req, res) => {
    res.status(200).json(buscarSelecaoPorId(req.params.id))
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.status(200).send(`Seleção com id ${req.params.id} excluída com sucesso!`)
})

export default app