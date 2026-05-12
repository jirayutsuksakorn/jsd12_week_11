// const express = require('express');

// const app = express();
// const port = 6767

// const genmates = [
//     {
//         name: "Emmika Pannak",
//         jsd_number: 5,
//         genmate: "F"
//     },
//     {
//         name: "Jirayut Suksakorn",
//         jsd_number: 9,
//         genmate: "F"
//     },
//     {
//         name: "Nattagorn Saehao",
//         jsd_number: 19,
//         genmate: "F"
//     },
//     {
//         name: "Wathisa Limphatthayanate",
//         jsd_number: 41,
//         genmate: "F"
//     },
//     {
//         name: "Weerayos Thammachamrat",
//         jsd_number: 42,
//         genmate: "F"
//     },
// ];

// app.get('/', (req, res) => {
//     res.send('Hello Goose Goose Duck!!!')
// });

// app.get('/users', (req, res) => {
//     res.send(genmates);
// });

// app.listen(port, () => {
//     console.log(`Server is  running on : ${port}`);
// })  

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const MOCKAPI_URL = 'https://67eca027aa794fb3222e43e2.mockapi.io';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Goose Goose Duck!!!');
});

// GET - ดึงข้อมูลสมาชิก
app.get('/users', async (req, res) => {
    try {
        const response = await axios.get(`${MOCKAPI_URL}/members`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch members' });
    }
});

// POST - สร้างสมาชิกใหม่
app.post('/users', async (req, res) => {
    try {
        const response = await axios.post(`${MOCKAPI_URL}/members`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create member' });
    }
});

// DELETE - ลบสมาชิก
app.delete('/users/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${MOCKAPI_URL}/members/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete member' });
    }
});

app.listen(6767, () => {
    console.log('Server is running on port 6767');
});