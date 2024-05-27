<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <p>Node.js JSON-RPC</p>
  <p>展示如何使用 JSON-RPC 来实现一个 Node.js 微服务</p>
</div>

### 概述 JSON-RPC

- 请求方式: 所有操作通过 HTTP POST 请求发送，且使用相同的 URL。
- 数据格式: 请求和响应的数据采用 JSON-RPC 格式，其中包含 jsonrpc 版本、method 方法名、params 参数、id 请求标识符。
- 操作表达: 操作通过 JSON 请求体中的 method 字段来区分，而不是通过不同的 URL 路径。

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
