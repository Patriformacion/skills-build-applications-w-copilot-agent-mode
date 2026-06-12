import express from 'express';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

app.listen(PORT, () => {
  console.log(`OctoFit backend listening on port ${PORT}`);
});
