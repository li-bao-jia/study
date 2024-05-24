// 1、引入proto文件
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

var path = require('path')
var PROTO_PATH = path.join(__dirname, "./protos/greeter.proto")

// 2、加载proto文件
packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);
var greeterProto = grpc.loadPackageDefinition(packageDefinition).greeter;

// 3、建立链接
var client = new greeterProto.Greeter('127.0.0.1:3001', grpc.credentials.createInsecure());

client.sayHello({username: '张三'}, (err, response) => {

    console.log(response)

    if (err) {
        console.error(err);
    } else {
        console.log('Greeting:', response.message);
    }
});
