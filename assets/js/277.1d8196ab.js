(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{635:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"编写最终类和方法-final"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写最终类和方法-final"}},[s._v("#")]),s._v(" 编写最终类和方法 - final")]),s._v(" "),t("p",[s._v("你可以声明一些或所有类的方法是 "),t("strong",[s._v("最终")]),s._v(" 的，在方法声明中使用关键字 final 来表示该方法不能被子类覆盖。这个 Object 类是这样做的 - 它的一些方法是 final。")]),s._v(" "),t("p",[s._v("你可能希望做一个最终的方法，如果它有一个不应该被改变的实现，并且这个对象的一致状态是关键的。例如，你可能想让 ChessAlgorithm 这个  类的 getFirstPlayer 方法最终：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChessAlgorithm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChessPlayer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" WHITE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BLACK "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChessPlayer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFirstPlayer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChessPlayer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WHITE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("从构造函数调用的方法通常应该被声明为 final。如果构造函数调用非 final 方法，则子类可能会以令人惊讶的或不希望的结果重新定义该方法。")]),s._v(" "),t("p",[s._v("请注意，你也可以声明一个完整的 final 类。一个声明为 final 的类不能被子类化,例如，在创建像 String 类这样的不可变类时，这是特别有用的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);