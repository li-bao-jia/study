const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// 加载 proto 文件
const PROTO_PATH = path.join(__dirname, 'proto/greeter.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
});
const studyProto = grpc.loadPackageDefinition(packageDefinition).study;

// 实现服务方法
function upload(call, callback) {
        // 处理上传逻辑
        console.log('Received upload request:', call.request);
        callback(null, { message: 'File uploaded successfully' });
}

function preview(call, callback) {
        // 处理预览逻辑
        console.log('Received preview request:', call.request);
        callback(null, { previewUrl: 'http://example.com/preview/' + call.request.filename });
}

// 启动 gRPC 服务器
function main() {
        const server = new grpc.Server();
        server.addService(studyProto.Study.service, { upload, preview });
        server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
                console.log('Server running at http://0.0.0.0:50051');
        });
}

main();
