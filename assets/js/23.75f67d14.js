(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{314:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("The verification service uses the device fingerprint to detect whether it is a risky device. This document describes how to integrate the device fingerprint plug-in and verification plug-in.")]),t._v(" "),a("h3",{attrs:{id:"add-plug-in-on-the-alipay-open-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-plug-in-on-the-alipay-open-platform"}},[t._v("#")]),t._v(" Add plug-in on the Alipay Open Platform")]),t._v(" "),a("ul",[a("li",[t._v("Login to Alipay Open Platform https://open.alipay.com/develop/manage, select the mini program that needs to integrate the plug-in")]),t._v(" "),a("li",[t._v("Enter the mini program management page, click on the left "),a("strong",[t._v("Development-Plugin Service")]),t._v(" menu")]),t._v(" "),a("li",[t._v("Click "),a("strong",[t._v("Order other plug-ins")]),t._v(" to enter the plug-in market")]),t._v(" "),a("li",[t._v("Search for "),a("strong",[t._v("设备指纹插件")]),t._v(" , select the plug-in and click Order. In the same way, search for "),a("strong",[t._v("小盾智能验证")]),t._v(", select the plugin, and then complete the order")])]),t._v(" "),a("h3",{attrs:{id:"mini-program-code-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mini-program-code-integration"}},[t._v("#")]),t._v(" Mini program code integration")]),t._v(" "),a("h4",{attrs:{id:"_1-declare-plug-ins-in-app-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-declare-plug-ins-in-app-json"}},[t._v("#")]),t._v(" 1. Declare plug-ins in "),a("strong",[t._v("app.json")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tdfp-plugin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021003160688029"')]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tdcaptcha-plugin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021003157639024"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-get-the-blackbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-the-blackbox"}},[t._v("#")]),t._v(" 2. Get the blackbox")]),t._v(" "),a("p",[t._v("Import plug-ins in the page that requires the device fingerprint, such "),a("strong",[t._v("as pages/index/index.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requirePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tdfp-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Then get the blackbox in the "),a("code",[t._v("onLoad")]),t._v(" method, the blackbox only needs to get once:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLoad")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" that "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// partnerCode-Partner identifier, assigned by the TD, appName-Application identifier, assigned by TD")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fmagent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FMAgent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("partnerCode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PRODUCTION"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n    fmagent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("page")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If unionid is empty or undefined, do not encrypt it, pass an empty string")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you have unionid, please pass it with the encrypted form,")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Please pass the encrypted unionid(ensure that the encrypted unionid is one-to-one corresponding to the original unionid).")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("unionid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the blackbox success callback, res is the blackbox string")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can save it to the page data, and pass to the verification API")]),t._v("\n        that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("blackbox")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("fmagent.getInfo API parameter description")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("parameters")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("integrated mode")]),t._v(" "),a("td",[t._v("'plugin'")])]),t._v(" "),a("tr",[a("td",[t._v("page")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("current page object or a component object")]),t._v(" "),a("td",[t._v("that")])]),t._v(" "),a("tr",[a("td",[t._v("unionid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("the encrypted user unionid; you can choose any encryption algorithm, please ensure that the encrypted one-to-one correspondence relationship, we recommend using MD5 or SHA256; if the value is null, please send an empty String")]),t._v(" "),a("td",[t._v("ef54040ea***58fe66157")])]),t._v(" "),a("tr",[a("td",[t._v("timeout")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("API timeout (2500ms by default)")]),t._v(" "),a("td",[t._v("6000")])]),t._v(" "),a("tr",[a("td",[t._v("getcliallowed")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v('if don\'t collect the clipboard data (some mobile phones will give a reminder with "get the data of your clipboard").'),a("strong",[t._v("false")]),t._v(" by default.")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("The callback function, the parameter of the function is the blackbox.")]),t._v(" "),a("td",[t._v("function(res){// res is the blackbox}")])])])]),t._v(" "),a("h4",{attrs:{id:"_3-add-reference-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-reference-components"}},[t._v("#")]),t._v(" 3. Add reference components")]),t._v(" "),a("p",[t._v("Add the tdcaptcha component to the "),a("strong",[t._v(".json")]),t._v(" file that requires the captcha challenge")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tdcaptcha"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin://tdcaptcha-plugin/tdcaptcha"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_4-add-tdcaptcha-dom-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-add-tdcaptcha-dom-element"}},[t._v("#")]),t._v(" 4. Add tdcaptcha dom element")]),t._v(" "),a("p",[t._v("Add the tdcaptcha component node to the "),a("strong",[t._v(".axml")]),t._v(" file that requires the captcha challenge")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tdcaptcha")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("td-captcha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h4",{attrs:{id:"_5-trigger-the-captcha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-trigger-the-captcha"}},[t._v("#")]),t._v(" 5. Trigger the captcha")]),t._v(" "),a("p",[t._v("Trigger the captcha to verify in the "),a("strong",[t._v(".js")]),t._v(" file of the page that requires the captcha challenge")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bind the plugin instance")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("td "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("triggerCaptcha")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invoke the API and trigger the captcha to pop up")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("td"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("captcha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("triggerCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("partnerCode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Partner identifier, assigned by TD")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Application identifier, assigned by TD")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1-production, 0-test environment")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("blackbox")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blackbox "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the blackbox obtained from the fingerprint")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onSuccess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onSuccess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onFail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onFail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onClose")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSuccess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("validateToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The verification is successful")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pass the validateToken to the server for secondary verification")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onFail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// todo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"the-captcha-api-parameter-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-captcha-api-parameter-description"}},[t._v("#")]),t._v(" The Captcha API Parameter Description")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("partnerCode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("partner identifier, assigned by TD")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("appName")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("application identifier, assigned by TD")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("env")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("1: production environment; 0: test environment")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("blackbox")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("the blackbox obtained from the fingerprint")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("maskClose")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("1: the captcha dialog can be closed by clicking the mask layer; 0: can not")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("onSuccess")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("Callback function after verifying success, the callback parameter is"),a("strong",[t._v("validateToken")]),t._v(" which you need to pass to the backend service to recheck.")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("onFail")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("Callback function after verifying failed. The captcha will refresh after verifying failure, and the callback parameter will return 'opFail', which generally does not need further processing. For other errors, such as too many attempts to, request timeout, we suggest giving a toast to the user.")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("onClose")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("Callback function after the captcha closed")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("mfaId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("If you have connected to the MFA product (the parameter can be ignored if the MFA is not connected), please set the "),a("code",[t._v("mfa_id")]),t._v(" which is obtained from the MFA process to the configuration parameter")]),t._v(" "),a("td",[t._v("No")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);