// const http = require("http");

// const port = 3030;

// const menu = [
//     {
//         name: "ข้าวผัด",
//         price: 50,
//         id: 1,
//     },
//     {
//         name: "ผัดกระเพรา",
//         price: 60,
//         id: 2,
//     },
//     {
//         name: "ส้มตำ",
//         price: 40,
//         id: 3,
//     },
//     {
//         name: "เสต็ก",
//         price: 120,
//         id: 4,
//     },
//     {
//         name: "ตำหลวงพระบางแซลมอน",
//         price: 320,
//         id: 5,
//     },
//     {
//         name: "โอโทโร่",
//         price: 500,
//         id: 6,
//     },
//     {
//         name: "แกงกะหรี่หมูทอด",
//         price: 80,
//         id: 7,
//     },
// ];

// const server = http.createServer((req, res) => {
//     console.log(`${req.url} ${req.method} ${req.headers}`);

//     if (req.method === "GET") {
//         if (req.url === "/") {
//             res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
//             res.end("สวัสดีครับยินดีต้อนรับสู่ร้าน Generation Thailand");
//         }
//         if (req.url === "/menus") {
//             res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
//             res.end(JSON.stringify(menu));
//         }
//         if (req.url === "/randomMenu") {
//             res.setHeader("Content-Type", "application/json; charset=utf-8");
//             const randomNumber = Math.floor(Math.random() * menu.length);

//             res.end(JSON.stringify(menu[randomNumber]));
//         }
//     }
// });

// server.listen(port, () => {
//     console.log(`server is running port ${port} 🌍`);
// });

const http = require("http");
const port = 3030;

// 1. เปลี่ยนข้อมูลเป็นกลุ่มเพื่อน (Genmates)
const genmates = [
    {
        name: "Emmika Pannak",
        jsd_number: 5,
        genmate: "F"
    },
    {
        name: "Jirayut Suksakorn",
        jsd_number: 9,
        genmate: "F"
    },
    {
        name: "Nattagorn Saehao",
        jsd_number: 19,
        genmate: "F"
    },
    {
        name: "Wathisa Limphatthayanate",
        jsd_number: 41,
        genmate: "F"
    },
    {
        name: "Weerayos Thammachamrat",
        jsd_number: 42,
        genmate: "F"
    },
];

const server = http.createServer((req, res) => {
    console.log(`${req.url} ${req.method}`);

    if (req.method === "GET") {
        // หน้าแรก
        if (req.url === "/") {
            res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
            res.end("ยินดีต้อนรับสู่ระบบค้นหา Genmate!");
        }

        // 2. Path: /users (ดึงข้อมูลเพื่อนทุกคน)
        if (req.url === "/users") {
            res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
            res.end(JSON.stringify(genmates));
        }

        // 3. Path: /randomgenmate (สุ่มเพื่อน 1 คน)
        if (req.url === "/randomgenmate") {
            res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
            const randomIndex = Math.floor(Math.random() * genmates.length);
            res.end(JSON.stringify(genmates[randomIndex]));
        }
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} 🌍`);
});