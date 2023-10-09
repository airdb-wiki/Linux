# nc

```bash
nc -vz 192.168.0.10 80
```

其中，-v选项用于打印详细的扫描结果；-z选项用于指定使用0 I/O数据模式。主机名可以是域名或IP地址，端口号可以是数字或服务名称。

如果端口开放，输出信息中会显示"succeeded"或"open"。

如果端口关闭，输出信息中会显示"refused"。

