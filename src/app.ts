import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Hello, I'm SopoBot");
})


app.listen(8080, () => console.log("Server running"))
