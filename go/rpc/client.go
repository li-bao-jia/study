package main

import (
	"fmt"
	"net/rpc"
)

func main() {
	fmt.Println("我是 client")

	// 1、用rpc.Dial和rpc微服务建立链接
	conn, err1 := rpc.Dial("tcp", "127.0.0.1:8081")
	if err1 != nil {
		fmt.Println(err1)
	}

	// 2、当客户端退出时，关闭链接
	defer conn.Close()

	// 3、调用远程函数
	var reply string
	err2 := conn.Call("weChatAppletDevtool.Upload", "client", &reply)
	if err2 != nil {
		fmt.Println(err2)
	}

	// 4、获取微服务返回数据
	fmt.Println(reply)
}
