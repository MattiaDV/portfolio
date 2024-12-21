const {readFile} = require('fs/promises'); 

exports.getIndex = async function(req, res) {
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
}

exports.getForgetPasw = async function(req, res) {
    try {
        let htmlContent = await readFile('forgetPasw.html', 'utf-8');
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
}

exports.getHome = async function(req, res) {
    try {
        let htmlContent = await readFile('home.html', 'utf-8');
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
}

exports.getLogin = async function(req, res) {
    try {
        let htmlContent = await readFile('login.html', 'utf-8');
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
}

exports.getPersonalData = async function(req, res) {
    try {
        let htmlContent = await readFile('personalData.html', 'utf-8');
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
}

exports.getReg = async function(req, res) {
    try {
        let htmlContent = await readFile('registrazione.html', 'utf-8');
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
}