const express = require('express');
const cors = require('cors');

const app = express();
const port = 6767;

// Middleware
app.use(cors());
app.use(express.json()); // สำคัญ: เพื่อให้เซิร์ฟเวอร์อ่านข้อมูล JSON ที่ส่งมาจาก React ได้

// ข้อมูลตัวอย่าง (ย้ายมาไว้ข้างนอกเพื่อให้ฟังก์ชันอื่นเรียกใช้ได้)
let genmates = [
    { id: 1, name: "Emmika", lastname: "Pannak", position: "Software Developer" },
    { id: 2, name: "Jirayut", lastname: "Suksakorn", position: "Software Developer" },
    { id: 3, name: "Nattagorn", lastname: "Saehao", position: "Software Developer" },
    { id: 4, name: "Wathisa", lastname: "Limphatthayanate", position: "Software Developer" },
    { id: 5, name: "Weerayos", lastname: "Thammachamrat", position: "Software Developer" },
];

// 1. GET: ดึงข้อมูลทั้งหมด
app.get('/users', (req, res) => {
    res.json(genmates);
});

// 2. POST: เพิ่มข้อมูลใหม่ (สำหรับหน้า Admin)
app.post('/users', (req, res) => {
    const newMember = {
        id: Date.now(), // สร้าง ID จำลอง
        ...req.body
    };
    genmates.push(newMember);
    res.status(201).json(newMember);
});

// 3. DELETE: ลบข้อมูล (สำหรับหน้า Admin)
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    genmates = genmates.filter(member => member.id !== parseInt(id));
    res.json({ message: "Deleted successfully" });
});

app.get('/', (req, res) => {
    res.send('Hello Goose Goose Duck!!!');
});

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});