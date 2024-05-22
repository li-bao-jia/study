<?php

class JsonRPC
{

    private $conn;

    function __construct($host, $port)
    {
        $this->conn = fsockopen($host, $port, $errno, $errstr, 30);
        if (!$this->conn) {
            return false;
        }
    }

    public function call($method, $params)
    {
        if (!$this->conn) {
            return false;
        }

        $err = fwrite($this->conn, json_encode(array(
            'method' => $method,
            'params' => $params,
            'id' => 0
        )) . "\n");
        if ($err === false) {
            return false;
        }

        stream_set_timeout($this->conn, 0, 3000);
        $line =  fgets($this->conn);
        if ($line === false) {
            return false;
        }

        return json_decode($line, true);
    }

}