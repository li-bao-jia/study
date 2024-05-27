package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	// 调用 /upload 路由
	uploadData := map[string]string{
		"filename": "test.txt",
		"data":     "file content",
	}
	callService("http://localhost:3001/upload", uploadData)

	// 调用 /preview 路由
	previewData := map[string]string{
		"filename": "test.txt",
	}
	callService("http://localhost:3001/preview", previewData)
}

func callService(url string, data map[string]string) {
	jsonData, err := json.Marshal(data)
	if err != nil {
		panic(err)
	}
	resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)
	fmt.Println(result)
}
