const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// 使用 body-parser 中间件解析 JSON 请求体
app.use(bodyParser.json());

// 定义 /upload 路由
app.post('/upload', (req, res) => {
    const { filename, data } = req.body;
    console.log(`Uploading file ${filename}...`);
    console.log('Data:', data);
    // 实现上传逻辑
    res.json({ message: `File ${filename} uploaded successfully!` });
});

// 定义 /preview 路由
app.post('/preview', (req, res) => {
    const { filename } = req.body;
    console.log(`Previewing file ${filename}...`);
    // 实现预览逻辑
    res.json({ message: `Previewing file ${filename}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
