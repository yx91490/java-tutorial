# 自定义网络
Java 平台受到高度重视，部分原因是它适用于编写使用互联网和万维网资源并与之互动的程序。
实际上，与 Java 兼容的浏览器将 Java 平台的这种功能用于极端，以通过互联网传输和运行小程序。

这课带领您编写可在互联网上使用的 Java 应用程序和小应用程序的复杂性。

* [网络的概述](./overview/)

    有两个部分:

    * 第一个描述了 Java 平台的网络功能，您可能已经在使用它，却没有意识到您正在使用这个网络。
    * 第二部分提供了一个关于网络的简要概述，以使您熟悉在阅读如何使用 url、套接字和数据报(URLs, sockets, and datagrams)之前应该理解的术语和概念。

* [使用 URL](./urls/)

    讨论您的 Java 程序如何使用 url 来访问 Internet 上的信息。
    一个 URL（统一资源定位器）是 Internet 上的资源的地址。您的 Java 程序可以使用 url 来连接和检索网络上的信息。
    这个课程提供了一个更完整的 URL 定义，并向您展示了如何创建和解析 URL，如何打开通往 URL 的连接，以及如何从该连接中读取和写入。

* [套接字 Sockets](./sockets/)

    解释了如何使用套接字，这样您的程序就可以与网络上的其他程序进行通信。套接字是在网络上运行的两个程序之间的双向通信链路的一个端点。
    本课程向您展示了客户端如何连接到标准服务器，即 Echo 服务器，并通过套接字与之通信。
    然后，它会向您介绍一个完整的客户/服务器示例的详细信息，它向您展示了如何同时实现客户端和服务器端的服务器端。

* [数据报 Datagram](./datagrams/)

    Datagram 的内容都是通过一个简单的客户/服务器示例来实现的，它使用 datagram 来进行通信。
    然后，它会向您提出使用多播套接字来重写示例的挑战。

* [对网络参数的编程访问](./nifs/)

   对网络参数的编程访问解释了为什么您可能想要访问网络接口参数以及如何这样做。
   它给出了如何列出分配给机器的所有 IP 地址以及其他有用信息的示例，比如接口是否正在运行。

* Cookie

   讨论如何使用 Cookie 在客户端和服务器之间创建会话，以及如何利用 HTTP URL 连接中的 Cookie。


## 安全考虑：
请注意，通过网络进行的通信需要获得当前安全管理员的批准。 安全管理器 描述了安全管理器的功能以及它对应用程序的影响。
有关 JDK 提供的安全功能的一般信息，请参阅 Java SE 中的安全功能 。

以下课程中包含 URL，套接字和数据报的示例程序是独立应用程序，默认情况下，它们没有安全管理器。
如果您将这些应用程序转换为小应用程序，则可能无法通过网络进行通信，具体取决于它们所运行的浏览器或查看器。
有关 Applet 安全限制的信息，请参阅 Applets 可以和不可以执行的操作。

意思是不使用 applet 就不用管安全管理器了？
