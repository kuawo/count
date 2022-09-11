const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const count_json = {}
app.get("/api/count", async (req, res) => {
  let key = req.query.key
  if (!count_json[key]) { count_json[key] = 0 }
  count_json[key] = count_json[key] + 1
  res.send({ count: count_json[key] - 1 });
});

app.get("/api/count_json", async (req, res) => {
  res.send(count_json);
});

const port = process.env.PORT || 80;

async function bootstrap() {
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();
