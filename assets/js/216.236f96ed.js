(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{744:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"泛型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[t._v("#")]),t._v(" 泛型")]),t._v(" "),a("p",[t._v("J2SE 5.0 中引入了这种期待已久的增强类型系统的功能，它允许 "),a("strong",[t._v("类型")]),t._v(" 或 "),a("strong",[t._v("方法")]),t._v(" 对各种类型的对象进行操作，同时提供了编译时类型的安全性。它为集合框架增加了编译时类型的安全性，并消除了繁重的工作。")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/simple.html"}},[t._v("定义简单泛型")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/subtype.html"}},[t._v("泛型和子类型化")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/wildcards.html"}},[t._v("通配符")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/methods.html"}},[t._v("通用方法")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/legacy.html"}},[t._v("与旧版代码互操作")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/fineprint.html"}},[t._v("细节")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/literals.html"}},[t._v("Class 类作为运行时类型令牌")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/morefun.html"}},[t._v("通配符带来更多乐趣")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/extra/generics/convert.html"}},[t._v("将旧版代码转换为使用泛型")])],1)])]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("泛型允许您抽象类型。最常见的示例是容器类型。例如集合中的那些类型。下面这个是个典型的用法")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v(" myIntList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nmyIntList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" myIntList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3  ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("第三行的类型转换有点烦人，通常，程序员知道将哪类数据放入特定列表中。编译器只能保证迭代器将返回 Object。为了确保对类型为 Integer 的变量的分配类型是安全的，需要强制转换。")]),t._v(" "),a("p",[t._v("转换带来了混乱，它还引入了运行时错误的可能性，因为程序员可能记错了取出的数据类型。")]),t._v(" "),a("p",[t._v("如果程序员可以实际表达自己的意图，并 "),a("strong",[t._v("将列表标记为包含特定数据类型")]),t._v("，该怎么办？这是泛型背后的 "),a("strong",[t._v("核心思想")]),t._v("。下面代码是对上面一段无泛型代码给出的泛型版本")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    myIntList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1'")]),t._v("\nmyIntList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myIntList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("注意 myIntList 的声明类型，"),a("code",[t._v("List <Integer>")]),t._v(" 这样的声明我称之为 "),a("strong",[t._v("带有类型参数的")]),t._v(" 通用接口。在创建列表对象的时候，还指定一个类型参数。")]),t._v(" "),a("p",[t._v("还需要注意的是：第 3 行行的强制转换已消失。")]),t._v(" "),a("p",[t._v("现在，你可能认为我们只是将转换转移了，从第三行转移到了第一行中，其实不是，这里有很大的不同。编译器现在可以在 "),a("strong",[t._v("编译时检查程序的类型")]),t._v(" 是否正确。 当声明  "),a("code",[t._v("myIntList = new LinkedList<Integer>()")]),t._v(" 时，它告诉了我们 myIntList 的信息，该变量无论何时使用都只能添加进 integer 类型的数据，这个编译器对此进行保证。相反的是，如果是强制转换，那么程序员需要在使用到的地方都去做强制转换。")]),t._v(" "),a("p",[t._v("最终效果是提高 "),a("strong",[t._v("可读性")]),t._v(" 和 "),a("strong",[t._v("健壮性")]),t._v("，尤其是在大型程序中。")])])}),[],!1,null,null,null);s.default=e.exports}}]);