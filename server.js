const express = require('express')
const app = express()

const door = 3333

const path = require('path')
const basePath =  path.join(__dirname, 'templates')

//montar um objeto json
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


// Rota para mostrar o formulário
app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

// Rota para cadastrar as info. do formulário
app.post('/user/save', (req, res) => {
    const {name, age} = req.body

    console.log(`Nome:${name} e idade${age}`)
    res.sendFile(`${basePath}/userForm.html`)
})

app.listen(door, () => {
    console.log(`Rodando na porta ${door} 👌😊`)
})
