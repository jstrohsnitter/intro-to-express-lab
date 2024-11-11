const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send("<h1>Intro to Express Lab</h1>")
});
//Be Polite, Greet the User -- create a aroute that responds to URLs like /greetings/<username-parameter>
app.get('/greetings/:name', (req, res)=>{
    res.send(`<h1>Hello there, ${req.params.name}!</h1>`)
});
//Rolling the Dice
app.get('/roll/:number', (req, res)=>{
    const roll = req.params.number
    // if(roll = number){ //if i take this and the else statement out this works
    function diceRoll () {
        return (Math.floor(Math.random() * roll))
    }
    if(isNaN(roll)) { //got this isNan function from chatGPT
        res.send(`<h1>You must specify a number.</h1>`)
        console.log(diceRoll())
    } else {
        res.send(`<h1>You rolled a ${diceRoll()}!</h1>`)
    }
})


// I want THAT One!
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:number', (req, res)=>{
    const index = req.params.number
    if (index > 2) {
        res.send(`<h1>This item is not yet in stock. Check back soon!</h1>`)
    } else {
    res.render('collectibles.ejs', {
        item: collectibles[index]
    })
    }
})






































app.listen(3000, () => {
    console.log('Listening on port 3000');
  })