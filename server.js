const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

let friendsList = ['João', 'Maria', 'Ana', 'Carlos', 'Beatriz'];

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/friends', (req, res) => {
    res.json(friendsList);
});

app.post('/add-friend', (req, res) => {
    console.log('Body recebido:', req.body);

    const { name } = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: 'O campo "name" é obrigatório e deve ser uma string.' });
    }

    if (friendsList.includes(name)) {
        return res.status(400).json({ error: 'Este nome já foi adicionado.' });
    }

    friendsList.push(name);
    res.status(201).json({ message: 'Nome adicionado com sucesso!', name });
});


app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
    console.log('Rotas disponíveis:');
    console.log(`GET  /friends      - Mostra todos os nomes no array `);
    console.log(`POST /add-friend   - Adiciona um novo nome no array.`);
}) 
