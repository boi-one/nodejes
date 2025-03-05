const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

let date = new Date();

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'guestbook.html'));
});

app.post('/', (req, res) => {
    const {parcel} = req.body;
    res.status(200).send({status:"recieved"});
    fs.appendFile('log.txt', req.ip + " " + date + " " + parcel + '\r\n', (err) => {
        if(err) throw err;
    });
    let messages = fs.readFileSync('messages.json');
    let messagesObject = JSON.parse(messages);

    let message = {
        "date":date,
        "msg":parcel
    }
    messagesObject.push(message);
    fs.writeFile('messages.json', JSON.stringify(messagesObject), (err) => {
        if(err) throw err;
    });
    console.log(req.ip + " " + date + " " + parcel);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});