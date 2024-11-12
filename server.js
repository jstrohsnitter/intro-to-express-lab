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
        // console.log(diceRoll())
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
    res.render('show.ejs', {
        item: collectibles[index] // had to run npm install ejs for this to work
    })
    // res.send(`<h1>So, you want the <%= item.name %> For <%= item.price %>, it can be yours!</h1>`)
    if (index > 2) {
        res.send(`<h1>This item is not yet in stock. Check back soon!</h1>`)
    } 
    })

    // QUERY PARAMETERS 
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

// app.get('/shoes', (req, res)=> {
//     res.render('stock.ejs', {
//         inventory: shoes,
//     })
// })

app.get('/shoes', (req, res)=> {
    const min = req.query.min
    const max = req.query.max
    const style = req.query.type
 
  if(min){ 
    const minShoes = shoes.filter((banana) => banana.price >= min) 
    res.send(minShoes) 
}
  if (max){ 
    const maxShoes = shoes.filter((banana) => banana.price <= max) 
    res.send(maxShoes) 
}
  if (style) { 
    const typeShoes = shoes.filter((banana) => banana.type === style)
    res.send(typeShoes) 
}

 












//     const minShoes = []
//     const maxShoes = []
//     const matchingShoes = []
    
//     shoes.forEach(minPrice =>{
//         if (minPrice.price > min)
//            minShoes.push(minPrice) 
//     })
// res.send(minShoes)

//     shoes.forEach(maxPrice =>{
//         if (maxPrice.price < max)
//         minShoes.push(minPrice) 
//     })
// res.send(maxShoes)

//     shoes.forEach(style => {
//         if(style.type === type) {
//             matchingShoes.push((style));
//         }
//         res.send(matchingShoes)
//     })
    // matchingShoes.forEach(banana => {
    //  shoeString = JSON.stringify(banana)
    // })
//  res.send(matchingShoes)
})






































app.listen(3000, () => {
    console.log('Listening on port 3000');
  })