const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3005;
const ORIGIN = process.env.ORIGIN;

const { Client } = require('pg');

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
};

app.use(bodyParser.json());

const corsOptions = {
  origin: ORIGIN,
};

app.use(cors(corsOptions));

const db = new Client(dbConfig);

db.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => {
    console.error('Error connecting to PostgreSQL:', err);
    process.exit(1);
  });

db.on('error', (err) => {
  console.error('PostgreSQL connection error:', err);
  db.connect()
    .then(() => console.log('Reconnected to PostgreSQL database'))
    .catch(err => console.error('Error reconnecting to PostgreSQL:', err));
});

app.post('/application', async (req, res) => {
  const { firstname, lastname, email, phonenumber, jobposition } = req.body;

  try {
    const result = await db.query('INSERT INTO application (firstname, lastname, email, phonenumber, jobposition) VALUES ($1, $2, $3, $4, $5)', [firstname, lastname, email, phonenumber, jobposition]);
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  } catch (error) {
    console.error('PostgreSQL insertion error:', error);
    res.status(500).send('Internal Server Error');
  }
});

process.on('SIGINT', async () => {
  await db.end();
  console.log('PostgreSQL connection closed');
  process.exit(0);
});

app.get('/', (req,res)=> {
  return res.json("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});