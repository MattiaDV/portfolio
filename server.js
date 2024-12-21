const express = require('express');
const {readFile} = require('fs/promises'); 
const getPages = require('./api/getPages');

const app = express();

app.get('/' || '/index', async (req, res) => {
  getPages.getIndex(req, res);
})

app.listen(3000, '127.0.0.1', function(err) {
  if (err) {
    console.log("Errore nella connessione del server");
  } else {
    console.log("Connession stabilita su http://127.0.0.1:3000");
  }
})