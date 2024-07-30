const express = require('express');
const {ABcalculate} = require('./Q1/AB') 
const {emojiConvert} = require('./Q2/Emoji') 
const {SDcalculcate} = require('./Q3/SD') 


const app = express();
app.use((express.json()))

app.get('/1', (req, res) => {
    result = ABcalculate()
    res.send({ 'code': 0, 'result': result })

})

app.post('/2', (req, res) => {
    result = emojiConvert(req.body.message)

    res.send({ 'code': 0, 'result': result })

})


app.post('/3', (req, res) => {
    result = SDcalculcate(req.body.data)

    res.send({ 'code': 0, 'result': result})

})

app.listen(8080, () => {
    console.log(`Server running at http://localhost:8080/`);
});