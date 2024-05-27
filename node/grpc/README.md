<p align="center">Node.js Grpc</p>
<p align="center">展示如何使用 gRPC 来实现一个 Node.js 微服务</p>


### 概述 Grpc

- 协议: 使用 HTTP/2 进行传输，使用 Protobuf 进行消息序列化。
- 性能: 由于采用二进制序列化（Protobuf）和多路复用（HTTP/2），性能较高。
- IDL: 使用接口定义语言（Protobuf）来定义服务方法和消息类型。
- 流式传输: 支持客户端流、服务器端流和双向流。
- 强类型: 提供强类型，并生成多种编程语言的代码。

### 优点

- 高性能: 二进制序列化和 HTTP/2 多路复用流使得性能极高。
- 多语言支持: 使用 Protobuf 定义接口和消息，自动生成多语言客户端和服务端代码。
- 丰富功能: 支持多种通信模式（如流式通信）。
- 强类型: 提供强类型约束，减少通信中的错误。

### 缺点

- 复杂性: 需要学习和掌握 Protobuf 和 gRPC 相关的工具和概念。
- 依赖性: 需要 gRPC 和 Protobuf 的支持库。
- 调试困难: 二进制格式不如 JSON 易于调试和查看。

### 服务端

- 初始项目：
    ```sh
    npm init --yes
    ```

- 安装依赖：
    ```sh
    npm install @grpc/grpc-js @grpc/proto-loader
    ```

- 复制proto文件
    ```sh
    cp protos <your project path>
    ```

- 复制index.js到你的微服务端项目根目录
    ```sh
    cp index.js <your project path>
    ```

- 启动服务
    ```sh
    node index.js 
    ```

### 客户端

- 初始项目：
    ```sh
    npm init --yes
    ```

- 安装依赖：
    ```sh
    npm install @grpc/grpc-js @grpc/proto-loader
    ```

- 复制proto文件
    ```sh
    cp protos <your project path>
    ```

- 复制client.js到你的客户端项目根目录
    ```sh
    cp index.js <your project path>
    ```

- JS调用
    ```sh
    node client.js
    ```

### 使用study库直接测试

- 克隆代码
    ```sh
    git clone https://github.com/li-bao-jia/study.git
    ```

- 打开目录
    ```sh
    cd study/node/grpc
    ```

- 安装依赖
    ```sh
    npm install
    ```

- 启动微服务
    ```sh
    node index.js 
    ```

- 客户端调用
    ```sh
    node client.js 
    ```


