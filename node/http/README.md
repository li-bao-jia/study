<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <p>Node.js HTTP API</p>
  <p>展示如何使用 HTTP API 来实现一个 Node.js 微服务</p>
</div>

### 概述 HTTP API
- 请求方式: 通过 HTTP 请求方法（GET, POST, PUT, DELETE）来表示不同的操作。
- URL 路径: 使用不同的 URL 路径来区分不同的资源或操作。例如，/upload 和 /preview。
- 数据格式: 请求和响应的数据通常采用 JSON 格式。
- 操作表达: 每个操作对应一个特定的 URL 路径和 HTTP 方法。

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
