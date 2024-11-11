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



app.listen(3000, () => {
    console.log('Listening on port 3000');
  })