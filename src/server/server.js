const express = require('express');
const cors = require( "cors");
const path = require('path');
const fs = require('fs');
const audioList = require('./audioList');
const app = express();


app.use(express.json());
const port = 3030;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/:id', (req, res) => {
    console.log(req.params);
    const id=req.matchedData.id;
    res.send(`from params - ${id} `)

});

/*app.get('/download', (req, res) => {
    const file = __dirname + '/../../package.json';
    res.download(file);
});*/

app.get('/audio/playlist', (req, res) => {
        const mappedList=audioList.map((itm,id)=>{
            return {id,title:itm.title,artists:itm.artists}
        });
        return res.send(mappedList);

});

app.get('/audio/load/:id', (req, res) => {

    const id =req.params.id;
    const audioItem=audioList[id];
    var stream = fs.createReadStream(audioItem.path);

// Handle non-existent file
    stream.on('error', function (error) {
        res.writeHead(404, 'Not Found');
        res.write('404: File Not Found!');
        res.end();
    });

// File exists, stream it to user
    res.statusCode = 200;
    stream.pipe(res);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
