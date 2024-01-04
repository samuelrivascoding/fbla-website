const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3005;
const origin = 'http://localhost:3000';
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'client/build')));


const corsOptions = {
  origin: origin,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'beans23',
  password: process.env.DB_PASSWORD || 'beans23',
  database: process.env.DB_NAME || 'jobapps',
});


app.post('/application', (req, res) => {
  const { firstname, lastname, email, phonenumber, jobposition } = req.body;

  const sql = 'INSERT INTO application (firstname, lastname, email, phonenumber, jobposition) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [firstname, lastname, email, phonenumber, jobposition], (err, result) => {
    if (err) {
      console.error('MySQL insertion error:', err);
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

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});