const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const apis = [
  { name: "Maritaca AI", url: "https://api.maritaca.ai/status", cost: "R$ 5,00" },
  { name: "DeepSeek", url: "https://api.deepseek.com/status", cost: "R$ 1,10" },
  { name: "ChatGPT", url: "https://api.openai.com/status", cost: "US$ 1,10" }
];

app.get("/apis", async (req, res) => {
  const results = await Promise.all(
    apis.map(async (api) => {
      try {
        const start = Date.now();
        await axios.get(api.url);
        const responseTime = Date.now() - start;
        return { name: api.name, status: "Online", response_time: responseTime, cost: api.cost };
      } catch (error) {
        return { name: api.name, status: "Offline", response_time: "-", cost: api.cost };
      }
    })
  );

  res.json(results);
});

app.listen(5000, () => {
  console.log("Backend rodando na porta 5000");
});
