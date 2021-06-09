const express = require("express");
const cors = require('cors')

require('dotenv').config();

const app = express();

const port = process.env.PORT
const host = process.env.HOST

app.options('*', cors()) // include before other routes
app.use(cors())

app.get("/", (req, res) => {
	return res.json({data: "ok" });
});

app.get("/ping", (req, res) => {
  return res.json({data: "pong" })
});

app.listen(port);
console.log(`App listening on http://${host}:${port}`);
