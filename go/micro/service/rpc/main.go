package main

import (
	"fmt"
	"net"
	"net/rpc"
)

type WeChatAppletDevtool struct{}

func (w *WeChatAppletDevtool) Upload(req string, res *string) (err error) {
	*res = "你好" + req

	return
}

func main() {
	// 1、注册RPC服务
	err1 := rpc.RegisterName("weChatAppletDevtool", new(WeChatAppletDevtool))
	if err1 != nil {
		fmt.Println(err1)
	}

	// 2、监听端口
	listener, err2 := net.Listen("tcp", "127.0.0.1:8081")
	if err2 != nil {
		fmt.Println(err2)
	}

	// 3、应用退出的时候关闭监听端口
	defer listener.Close()

	for {
		fmt.Println("建立链接")
		// 4、建立链接
		conn, err3 := listener.Accept()
		if err3 != nil {
			fmt.Println(err3)
		}

		// 5、绑定服务
		rpc.ServeConn(conn)
	}
}
