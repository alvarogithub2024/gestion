const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample Route to manage cards (cartas)
app.get('/cartas', (req, res) => {
    res.send('Getting all cartas');
});

app.post('/cartas', (req, res) => {
    const newCarta = req.body;
    res.status(201).send(`Carta added: ${JSON.stringify(newCarta)}`);
});

app.put('/cartas/:id', (req, res) => {
    const id = req.params.id;
    const updatedCarta = req.body;
    res.send(`Carta ${id} updated to: ${JSON.stringify(updatedCarta)}`);
});

app.delete('/cartas/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Carta ${id} deleted`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});