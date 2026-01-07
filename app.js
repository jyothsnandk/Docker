const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route - render form
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission
app.post('/submit', async (req, res) => {
  try {
    const formData = req.body;
    
    // Send data to Flask backend
    const response = await axios.post('http://backend:5000/process', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // Render response page with data from backend
    res.render('response', { 
      data: formData,
      backendResponse: response.data 
    });
  } catch (error) {
    console.error('Error communicating with backend:', error.message);
    res.status(500).render('error', { 
      error: 'Error communicating with the backend. Please try again.' 
    });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Frontend server running at http://localhost:${port}`);
});

