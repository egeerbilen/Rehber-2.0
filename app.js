var http = require('http');
var fs = require('fs');
var inpage = fs.readFileSync("Giris.html")

http.createServer(function (req, res) {
  if (req.url == "/gir") {
    return res.end(inpage)
  }
}).listen(8000, () => {
  console.log("çalıştı")
});