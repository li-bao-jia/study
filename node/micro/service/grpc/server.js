// 1、引入proto文件
var grpc = require('@grpc/grpc-js')
var protoLoader = require('@grpc/proto-loader')

var path = require('path')
var PROTO_PATH = path.join(__dirname, "./protos/greeter.proto")


packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase:true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }
);
var greeterProto = grpc.loadPackageDefinition(packageDefinition).greeter

// 3、定义远程调用方法
function sayHello(req, res) {
        console.log(req)

        res(null, {message:"success", result:"this is grpc server"})
}

// 4、启动服务
let server = new grpc.Server();
// 注册服务
server.addService(greeterProto.Greeter.service, {sayHello:sayHello})
// 监听端口
server.bindAsync("0.0.0.0:3001", grpc.ServerCredentials.createInsecure(), ()=>{
        console.log("service start at 3001")
})