import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/api/get_balance", async (req, res) => {
  const response = await fetch("http://127.0.0.1:9005/balance");
  const json = await response.json();

  res.send(json).status(200);
});

app.listen(6363, () => {
  console.log(`Sever running listening on port 6363`);
});
