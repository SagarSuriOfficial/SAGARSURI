const PORT = process.env.PORT || 8081

const app = require('./app')

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`)
})

