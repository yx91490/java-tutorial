(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{430:function(t,a,e){"use strict";e.r(a);var n=e(27),v=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"什么是数据报？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据报？"}},[t._v("#")]),t._v(" 什么是数据报？")]),t._v(" "),e("p",[t._v("通过可靠通道（例如 TCP 套接字）进行通信的客户端和服务器之间有一个专用的点对点通道，\n或者至少是一个通道。要进行通信，它们会建立连接，传输数据，然后关闭连接。\n通过信道发送的所有数据的接收顺序与发送的顺序相同。这是由渠道保证的。")]),t._v(" "),e("p",[t._v("相反，通过数据报通信的应用程序发送和接收完全独立的信息包。这些客户端和服务器没有也不需要专用的点对点通道。\n无法保证将数据报传送到目的地。他们到达的顺序也不能保证。")]),t._v(" "),e("p",[e("strong",[t._v("定义：")]),t._v(" 数据报是自包含的独立消息，其到达时间和内容顺序不能保证。")]),t._v(" "),e("p",[t._v("java.net 包包含三个类来帮助你编写使用数据包在网络上发送和接收数据包的 Java 程序：")]),t._v(" "),e("ul",[e("li",[t._v("DatagramSocket")]),t._v(" "),e("li",[t._v("DatagramPacket")]),t._v(" "),e("li",[t._v("MulticastSocket")])]),t._v(" "),e("p",[t._v("应用程序可以通过 DatagramSocket 发送和接收数据报。此外，DatagramPacket 可以广播给多个接收方，\n所有接收方都监听一个多播套接字 MulticastSocket。")])])}),[],!1,null,null,null);a.default=v.exports}}]);