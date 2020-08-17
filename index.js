const express = require("express")
const app = express()
require('dotenv').config()
const Person = require("./models/person")
const morgan = require("morgan")


const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
  }

const errorHandler = (error, req, res, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }
  
    next(error)
  }
  
  
app.use(express.json())
app.use(express.static("build"))

morgan.token('my-token', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :my-token'))
    
app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/info', (req, res) => {
    const dateStamp = new Date()
    Person.find({}).then(person => {
        res.send(
            `<p>Phonebook has ${person.length} people</p>
            <p>${dateStamp}</p>`
            )
        })
    })
    
app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id).then(person => {
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id).then(result => {
        res.status(204).end()
    })
    .catch(error => next(error))
})
    
app.post('/api/persons', (req, res, next) => {
    const body = req.body
    console.log(body)
    if (body === undefined) {
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
    } 
    
    const person = new Person({
        name: body.name,
        number: body.number
    })
    
    person
        .save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedFormattedPerson => {
        res.json(savedFormattedPerson)
    })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true, runValidators: true, context: 'query' })
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)
    
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})