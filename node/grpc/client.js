const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// 加载 proto 文件
const PROTO_PATH = path.join(__dirname, '/proto/greeter.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const studyProto = grpc.loadPackageDefinition(packageDefinition).study;

// 创建 gRPC 客户端
const client = new studyProto.Study('localhost:50051', grpc.credentials.createInsecure());

// 调用 Upload 方法
client.upload({ filename: 'example.txt', filedata: Buffer.from('Hello World') }, (error, response) => {
    if (error) {
        console.error('Upload error:', error);
    } else {
        console.log('Upload response:', response);
    }
});

// 调用 Preview 方法
client.preview({ filename: 'example.txt' }, (error, response) => {
    if (error) {
        console.error('Preview error:', error);
    } else {
        console.log('Preview response:', response);
    }
});
