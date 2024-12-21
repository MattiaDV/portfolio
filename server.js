const express = require('express');
const getPages = require('./api/getPages');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'segreto',
  resave: false,    
  saveUninitialized: true, 
  cookie: { secure: true }
}))

app.use(express.static('./'));

app.get('/', async (req, res) => {
  if (req.session) {
    req.session.destroy();
  }
  getPages.getIndex(req, res);
})

app.get('/index', async (req, res) => {
  if (req.session) {
    req.session.destroy();
  }
  getPages.getIndex(req, res);
})

app.get('/forgetPassword', async (req, res) => {
  getPages.getForgetPasw(req, res);
})

app.get('/home', async (req, res) => {
  if (!req.session) {
    req.session.user = "user";
    console.log("Sessione creata");
  }
  getPages.getHome(req, res);
})

app.get('/login', async (req, res) => {
  getPages.getLogin(req, res);
})

app.get('/personalData', async (req, res) => {
  getPages.getPersonalData(req, res);
})

app.get('/registrazione', async (req, res) => {
  getPages.getReg(req, res);
})

app.listen(process.env.PORT || 3000, function(err) {
  if (err) {
    console.log("Errore nella connessione del server");
  } else {
    console.log(`Connessione stabilita su https://portfolio-ul1w.onrender.com:${process.env.PORT || 3000}`);
  }
});