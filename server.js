const express = require('express');
const path = require('path');

const app = express();
const PORT = 9099;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://ohris.com:${PORT}`);
});
