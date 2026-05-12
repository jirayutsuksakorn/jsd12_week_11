const express = require('express');
const cors = require('cors');

const app = express();
const port = 6767;

// Middleware
app.use(cors());
app.use(express.json()); // สำคัญ: เพื่อให้เซิร์ฟเวอร์อ่านข้อมูล JSON ที่ส่งมาจาก React ได้

// ข้อมูลตัวอย่าง (ย้ายมาไว้ข้างนอกเพื่อให้ฟังก์ชันอื่นเรียกใช้ได้)
let genmates = [
    { id: 1, name: "Emmika Pannak", jsd_number: 5, genmate: "F" },
    { id: 2, name: "Jirayut Suksakorn", jsd_number: 9, genmate: "F" },
    { id: 3, name: "Nattagorn Saehao", jsd_number: 19, genmate: "F" },
    { id: 4, name: "Wathisa Limphatthayanate", jsd_number: 41, genmate: "F" },
    { id: 5, name: "Weerayos Thammachamrat", jsd_number: 42, genmate: "F" },
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