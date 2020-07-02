(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{450:function(t,a,s){"use strict";s.r(a);var v=s(27),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#命名"}},[t._v("命名")])])])]),s("p"),t._v(" "),s("p",[t._v("正如您在上一节中学到的，对象将其状态存储在字段中。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cadence "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" speed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" gear "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("在 "),s("RouterLink",{attrs:{to:"/java/concepts/obgect.html"}},[t._v("什么是对象？")]),t._v(" 中向您讲述了一些领域，但您可能还有几个问题，例如：命名字段的规则和约定是什么？除了 int 外，还有其他数据类型？当声明字段时，是否必须初始化字段？如果没有明确地初始化，那么这些字段是否被分配了一个默认值？我们将在本课中探讨这些问题的答案，但在这之前，您必须先了解一些技术上的区别。在 Java 编程语言中，使用术语 “字段”和“变量”;这是新开发人员的常见混乱来源，因为这两者往往似乎指相同的东西。")],1),t._v(" "),s("p",[t._v("Java 编程语言定义了以下类型的变量：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("实例变量（非静态字段）")]),t._v(" "),s("p",[t._v("从技术上讲，对象将其各自的状态存储在“非静态字段中”，即不使用 static 关键字声明的字段。非静态字段也称为 实例变量，因为他们的值对于每个类的实例是唯一的（换句话说就是每个对象）")])]),t._v(" "),s("li",[s("p",[t._v("类变量（静态字段）")]),t._v(" "),s("p",[t._v("使用 static 修饰的字段，这告诉编译器，只存在该变量的一个副本，而不管类被实例化多少次。\n定义特定种类的自行车齿轮数的范围可以被标记为 static。因为在概念上相同数量的齿轮将适用于所有实例；代码"),s("code",[t._v("static int numGears = 6;")]),t._v("将创建一个这样的静态字段。此外，可以添加关键字 final 以指示齿轮数不会改变。")])]),t._v(" "),s("li",[s("p",[t._v("局部变量")]),t._v(" "),s("p",[t._v("类似于对象如何将其状态存储在字段中，方法通常会将其临时状态存储在"),s("strong",[t._v("局部变量")]),t._v("中。声明局部变量的语法类似于声明一个字段（例如,"),s("code",[t._v("int count = 0")]),t._v("）.没有特殊的关键字修饰，该声明完全来自于声明变量的位置 - 位于方法的开始和结束大括号之间。因此，局部变量只对他们被声明的方法可见；他们不能从该类的其他部分访问。")])]),t._v(" "),s("li",[s("p",[t._v("参数")]),t._v(" "),s("p",[t._v("您已经看到了参数的示例，无论是在 Bicycle 类中还是在 main 方法中。回想下 main 方法的前面是"),s("code",[t._v("public static void main(String[] args")]),t._v(",这里的 args 变量是这个方法的参数。要记住的重要事情是"),s("strong",[t._v("参数总是被分类为“变量”而不是字段")]),t._v("。这使用于其他参数接受构造（如构造函数和异常处理程序），这将在本章中稍后介绍")])])]),t._v(" "),s("p",[t._v("话虽如此，本教程的其余部分在讨论字段和变量时使用以下一般准则。如果我们谈论“一般领域”（不包括局部变量和参数），我们可以简单地说“字段”。如果讨论适用于“上述所有”，我们可以简单地说“变量”。如果上下文需要区分，我们将酌情使用特定术语（静态字段，局部变量等）。您也可能偶尔也会看到术语“成员”。类型的字段，方法和嵌套类型统称为其成员。")]),t._v(" "),s("h2",{attrs:{id:"命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[t._v("#")]),t._v(" 命名")]),t._v(" "),s("p",[t._v("每个编程语言都有自己的一组规则和约定，您可以使用这些类型的名称，Java 编程语言也没有什么不同。用于命名变量的规则和约定可以归纳如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("变量名称区分大小写。")]),t._v(" "),s("p",[t._v("变量的名称可以是任何合法标识符 - 一个无限长度的 Unicode 字母和数字序列，以字母，美元符号“$”或下划线字符“"),s("code",[t._v("_")]),t._v("” 开头。然而，惯例是始终用一个字母开始你的变量名，而不是“$”或“"),s("code",[t._v("_")]),t._v("”。此外，按照惯例，美元符号字符根本就不会被使用。您可能会发现某些情况下，自动生成的名称将包含美元符号，但您的变量名称应始终避免使用它。下划线字符存在类似的约定; 而用“"),s("code",[t._v("_")]),t._v("” 开始你的变量的名字在技术上是合法的，这种做法是不鼓励的。")]),t._v(" "),s("p",[t._v("空格是不允许的。")])]),t._v(" "),s("li",[s("p",[t._v("后续字符可能是字母，数字，美元符号或下划线字符。")]),t._v(" "),s("p",[t._v("公约（和常识）也适用于此规则。选择变量的名称时，请使用完整的单词而不是隐含的缩写。这样做会使您的代码更容易阅读和理解。在许多情况下，它也会使您的代码自动记录;")]),t._v(" "),s("p",[t._v("例如，cadence、speed 和 gear 比缩写版本 s、c 和 g 更直观。还请记住，您所选择的名称不能是 "),s("a",{attrs:{href:"http://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关键字或保留字"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("如果您选择的名称只包含一个单词，请以所有小写字母拼写该单词。")])]),t._v(" "),s("li",[s("p",[t._v("如果它由多个单词组成，则每个后续单词的第一个字母需要大写。")]),t._v(" "),s("p",[t._v("如名称 gearRatio 与 currentGear 。")]),t._v(" "),s("p",[t._v("如果您的变量存储常量值，例如"),s("code",[t._v("static final int NUM_GEARS = 6")]),t._v("，约定稍有​​变化，请将每个字母大写，并将后续单词用下划线字符分开。按照惯例，下划线字符从未在其他地方使用。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);