const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


const express = require('express')
const validator = require('validator')

const app = express()

    app.get('/greetings/:username', (req, res) => {
        const username = req.params.username;
         res.send(`<p>Hello, ${username}!</p>`); 
    })

    app.get('/roll/:number', (req, res) => {
        const number = req.params.number;
        if (validator.isNumeric(number)){
            res.send(`Roll, ${number}!</p>`); 
        }
        else
        res.send('You must specify a number.')

    })

    app.get('/collectibles/:index', (req, res) => { 
        const index = Number(req.params.index)
        if (index >= 0 && index < collectibles.length) {
            const item = collectibles[index]
            res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)
        }
        else
        {
            res.send("This item is not yet in stock. Check back soon!")
        }
    })



app.listen(3000,() =>{
    console.log('Listening on port 3000')
})