const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
morgan.token('my-token', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :my-token'))



let persons = [
      {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
      },
      {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
      },
      {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
      },
      {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
      }
    ]

app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    const dateStamp = new Date()
    res.send(
        `<p>Phonebook has ${persons.length} people</p>
        <p>${dateStamp}</p>`
        )
    })
    
    app.get('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id)
        const person = persons.find(person => person.id === id)
        
        if (person) {
            res.json(person) 
        } else {
            res.status(404).end()
        }
    })
    
    app.delete('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id)
        persons = persons.filter(person => person.id !== id)
        
        res.status(204).end()
    })
    
    const generateId = () => {
        const randomId = Math.floor(Math.random() * (200000 - 1) + 1)
        return randomId
    }
    
    app.post('/api/persons', (req, res) => {
        const body = req.body
        
    if (!body) {
        return res.status(400).json({
            error: "content missing"
        })
    } else if (!body.name) {
        return res.status(400).json({
            error: "name missing"
        })
    } else if (!body.number) {
        return res.status(400).json({
            error: "number missing"
        })
    } else if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
            error: "name is already in the phonebook"
        })
    } 
    
    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})