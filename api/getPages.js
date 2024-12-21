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