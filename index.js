const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3012;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:listingId', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './public/index.html'))
});



app.listen(port, () => console.log(`listening on port ${port}...`));