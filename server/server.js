const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON-encoded bodies
app.use(bodyParser.json());

app.post('/upload', (req, res) => {
  const uploadedFileName = req.body.file.name;
  console.log(uploadedFileName); // Output the uploaded file name to the console

  // Send a response to the client
  res.json({ message: 'File uploaded successfully' });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});