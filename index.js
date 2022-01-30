const customExpress = require('./config/customExpress')
const connection = require('./infraestrutura/connection')

connection.connect(error => {
    if(error) {
        console.log(error)
    } else {
        console.log('connection successful')

        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})