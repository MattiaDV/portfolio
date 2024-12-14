import { createServer } from "http";
import { readFile } from "fs";
import { extname, join } from "path";

const PORT = 3000;
const PUBLIC_DIR = "./"; // Cartella in cui si trovano i file statici

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
};

// Crea il server
const server = createServer((req, res) => {
  let filePath = join(PUBLIC_DIR, req.url === "/" ? "/index.html" : req.url);
  const fileExt = extname(filePath);

  // Controlla che il file richiesto sia supportato
  readFile(filePath, (err, data) => {
    if (err) {
      // In caso di errore, restituisce una pagina 404
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Pagina non trovata</h1>");
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Errore del server");
      }
    } else {
      // Imposta il tipo di contenuto in base all'estensione
      const mimeType = mimeTypes[fileExt] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": mimeType });
      res.end(data);
    }
  });
});

// Avvia il server
server.listen(PORT, 'portfolio-as06.onrender.com', () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
