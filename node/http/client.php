<?php

function callService($url, $data) {
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
        die('Error');
    }
    var_dump(json_decode($result, true));
}

// 调用 /upload 路由
$uploadData = [
    'filename' => 'test.txt',
    'data' => 'file content',
];
callService('http://localhost:3001/upload', $uploadData);

// 调用 /preview 路由
$previewData = [
    'filename' => 'test.txt',
];
callService('http://localhost:3001/preview', $previewData);
?>
