const customExpress = require('./config/customExpress')
const connection = require('./infraestrutura/connection')
const Tables = require('./infraestrutura/tables')

connection.connect(error => {
    if(error) {
        console.log(error)
    } else {
        console.log('connection successful')

        Tables.init(connection)
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})