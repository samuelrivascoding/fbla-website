const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3005;

const { Client } = require('pg');

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
};

app.use(bodyParser.json());
app.use(cors());

const db = new Client(dbConfig);

db.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Error connecting to PostgreSQL:', err));

db.on('error', (err) => {
  console.error('PostgreSQL connection error:', err);
});

app.post('/application', (req, res) => {
  const { firstname, lastname, email, phonenumber, jobposition } = req.body;

  const sql = 'INSERT INTO application (firstname, lastname, email, phonenumber, jobposition) VALUES ($1, $2, $3, $4, $5)';
  db.query(sql, [firstname, lastname, email, phonenumber, jobposition], (err, result) => {
    if (err) {
      console.error('PostgreSQL insertion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

app.get('/', (req,res)=> {
  return res.json("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});