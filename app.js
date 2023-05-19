const express = require('express');
const app = express();
const port = 3000; // You can change this port to your desired value

// Parse JSON bodies
app.use(express.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data;

  // Assuming the data contains an array of values
  const numbers = data.filter((value) => typeof value === 'string' && !isNaN(value));
  const alphabets = data.filter((value) => typeof value === 'string' && isNaN(value));

  // Prepare the response
  const response = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers: numbers,
    alphabets: alphabets
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
