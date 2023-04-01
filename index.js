const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()


// middlewares
app.use(helmet())
app.use(morgan())
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        message: 'himanshu hi.'
    })
})



const port = process.env.PORT || 1337


app.listen(port, () => {
    console.log(`started listening ${port}`);
})
