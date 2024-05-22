const express = require('express');
const fs = require('fs');
const ci = require('miniprogram-ci');
const app = express();
const port = 3000;

/**
 * "allowedIPs": ["127.0.0.1", "::1"]
 */

// 读取配置文件
const configPath = 'config.json';
const configData = fs.readFileSync(configPath, 'utf-8');
const config = JSON.parse(configData);

// 中间件函数，用于检查请求的来源 IP 地址是否在允许列表中
const allowOnlyIP = (allowedIPs) => {
    return (req, res, next) => {
        const clientIP = req.ip; // 获取请求的客户端 IP 地址
        if (allowedIPs.includes(clientIP)) {
            next(); // 如果客户端 IP 在允许列表中，继续执行下一个中间件或路由处理函数
        } else {
            res.status(403).send('Forbidden'); // 如果客户端 IP 不在允许列表中，返回 403 Forbidden 错误
        }
    };
};

// 处理小程序上传请求
app.post('/upload', async (req, res) => {
    try {
        // 构建上传配置对象
        const project = new ci.Project({
            // 项目配置
        });

        // 执行上传操作
        const uploadResult = await ci.upload({
            project: project,
            // 其他上传参数
        });

        // 返回上传结果
        res.json(uploadResult);
    } catch (error) {
        // 处理上传过程中的错误
        console.error('Upload failed:', error);
        res.status(500).json({ error: 'Upload failed' });
    }
});

// 使用中间件，只允许允许列表中的 IP 地址访问
app.use(allowOnlyIP(config.allowedIPs));

// 定义路由
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 启动服务
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
