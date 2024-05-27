<p align="center">Node.js JSON-RPC</p>
<p align="center">展示如何使用 JSON-RPC 来实现一个 Node.js 微服务</p>


### 概述 JSON-RPC

- 协议: 通常使用 HTTP 进行传输，使用 JSON 进行消息序列化。
- 性能: 相比 gRPC 性能较低，因为使用了基于文本的 JSON 序列化。
- 设计: 请求和响应的数据采用 JSON-RPC 格式，其中包含 jsonrpc 版本、method 方法名、params 参数、id 请求标识符。
- schema: 基于 JSON 的 schema，没有像 Protobuf 那样的严格 IDL。

### 优点

- 简单易用: 易于实现和使用，适用于轻量级通信。
- 灵活性: JSON 格式灵活，可处理复杂数据结构。
- 无依赖: 不需要像 gRPC 那样的特殊依赖库。

### 缺点

- 性能较低: 文本序列化和 HTTP/1.1 性能不如 gRPC。
- 无强类型: 缺乏强类型约束，容易出现数据格式错误。
- 缺乏标准化: 相比 gRPC，缺乏统一的接口定义和实现标准。

### 服务端

- 初始项目：
    ```sh
    npm init --yes
    ```
  
- 安装依赖：
    ```sh
    npm install express body-parser jsonrpc-lite
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

- 复制client.*到你的客户端项目根目录，如果你的客户端是node，就复制client.js，如果是php就复制client.php
    ```sh
    cp index.* <your project path>
    ```

- JS调用，需要安装依赖
    ```sh
    npm install axios
    ```
    ```sh
    node client.js
    ```

- PHP调用
    ```sh
    php client.php
    ```

### 使用study库直接测试

- 克隆代码
    ```sh
    git clone https://github.com/li-bao-jia/study.git
    ```

- 打开目录
    ```sh
    cd study/node/jsonRpc
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
