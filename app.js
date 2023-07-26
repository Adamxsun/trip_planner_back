const express = require('express');
const app = express();
const port = 3000;
app.use(cors());
// Sample data for cities
const cities = [
  { name: 'Rome',  label: '001',description: 'Rome, the capital city of Italy, is a captivating blend of ancient history and modern vibrancy. ' },
  { name: 'Athens', label: '002',description: 'Athens, the capital city of Greece, is renowned for its contributions to civilization and the birthplace of democracy.' },
  { name: 'Edmonton', label: '003',description: 'Edmonton, the capital of Alberta, Canada, is a city of festivals, culture, and natural beauty' },
  { name: 'Calgary', label: '004',description: 'Calgary, located in Alberta, Canada, is a vibrant city known for its western culture and hospitality.' },
  { name: 'Tokyo', label: '005',description: 'Tokyo, the bustling capital of Japan, is a dynamic metropolis where traditional culture seamlessly blends with cutting-edge technology.' },

  // Add more cities here...
];

// Route to get the list of cities
app.get('/cities', (req, res) => {
  res.json(cities);
});

// Route to get a specific city by name
app.get('/cities/:name', (req, res) => {
  const cityName = req.params.name;
  const city = cities.find(city => city.name.toLowerCase() === cityName.toLowerCase());

  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ error: 'City not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
