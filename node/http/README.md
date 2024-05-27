<p align="center">Node.js HTTP API</p>
<p align="center">展示如何使用 HTTP API 来实现一个 Node.js 微服务</p>


### 概述 HTTP API
- 协议: 使用 HTTP/1.1 或 HTTP/2 进行传输。
- 性能: 相比 gRPC 性能较低，因为使用了基于文本的 JSON 序列化。
- 设计: 通常遵循 REST 原则，使用不同的 HTTP 方法（GET、POST、PUT、DELETE）进行 CRUD 操作。
- 灵活性: 没有严格的 schema，数据格式和结构更加灵活。

### 优点

- 简单易用: 易于理解和使用，广泛应用于 web 开发。
- 调试方便: JSON 数据格式易于阅读和调试。
- 兼容性: 不需要额外库，任何支持 HTTP 的客户端都可以访问。

### 缺点

- 性能较低: 文本序列化（如 JSON）和 HTTP/1.1 的请求-响应模式性能较低。
- 无强类型: 缺乏强类型约束，容易出现数据格式错误。

### 服务端

- 初始项目：
    ```sh
    npm init --yes
    ```

- 安装依赖：
    ```sh
    npm install express body-parser
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
    cd study/node/http
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
