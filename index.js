const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const count_json = {}
app.get("/api/count", async (req, res) => {
  if (!count_json[req.query.keyword]) {
    count_json[req.query.keyword] = 0
  }
  count_json[req.query.keyword] = count_json[req.query.keyword] + 1
  res.send({ count: count_json[req.query.keyword] });
});

var vcount = 0;
app.get("/api/vcount", async (req, res) => {
  res.send({ data: vcount++ });
});

var mcount = 0;
app.get("/api/mcount", async (req, res) => {
  res.send({ data: mcount++ });
});

const port = process.env.PORT || 80;

async function bootstrap() {
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();
