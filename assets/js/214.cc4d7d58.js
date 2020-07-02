(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{736:function(v,_,a){"use strict";a.r(_);var s=a(27),t=Object(s.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"理解扩展类加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解扩展类加载"}},[v._v("#")]),v._v(" 理解扩展类加载")]),v._v(" "),a("p",[v._v("扩展框架利用了 "),a("strong",[v._v("类加载委托机制")]),v._v("。当运行时环境需要为应用程序加载新类时，它将在以下位置按顺序查找该类：")]),v._v(" "),a("ul",[a("li",[a("p",[a("strong",[v._v("Bootstrap")]),v._v(" ：rt.jar、i18n.jar 或则其他")])]),v._v(" "),a("li",[a("p",[v._v("已安装的扩展：")]),v._v(" "),a("p",[a("code",[v._v("jre/lib/ext")]),v._v("、系统范围的特定路径，如 Linux 的 "),a("code",[v._v("/usr/java/packages/lib/ext")]),v._v(" （JDK6+）")])]),v._v(" "),a("li",[a("p",[v._v("classpath：类路径")]),v._v(" "),a("p",[v._v("在 "),a("code",[v._v("system property")]),v._v(" 中属性名为 "),a("code",[v._v("java.class.path")]),v._v(" 路径中的：类、包括 JAR 中的类。")]),v._v(" "),a("p",[v._v("如果类路径中的 jar 清单中还有 "),a("code",[v._v("Class-Path")]),v._v(" 属性，那么还将继续搜索该属性指向的的 jar。")]),v._v(" "),a("p",[v._v("默认情况下，该 "),a("code",[v._v("java.class.path")]),v._v(" 属性的值为"),a("code",[v._v(".")]),v._v("当前目录。您可以使用 "),a("code",[v._v("-classpath")]),v._v(" 或 "),a("code",[v._v("-cp")]),v._v(" 命令行选项或设置 "),a("code",[v._v("CLASSPATH")]),v._v(" 环境变量来更改值。命令行选项将覆盖 "),a("code",[v._v("CLASSPATH")]),v._v(" 环境变量的设置。")])])]),v._v(" "),a("p",[v._v("例如：上面是一个优先级列表，你需要的类，没有在前一个中查找到时，才会去后面的项中找。")]),v._v(" "),a("p",[v._v("除非你处于特殊目的实例化了 "),a("strong",[v._v("你自己的类加载器")]),v._v("，否则除了记住上面的 "),a("strong",[v._v("优先级列表")]),v._v("之外，不需要了解太多。")]),v._v(" "),a("p",[v._v("你应该注意可能存在的任何 "),a("strong",[v._v("类名冲突")]),v._v("，例如：你的 classpath 中有一个 "),a("code",[v._v("xx.A")]),v._v(" 类，在运行时从已安装的扩展中也找到了一个 "),a("code",[v._v("xx.A")]),v._v(" 类，由于优先级列表的因素，可能就与你期望的结果不一样。")]),v._v(" "),a("h2",{attrs:{id:"java-类加载机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-类加载机制"}},[v._v("#")]),v._v(" Java 类加载机制")]),v._v(" "),a("p",[v._v("Java 平台使用 "),a("strong",[v._v("委派模型")]),v._v(" 加载类。基本思想是：每个类加载程序都有一个**「父」类加载程序**。加载类时，类加载程序首先将搜索该类 「委派」到其父类加载程序，然后再尝试查找类本身。")]),v._v(" "),a("p",[v._v("以下是类加载 API 的一些要点：")]),v._v(" "),a("ul",[a("li",[v._v("实例化新的类加载器时，可以使用 "),a("code",[v._v("java.lang.ClassLoader")]),v._v(" 及其子类中的构造函数指定父级。如果您未明确指定父级，则会将虚拟机的系统类加载器（ system class loader）指定为默认父级。")]),v._v(" "),a("li",[v._v("ClassLoader 中的 loadClass 方法被调用，加载类时按顺序执行这些任务：\n"),a("ol",[a("li",[v._v("如果已经加载了一个类，它将返回它。")]),v._v(" "),a("li",[v._v("否则，它将对新类的搜索委托给父类加载器。")]),v._v(" "),a("li",[v._v("如果果父类加载器找不到该类，则 "),a("code",[v._v("loadClass")]),v._v(" 调用 "),a("code",[v._v("findClass")]),v._v(" 方法查找并加载该类。")])])]),v._v(" "),a("li",[v._v("如果父类加载器未找到该类，则 "),a("code",[v._v("ClassLoader")]),v._v(" 的 "),a("code",[v._v("findClass")]),v._v(" 方法将在当前类加载器中搜索该类。当您在应用程序中实例化类加载器子类时，您可能想覆盖此方法。")]),v._v(" "),a("li",[a("code",[v._v("java.net.URLClassLoader")]),v._v(" 类用作扩展和其他 JAR 文件的基本类加载器，它重写"),a("code",[v._v("java.lang.ClassLoader")]),v._v(" 的 "),a("code",[v._v("findClass")]),v._v(" 方法以在一个或多个指定的 URL 中搜索类和资源。")])]),v._v(" "),a("p",[v._v("有关 JAR 相关的 API ，可参考部署中 "),a("RouterLink",{attrs:{to:"/deployment/jar/apiindex.html"}},[v._v("使用 JAR 相关的 API 章节")])],1),v._v(" "),a("h2",{attrs:{id:"类加载和-java-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类加载和-java-命令"}},[v._v("#")]),v._v(" 类加载和 Java 命令")]),v._v(" "),a("p",[v._v("Java 平台的类加载机制反映在 "),a("code",[v._v("java")]),v._v(" 命令中。")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("--classpath")]),v._v("： 该选项是设置 "),a("code",[v._v("java.class.path")]),v._v(" 属性的便捷方法")]),v._v(" "),a("li",[a("code",[v._v("-cp")]),v._v("： 与  "),a("code",[v._v("--classpath")]),v._v(" 是相同的作用")]),v._v(" "),a("li",[a("code",[v._v("-jar")]),v._v("：该选项，运行打包在 JAR 文件中的应用程序。详细的可以参考 "),a("RouterLink",{attrs:{to:"/deployment/jar/run.html"}},[v._v("运行 Jar 文件")])],1)])])}),[],!1,null,null,null);_.default=t.exports}}]);