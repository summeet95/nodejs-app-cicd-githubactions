import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello from server! this is a fix to the issues that have arrived' });
});

app.listen(PORT, () => {
  console.log(`server is up and running on PORT ${PORT}`);
});