const http = require("http");
const fs = require("fs");
const porta = 443;
const servidor = http.createServer((req, res) => {
  fs.appendFile("text.txt", "Frase crianada no appendFile no txt", (err) => {
    if (err) throw err;
  });
  res.end();
});

servidor.listen(porta, () => {
  console.log("Servidor rodando..");
});
