package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	url := "http://localhost:3000/upload" // Node 微服务的地址

	// 准备上传的数据，可以根据需要调整
	data := map[string]interface{}{
		"param1": "value1",
		"param2": "value2",
		// 其他参数
	}

	// 将数据转换为 JSON 格式
	payload, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error encoding JSON:", err)
		return
	}

	// 发送 POST 请求
	resp, err := http.Post(url, "application/json", bytes.NewBuffer(payload))
	if err != nil {
		fmt.Println("Error sending request:", err)
		return
	}
	defer resp.Body.Close()

	// 读取响应内容
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response:", err)
		return
	}

	// 打印响应内容
	fmt.Println("Response:", string(body))
}
