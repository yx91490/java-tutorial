(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{769:function(a,t,e){"use strict";e.r(t);var n=e(27),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"类型注解和可插拨类型系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型注解和可插拨类型系统"}},[a._v("#")]),a._v(" 类型注解和可插拨类型系统")]),a._v(" "),e("p",[a._v("在 Java SE 8 发布之前，注解只能应用于声明。从 Java SE 8 版本开始，注解也可以应用于任何类型的使用。这意味着注解可以在您使用类型的任何位置使用。使用类型的几个示例是类实例创建表达式 new、casts、implements 子句和 throws 子句。这种注解形式称为类型注注解，并在注解基础中提供了几个示例 。")]),a._v(" "),e("p",[a._v("创建类型注解，以支持改进 Java 程序分析方法，确保更强大的类型检查。Java SE 8 版本不提供类型检查框架，但它允许您编写（或下载）一种类型检查框架，该框架实现为与 Java 编译器一起使用的一个或多个可插拔模块。")]),a._v(" "),e("p",[a._v("例如，您希望确保程序中的特定变量从不分配给 null; 你想避免触发一个 NullPointerException。您可以编写一个自定义插件来检查。然后，您将修改代码以注解该特定变量，指示它永远不会分配给 null。变量声明可能如下所示：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@NonNull")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("当您编译代码（包括 NonNull 命令行中的模块）时，如果编译器检测到潜在问题，则会打印出警告，从而允许您修改代码以避免错误。在更正代码以删除所有警告后，程序运行时不会发生此特定错误。")]),a._v(" "),e("p",[a._v("您可以使用多个类型检查模块，其中每个模块检查其他类型的错误。这样，您可以构建 Java 类型系统之上，添加特定检查的时间和地点。")]),a._v(" "),e("p",[a._v("通过明确使用类型注解和可插拔类型检查器的存在，您可以编写更强大，更不容易出错的代码。")]),a._v(" "),e("p",[a._v("许多情况下，您不必编写自己的类型检查模块。有第三方为你做了工作。例如，您可能希望利用华盛顿大学创建的 Checker 框架。该框架包括一个 NonNull 模块，以及一个正则表达式模块和一个互斥锁模块。有关更多信息，请参阅 "),e("a",{attrs:{href:"https://checkerframework.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Checker框架"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);