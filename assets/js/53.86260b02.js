(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{342:function(t,a,s){"use strict";s.r(a);var n=s(10),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("验证码依赖设备指纹检测设备环境，本文档描述了设备指纹插件和验证码插件的集成方式")]),t._v(" "),a("h3",{attrs:{id:"小程序管理后台添加插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序管理后台添加插件"}},[t._v("#")]),t._v(" 小程序管理后台添加插件")]),t._v(" "),a("ul",[a("li",[t._v("登录微信公众平台，点击左侧下方 "),a("strong",[t._v("设置")]),t._v(" 菜单")]),t._v(" "),a("li",[t._v("进入设置页面，点击 "),a("strong",[t._v("第三方设置")]),t._v(" 标签页")]),t._v(" "),a("li",[t._v("在 "),a("strong",[t._v("插件管理")]),t._v(" 模块中，点击 "),a("strong",[t._v("添加插件")]),t._v(" 按钮")]),t._v(" "),a("li",[t._v("搜索设备指纹插件 "),a("strong",[t._v("wxfp")]),t._v(" ，选择插件，完成添加。同样方式搜索 "),a("strong",[t._v("同盾智能验证")]),t._v(" 并完成添加。")])]),t._v(" "),a("p",[t._v("由于申请插件后，插件管理者微信第二天才能收到申请提醒。所以申请后，可以直接联系运营，及时通过申请。")]),t._v(" "),a("h3",{attrs:{id:"小程序代码集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序代码集成"}},[t._v("#")]),t._v(" 小程序代码集成")]),t._v(" "),a("h4",{attrs:{id:"_1-小程序-app-json-里声明插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序-app-json-里声明插件"}},[t._v("#")]),t._v(" 1. 小程序 app.json 里声明插件")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tdfp-plugin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.6.7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wxc3b909c3d24c5417"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tdcaptcha-plugin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.4.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wxfd9bc9da56439da8"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-获取设备指纹-blackbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取设备指纹-blackbox"}},[t._v("#")]),t._v(" 2. 获取设备指纹 blackbox")]),t._v(" "),a("p",[t._v("在需要设备指纹的页面，如 "),a("code",[t._v("pages/index/index.js")]),t._v(" 中，引用插件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fpPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requirePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tdfp-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在 "),a("code",[t._v("onLoad")]),t._v(" 函数中获取设备指纹blackbox，只需要获取一次。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLoad")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" that "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// partnerCode-合作方标识，由同盾分配， appName-应用标识，由同盾分配")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fmagent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("fpPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FMAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("partnerCode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PRODUCTION"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  \n    fmagent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("page")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 openid 或者 unionid 为空或者 undefined，请勿加密上传，传空字符串即可")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果您开通了 unionid 功能，请传入加密的用户 unionid，")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请传入加密的用户 openid(需保证加密后的 openid 与原始 openid 是一一对应关系)")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("openid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("unionid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("noClipboard")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不采集剪切板信息")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取blackbox成功回调，res即设备指纹blackbox")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以setData保存到页面，传给验证码API使用")]),t._v("\n        that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("blackbox")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("设备指纹 API 参数说明")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否 必填")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("page")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("当前所在的page对象或component对象")]),t._v(" "),a("td",[t._v("that")])]),t._v(" "),a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("当前对接模式")]),t._v(" "),a("td",[t._v("'plugin'")])]),t._v(" "),a("tr",[a("td",[t._v("openid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[a("strong",[t._v("加密")]),t._v("后的用户openid； 加密算法可以随意选择，请确保加密前后一一对应，建议使用MD5或SHA256； 没有值，请传空字符串")]),t._v(" "),a("td",[t._v("ef54040ea***58fe66157")])]),t._v(" "),a("tr",[a("td",[t._v("unionid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[a("strong",[t._v("加密")]),t._v("后的用户unionid； 加密算法可以随意选择，请确保加密前后一一对应，建议使用MD5或SHA256； 没有值，请传空字符串")]),t._v(" "),a("td",[t._v("ef54040ea***58fe66157")])]),t._v(" "),a("tr",[a("td",[t._v("timeout")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("获取blackbox超时时间，单位毫秒； 默认2500，包括采集和发送请求的总时长，范围：2500-16000")]),t._v(" "),a("td",[t._v("6000")])]),t._v(" "),a("tr",[a("td",[t._v("noClipboard")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("是否不采集剪切板； 采集剪切板可部分增强设备指纹恢复能力，部分手机系统会提示采集了剪切板； 默认true，不采集")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("获取设备指纹blackbox成功回调")]),t._v(" "),a("td",[t._v("function(res){/"),a("em",[t._v("res即blackbox")]),t._v("/}")])])])]),t._v(" "),a("h4",{attrs:{id:"_3-引用-tdcaptcha-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-引用-tdcaptcha-组件"}},[t._v("#")]),t._v(" 3. 引用 tdcaptcha 组件")]),t._v(" "),a("p",[t._v("在需要验证码页面的 .json 文件中引用 tdcaptcha 组件")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tdcaptcha"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin://tdcaptcha-plugin/tdcaptcha"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_4-添加-tdcaptcha-组件节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加-tdcaptcha-组件节点"}},[t._v("#")]),t._v(" 4. 添加 tdcaptcha 组件节点")]),t._v(" "),a("p",[t._v("在需要验证码页面的 .wxml 文件中添加 tdcaptcha 组件")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tdcaptcha")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("td-captcha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h4",{attrs:{id:"_5-触发验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-触发验证"}},[t._v("#")]),t._v(" 5. 触发验证")]),t._v(" "),a("p",[t._v("在需要验证码页面的 .js 文件中触发验证码")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("triggerCaptcha")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取验证码插件实例，#id与wxml文件中组件节点id一致")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" td "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#td-captcha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用API，触发验证码弹出")]),t._v("\n    td"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("captcha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("triggerCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("partnerCode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合作方标识，由同盾分配")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用标识，由同盾分配")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1-线上环境 0-测试环境")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("blackbox")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blackbox "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设备指纹blackbox")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onSuccess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onSuccess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义验证成功回调")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onFail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onFail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义验证失败回调，非必填")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSuccess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("validateToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 验证通过")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将validateToken传递至服务端二次校验")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onFail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// todo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"验证码-api-参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证码-api-参数说明"}},[t._v("#")]),t._v(" 验证码 API 参数说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否 必填")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("partnerCode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("同盾合作方标识")])]),t._v(" "),a("tr",[a("td",[t._v("appName")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("同盾合作方应用标识")])]),t._v(" "),a("tr",[a("td",[t._v("env")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("1：线上生产环境  0：测试环境")])]),t._v(" "),a("tr",[a("td",[t._v("blackbox")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("设备指纹插件获取到的blackbox")])]),t._v(" "),a("tr",[a("td",[t._v("maskClose")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("点击蒙层是否关闭验证码 0：否  1：是")])]),t._v(" "),a("tr",[a("td",[t._v("onSuccess")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("验证成功的回调函数，回调函数会把validateToken传递过来")])]),t._v(" "),a("tr",[a("td",[t._v("onFail")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("验证失败的回调函数； 验证失败会返回新的验证码，此时onFail回传msg为 'opFail'，一般不需要另行处理")])]),t._v(" "),a("tr",[a("td",[t._v("onClose")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("验证码弹窗关闭的回调函数，可根据需要自定义")])]),t._v(" "),a("tr",[a("td",[t._v("mfaId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("如果您已对接MFA产品，请将MFA流程中接口获取的mfa_id赋值给验证码配置参数, 未对接可以忽略")])])])]),t._v(" "),a("h3",{attrs:{id:"备注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[t._v("#")]),t._v(" 备注")]),t._v(" "),a("ol",[a("li",[t._v("插件版本更新后，小程序管理者会收到更新通知，可体验新版插件并更新发布小程序，"),a("strong",[t._v("小程序发布不需要再审核")]),t._v("。")]),t._v(" "),a("li",[t._v("验证码图片使用canvas渲染，模拟器存在层级过高展示异常，请使用 "),a("strong",[t._v("预览模式")]),t._v(" 集成测试。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);