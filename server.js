const express = require('express');
const {readFile} = require('fs/promises'); 

const app = express();

app.get('/' || '/index', async (req, res) => {
  try {
    let htmlContent = await readFile('index.html', 'utf-8');
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(htmlContent);
    return;
  } catch(err) {
    if (err) {
      console.log(err);
      res.send("Errore nel server interno");
      return;
    }
  }
})

app.listen(3000, '127.0.0.1', function(err) {
  if (err) {
    console.log("Errore nella connessione del server");
  } else {
    console.log("Connession stabilita su http://127.0.0.1:3000");
  }
})