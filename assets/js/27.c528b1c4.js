(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{315:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"client-side-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-side-integration"}},[t._v("#")]),t._v(" Client-side integration")]),t._v(" "),a("p",[t._v("Insert the javascript below to the head tag of your key page, such as Sign-in, Sign-up, Find-password, and other pages that require a captcha challenge:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     _fmOpt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("partner")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pc_xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'an_xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bind'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bind type")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#captcha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target dom for the trigger button")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("initialTime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    fm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/javascript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Base URL'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?t='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Base URL")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Region")]),t._v(" "),a("th",[t._v("Base URL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("China")]),t._v(" "),a("td",[t._v("https://static.tongdun.net/captcha/main/tdc.js")])]),t._v(" "),a("tr",[a("td",[t._v("North America")]),t._v(" "),a("td",[t._v("https://static.tongdun.net/us/captcha/main/tdc.js")])]),t._v(" "),a("tr",[a("td",[t._v("Singapore")]),t._v(" "),a("td",[t._v("https://static.tongdun.net/sg/captcha/main/tdc.js")])]),t._v(" "),a("tr",[a("td",[t._v("Germany")]),t._v(" "),a("td",[t._v("https://static.tongdun.net/fra/captcha/main/tdc.js")])])])]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" If you have embedded the fingerprint of TD, please remove the relevant code first.")]),t._v(" "),a("h2",{attrs:{id:"configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[t._v("#")]),t._v(" Configurations")]),t._v(" "),a("p",[t._v("You can make your configuration by the "),a("strong",[t._v("_fmOpt")]),t._v(" object of the integration above. The common configuration of the parameters have been given in the sample code, but you can also make further configuration following the parameter descriptions below.")]),t._v(" "),a("h3",{attrs:{id:"action-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-mode"}},[t._v("#")]),t._v(" Action Mode")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Action mode")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("bind type")]),t._v(" "),a("td",[t._v("the trigger event will be bound to the button dom that you specified, such as sign-in, sign-up, and other buttons.")])]),t._v(" "),a("tr",[a("td",[t._v("trigger type")]),t._v(" "),a("td",[t._v("there will render a button named "),a("code",[t._v("Click to verify")]),t._v(" automatically")])])])]),t._v(" "),a("h3",{attrs:{id:"parameters-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-list"}},[t._v("#")]),t._v(" Parameters List")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Parameter")])]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("partner")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("partner code, assigned by TD")])]),t._v(" "),a("tr",[a("td",[t._v("appName")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("application id, assigned by TD")])]),t._v(" "),a("tr",[a("td",[t._v("display")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("display mode, optional value: popup/float/custom/bind. detail explanation: "),a("strong",[t._v("popup")]),t._v(": the captcha dialog will be displayed in the middle of the screen and filled with a mask outside it. Users can close the captcha dialog by clicking the mask. "),a("strong",[t._v("float")]),t._v(": the captcha dialog will be rendered above the specified button. "),a("strong",[t._v("custom")]),t._v(": the captcha dialog will be rendered in the "),a("strong",[t._v("area")]),t._v(" dom that you specified. "),a("strong",[t._v("bind")]),t._v(": the captcha dialog will be displayed in the middle of the screen also, corresponding to the bind action mode.")])]),t._v(" "),a("tr",[a("td",[t._v("container")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("dom selector. For bind action mode, it is used to specify the dom of the button which will trigger the captcha event. For trigger action mode, it is used to specify the dom where the button will render automatically.")])]),t._v(" "),a("tr",[a("td",[t._v("area")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("dom selector. Only for custom display mode. It is used to specify where the captcha dialog will render.")])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("the width of the button that is rendered automatically for the trigger action mode. Default: 300px, min: 200px")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("the height of the button that is rendered automatically for the trigger action mode. Default: 40px, min: 30px")])]),t._v(" "),a("tr",[a("td",[t._v("lang")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Language configuration, optional value:"),a("strong",[t._v("zh-cn")]),t._v("(Chinese simplified),"),a("strong",[t._v("zh-han")]),t._v("(Chinese Traditional),"),a("strong",[t._v("en")]),t._v("(English), "),a("strong",[t._v("ja")]),t._v("(Japanese),"),a("strong",[t._v("ko")]),t._v("(Korean), "),a("strong",[t._v("ba")]),t._v("(Malay), "),a("strong",[t._v("tha")]),t._v("(Thai), "),a("strong",[t._v("idn")]),t._v("(Indonesian), "),a("strong",[t._v("rus")]),t._v("(Russian). Default: "),a("strong",[t._v("zh-cn")]),t._v("(Chinese simplified)")])]),t._v(" "),a("tr",[a("td",[t._v("bindSucNoFed")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Only for bind display mode. If false, it will give a successful "),a("code",[t._v("toast")]),t._v(" after verifying successfully. if true, no "),a("code",[t._v("toast")]),t._v(" will show. Default: false.")])]),t._v(" "),a("tr",[a("td",[t._v("env")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[a("strong",[t._v("0")]),t._v(": test environment, "),a("strong",[t._v("1")]),t._v(": production environment. Default: "),a("strong",[t._v("1")])])]),t._v(" "),a("tr",[a("td",[t._v("closeIcon")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[a("strong",[t._v("0")]),t._v(": show close icon, "),a("strong",[t._v("1")]),t._v(": hide close icon. Default: "),a("strong",[t._v("0")])])]),t._v(" "),a("tr",[a("td",[t._v("closeMask")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("when the user triggers a click event on the mask outside the captcha dialog, "),a("strong",[t._v("0")]),t._v(": hide the captcha dialog, "),a("strong",[t._v("1")]),t._v(": cannot hide the captcha dialog. Default: "),a("strong",[t._v("0")])])]),t._v(" "),a("tr",[a("td",[t._v("mfaId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("If you have connected to the MFA product (the parameter can be ignored if the MFA is not connected), please set the "),a("code",[t._v("mfa_id")]),t._v(" which is obtained from the MFA process to the configuration parameter "),a("code",[t._v("_fmOpt")]),t._v(". Example: _fmOpt.mfaId = res.data.mfa_id;")])])])]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("p",[a("strong",[t._v("The following callback methods can be defined on the _fmOpt object as needed:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("beforeValidate:")]),t._v(" if you have defined this method, it will be invoked before triggering the captcha. If the method returns "),a("strong",[t._v("true")]),t._v(", the captcha logic will continue. "),a("strong",[t._v("false")]),t._v(" the captcha logic will stop. For example:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The following code makes a simple judgment: when the username input box or password input box gets null values, it will be returned false, and the captcha logic will not be triggered in this case.")]),t._v("\n_fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeValidate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username or password error.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("onReady:")]),t._v(" the captcha logic is ready at this time. If you have a "),a("strong",[t._v("loading")]),t._v(" before triggering the captcha event, you can remove it at this point.")]),t._v(" "),a("li",[a("strong",[t._v("onClose:")]),t._v(" It will be invoked after the captcha dialog is closed.")]),t._v(" "),a("li",[a("strong",[t._v("onSuccess(validateToken):")]),t._v(" It will be invoked after the verification succeed. For example:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("_fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSuccess")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("validateToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo, an ajax request")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/submit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("account")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'***'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'***'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("token")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" validateToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after verifying successfully, you need to invoke the API interface on your backend service to recheck the verification.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("blackBox")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" _fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get the blackbox")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("onFail(msg):")]),t._v(" It will be invoked after the verification failed, callback parameters description：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("msg(String)")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("opFail")]),t._v(" "),a("td",[t._v("verification failed")])]),t._v(" "),a("tr",[a("td",[t._v("op2much")]),t._v(" "),a("td",[t._v("verification too much")])]),t._v(" "),a("tr",[a("td",[t._v("noNetwork")]),t._v(" "),a("td",[t._v("timeout or no network")])]),t._v(" "),a("tr",[a("td",[t._v("limit")]),t._v(" "),a("td",[t._v("request limit （503）")])])])]),t._v(" "),a("p",[a("strong",[t._v("The following methods can be invoked as needed:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("triggerCaptcha:")]),t._v(" If you want to trigger the captcha to challenge by yourself:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("_fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("triggerCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It is used to trigger captcha initiatively")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("reset")]),t._v("： reset the captcha to the initial state. This usually occurs when the user has passed the verification of the captcha, but the username or password is incorrect. In this case, you need to trigger the captcha again. For example:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo, ajax request")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/submit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'***'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'***'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("token")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" validateToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("blackBox")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" _fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get the blackbox")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// service checked failed")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reset the captcha, the user needs to trigger the captcha again")]),t._v("\n        _fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("newCaptcha:")]),t._v(" When a page needs to display multiple captchas, you can call this method to initialize a new captcha object. At this time, you need to pass in the specific parameters of the new verification. For example:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" secondCaptchaObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'popup'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#area'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" secondCaptcha "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secondCaptchaObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsecondCaptcha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSuccess")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("validateToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'second captcha verification succeed: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" validateToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// todo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("p",[t._v("Q: CSS style problem (such as a captcha image broken, layout disordered...)?")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** If the global style is set with important, the priority level is higher than the captcha style, which will cause the style to be overwritten. For example(not recommended) **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Q: For the "),a("strong",[t._v("bind")]),t._v(" display mode, no response with clicking the trigger button?")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". Please confirm whether the JS-SDK of TD Captcha has loaded correctly.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". Please confirm Whether the bound button element exists when the JS-SDK is initialized. If the element is not rendered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the trigger event will not be bound to the button.\n")])])]),a("p",[t._v("Q: The callback method was not invoked after verifying succeed or failed？")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("onSuccess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onFail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and other callback methods need to be bound to the _fmOpt object when the JS-SDK is initialized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" otherwise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the callback method cannot be found and cannot be triggered\n")])])]),a("p",[t._v("Q: The callback method is not invoked for the captcha object created by the "),a("strong",[t._v("_fmOpt.newCaptcha")]),t._v(" method ?")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" secondCaptcha "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _fmOpt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secondCaptchaObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsecondCaptcha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSuccess")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("validateToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the callback methods should be bound to the new secondCaptcha, and cannot be bound to _fmOpt object")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);