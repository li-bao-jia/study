async function jsonRpcRequest(url, method, params) {
    const data = {
        jsonrpc: '2.0',
        id: 1,
        method: method,
        params: params,
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to make request');
    }

    return await response.json();
}

const url = 'http://localhost:3001/json-rpc';

// 调用 upload 方法
jsonRpcRequest(url, 'upload', { filename: 'test.txt', data: 'file content' })
    .then(response => console.log('Upload response:', response))
    .catch(error => console.error('Error:', error));

// 调用 preview 方法
jsonRpcRequest(url, 'preview', { filename: 'test.txt' })
    .then(response => console.log('Preview response:', response))
    .catch(error => console.error('Error:', error));
