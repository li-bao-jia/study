const axios = require('axios');

// 调用 /upload 路由
const uploadData = async () => {
    try {
        const response = await axios.post('http://localhost:3000/upload', {
            key: 'value'
        });
        console.log('Upload response:', response.data);
    } catch (error) {
        console.error('Error uploading data:', error);
    }
};

// 调用 /preview 路由
const previewData = async () => {
    try {
        const response = await axios.post('http://localhost:3000/preview');
        console.log('Preview response:', response.data);
    } catch (error) {
        console.error('Error previewing data:', error);
    }
};

// 调用上传和预览函数
(async () => {
    //await uploadData();
    await previewData();
})();
