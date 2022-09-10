const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

var vcount = 0;
app.get("/api/vcount", async (req, res) => {
  res.send({
    code: 0,
    data: vcount++,
  });
});

var mcount = 0;
app.get("/api/mcount", async (req, res) => {
  res.send({
    code: 0,
    data: mcount++,
  });
});

const port = process.env.PORT || 80;

async function bootstrap() {
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();
