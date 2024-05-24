<?php

function jsonRpcRequest($url, $method, $params) {
    $data = [
        'jsonrpc' => '2.0',
        'id'      => 1,
        'method'  => $method,
        'params'  => $params,
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($data),
        ],
    ];

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        throw new Exception('Error making request');
    }

    return json_decode($result, true);
}

$url = 'http://localhost:3001/json-rpc';


try {
    // 调用 upload 方法
    $response = jsonRpcRequest($url, 'upload', ['filename' => 'test.txt', 'data' => 'file content']);

    echo "Response: " . $response['result'] . "\n";

    // 调用 preview 方法
    $response = jsonRpcRequest($url, 'preview', ['filename' => 'test.txt']);

    echo "Response: " . $response['result'] . "\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
