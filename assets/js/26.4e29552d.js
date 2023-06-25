(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{313:function(e,t,a){"use strict";a.r(t);var r=a(10),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"integrated-requirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrated-requirement"}},[e._v("#")]),e._v(" Integrated Requirement")]),e._v(" "),t("h2",{attrs:{id:"compliance-explanation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compliance-explanation"}},[e._v("#")]),e._v(" Compliance Explanation")]),e._v(" "),t("p",[e._v("Please note that when integrating SDK products provided by the TrustDecision in the APP of your company:")]),e._v(" "),t("p",[e._v("1.1 According to the user's information protection regulations, before your users start the App for the first time and start collecting information, your company should fully inform the user of the purpose, method, and scope of collecting, using, and sharing the user's personal information with a third party through an interactive interface or design (such as a pop-up window of the privacy policy), and obtain the express consent of the end user.")]),e._v(" "),t("p",[e._v("1.2 To provide business security and risk control services to your company, the TrustDecision SDK will collect, process, and use the identification information（IMEI/IDFA）, AndroidID, IMSI, MEID, MAC address, SIM card serial number, device type, device model, system type, geographical location, login IP address, application list, running process, sensor information(light sensor, gravity sensor, magnetic field sensor, acceleration sensor, gyroscope sensor) and other device information of the user's device. To ensure compliance with your use of related services, the aforementioned privacy policy should cover the authorization of TrustDecision SDK to provide services and collect, process, and use relevant information. The following terms are for your reference. The specific expression can be determined by your company according to the overall framework and content of your privacy agreement:")]),e._v(" "),t("table",{attrs:{border:"1"}},[t("tr",[t("td",{staticStyle:{"background-color":"#FAFAFA"}},[t("font",{attrs:{size:"2"}},[e._v("TrustDecision SDK: For business security and risk control, our company uses the TrustDecision SDK. The SDK needs to obtain the information of your devices, such as （IMEI/IDFA）, AndroidID, IMSI, MAC address, SIM card serial number, device type, device model, system type, geographic location, login IP address, application list, running process, sensor information(light sensor, gravity sensor, magnetic field sensor, acceleration sensor, gyroscope sensor) and other related device information, for fraud risk identification.")])],1)])]),e._v(" "),t("p",[t("strong",[e._v("Privacy Protocol:")]),e._v(" https://www.trustdecision.com/legal/privacy-policy")]),e._v(" "),t("h2",{attrs:{id:"environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Items")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Supported System Versions")]),e._v(" "),t("td",[e._v("iOS9.0+")])]),e._v(" "),t("tr",[t("td",[e._v("Supporting architecture")]),e._v(" "),t("td",[e._v("armv7, arm64, x86_64")])])])]),e._v(" "),t("h1",{attrs:{id:"integrate-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrate-steps"}},[e._v("#")]),e._v(" Integrate Steps")]),e._v(" "),t("h2",{attrs:{id:"cocoapods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cocoapods"}},[e._v("#")]),e._v(" CocoaPods")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("code",[e._v("pod 'TrustDecisionPro', '4.2.4.2'")]),e._v(" in the corresponding target in the Podfile")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("pod 'TrustDecisionCaptcha', '2.1.8'")]),e._v(" in the corresponding target in the Podfile")]),e._v(" "),t("li",[e._v("Execute the "),t("code",[e._v("pod install --repo-update")]),e._v(" command in the folder where the Podfile is located. (M1 series mac computers need to execute "),t("code",[e._v("arch -x86_64 pod install --repo-update")]),e._v(" command)")])]),e._v(" "),t("h2",{attrs:{id:"sdk-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sdk-structure"}},[e._v("#")]),e._v(" SDK Structure")]),e._v(" "),t("p",[e._v("files in Pods/TrustDecisionPro directory:")]),e._v(" "),t("ul",[t("li",[e._v("TDMobRisk.framework（TrustDecision SDK, is a static library type）")]),e._v(" "),t("li",[e._v("TDCorePlugin.framework （TrustDecision plugin, is an Embed dynamic library type）")])]),e._v(" "),t("p",[e._v("files in Pods/TrustDecisionCaptcha directory:")]),e._v(" "),t("ul",[t("li",[e._v("libTDCaptcha.a（Mob-Risk SDK captcha component library, is a static library type）")]),e._v(" "),t("li",[e._v("TDCaptchaResource.bundle (Mob-Risk SDK captcha component Required resource package)")])]),e._v(" "),t("h2",{attrs:{id:"import-header-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-header-file"}},[e._v("#")]),e._v(" Import Header File")]),e._v(" "),t("p",[e._v("Please import the header file if you want to call SDK API.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#import <TDMobRisk/TDMobRisk.h>\n")])])]),t("h2",{attrs:{id:"initialization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[e._v("#")]),e._v(" Initialization")]),e._v(" "),t("p",[t("strong",[e._v("Precautions")])]),e._v(" "),t("p",[e._v("When the installation starts for the first time, the SDK initialization is performed after the user agrees with the privacy agreement.")]),e._v(" "),t("p",[e._v("Avoid SDK initialization collection without the user agreeing to the privacy agreement, causing compliance risk accidents.")]),e._v(" "),t("h3",{attrs:{id:"interface-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-definition"}},[e._v("#")]),e._v(" Interface Definition")]),e._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("initWithOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("NSDictionary "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[t("strong",[e._v("Sample Code")])]),e._v(" "),t("div",{staticClass:"language-objective extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('- (void)initTrustDecisionSDK:(void (^)(NSString *blackbox))callback {\n\n  // Get riskManager\n  TDMobRiskManager_t *riskManager = [TDMobRiskManager sharedManager];\n  // Initialization Configuration\n  NSMutableDictionary *options = [NSMutableDictionary dictionary];\n\n/*************************** Mandatory Parameter ***************************/\n  //Partner code, Refer to `Required Configuration`\n  [options setValue:@"[Your partner]" forKey:@"partner"];\n  //App key, Refer to `Required Configuration`\n  [options setValue:@"[Your appKey]" forKey:@"appKey"];\n  //App name, Refer to `Required Configuration`\n  [options setValue:@"[Your appName]" forKey:@"appName"];\n  //Country code, Refer to `Required Configuration`\n  [options setValue:@"[Your country code]" forKey:@"country"];\n\n  /*************************** Optional Parameter ***************************/\n#ifdef DEBUG\n  // !!! If not set this parameter in DEBUG mode, the app will terminate\n  [options setValue:@"allowed" forKey:@"allowed"];\n#endif\n\n\n  [options setValue:^(NSString *blackbox) {\n    // The callback here is in the sub thread\n    // Under normal network conditions, the results will be returned within 200-300ms.\n    // If the network is abnormal, it will return after the timeout timeLimit (default: 15s).\n    // Please add your processing logic for blackbox below\n    if (callback) {\n        callback(blackbox);\n    }\n  } forKey:@"callback"];\n  riskManager->initWithOptions(options);\n}\n')])])]),t("p",[t("strong",[e._v("Required Configuration")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Key")]),e._v(" "),t("th",[e._v("Definition")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Scene")]),e._v(" "),t("th",[e._v("Sample code")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("partner")]),e._v(" "),t("td",[e._v("Partner code")]),e._v(" "),t("td",[e._v("Partner, please contact TrustDecision to obtain")]),e._v(" "),t("td",[e._v("All Scenes")]),e._v(" "),t("td",[t("strong",[e._v("Objective C")]),e._v(' [options setValue:@"[Your partner]" forKey:@"partner"]; '),t("strong",[e._v("Swift")]),e._v(' options.updateValue("[Your partner]" as NSObject, forKey: "partner")')])]),e._v(" "),t("tr",[t("td",[e._v("appKey")]),e._v(" "),t("td",[e._v("App key")]),e._v(" "),t("td",[e._v("Appkey, please offer your App bundleId for TrustDecision to obtain appkey creation requires the user to provide the application bundleId. ⚠️ Different values for bundleId are used for different applications")]),e._v(" "),t("td",[e._v("All Scenes")]),e._v(" "),t("td",[t("strong",[e._v("Objective C")]),e._v(' [options setValue:@"[Your appKey]" forKey:@"appKey"]; '),t("strong",[e._v("Swift")]),e._v(' options.updateValue("[Your appKey]" as NSObject, forKey: "appKey")')])]),e._v(" "),t("tr",[t("td",[e._v("appName")]),e._v(" "),t("td",[e._v("App name")]),e._v(" "),t("td",[e._v("AppName, please contact TrustDecision to obtain")]),e._v(" "),t("td",[e._v("All Scenes")]),e._v(" "),t("td",[t("strong",[e._v("Objective C")]),e._v(' [options setValue:@"[Your appName]" forKey:@"appName"]; '),t("strong",[e._v("Swift")]),e._v(' options.updateValue("[Your appName]" as NSObject, forKey: "appName")')])]),e._v(" "),t("tr",[t("td",[e._v("country")]),e._v(" "),t("td",[e._v("Country code")]),e._v(" "),t("td",[e._v("Country/region parameters, such as cn sg us fra")]),e._v(" "),t("td",[e._v("Fill in the corresponding parameters according to country and region of business. cn means China, sg means Singapore, us means North America, fra means Europe")]),e._v(" "),t("td",[t("strong",[e._v("Objective C")]),e._v(' [options setValue:@"[Your country code]" forKey:@"country"]; '),t("strong",[e._v("Swift")]),e._v(' options.updateValue("[Your country code]" as NSObject, forKey: "country")')])])])]),e._v(" "),t("h2",{attrs:{id:"get-sdk-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-sdk-version"}},[e._v("#")]),e._v(" Get SDK Version")]),e._v(" "),t("p",[t("strong",[e._v("Sample Code")])]),e._v(" "),t("div",{staticClass:"language-objective extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Get SDK Version\nTDMobRiskManager_t *riskManager = [TDMobRiskManager sharedManager];\nNSString *sdkVersion = riskManager->getSDKVersion();\n")])])]),t("h1",{attrs:{id:"captcha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#captcha"}},[e._v("#")]),e._v(" Captcha")]),e._v(" "),t("h2",{attrs:{id:"initwithoptions-optional-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initwithoptions-optional-parameters"}},[e._v("#")]),e._v(" initWithOptions Optional Parameters")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Key")]),e._v(" "),t("th",[e._v("Definition")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Scene")]),e._v(" "),t("th",[e._v("Sample code")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("language")]),e._v(" "),t("td",[e._v("language type")]),e._v(" "),t("td",[t("strong",[e._v("Options:")]),e._v(" 1-Simplified Chinese, 2-Traditional Chinese, 3-English, 4-Japanese, 5-Korean, 6-Malay, 7-Thai, 8-Indonesian, 9-Russian "),t("strong",[e._v("Default:")]),e._v(" 1-Simplified Chinese")]),e._v(" "),t("td",[e._v("You can set the language type according to your needs, Chinese mainland support 1-5, overseas support 1-9")]),e._v(" "),t("td",[e._v('[options setValue:@"1" forKey:@"language"];')])]),e._v(" "),t("tr",[t("td",[e._v("tapToClose")]),e._v(" "),t("td",[e._v("Click on the blank space to close the Captcha window")]),e._v(" "),t("td",[t("strong",[e._v("Optional:")]),e._v(" true, false "),t("strong",[e._v("Default:")]),e._v(" false")]),e._v(" "),t("td",[e._v("After opening, click on the blank area of the interface to close the Captcha window, which is more convenient to close the pop-up window")]),e._v(" "),t("td",[e._v('[options setValue:@(true) forKey:@"tapToClose"];')])]),e._v(" "),t("tr",[t("td",[e._v("needSeqid")]),e._v(" "),t("td",[e._v("Whether to carry the seqid in the failure callback message")]),e._v(" "),t("td",[t("strong",[e._v("Optional:")]),e._v(" true, false "),t("strong",[e._v("Default:")]),e._v(" true")]),e._v(" "),t("td",[e._v("When enabled, the seqid serial number will be carried in the failure message, provide TrustDecision with seqId to facilitate troubleshooting")]),e._v(" "),t("td",[e._v('[options setValue:@(true) forKey:@"needSeqid"];')])]),e._v(" "),t("tr",[t("td",[e._v("hideLoadHud")]),e._v(" "),t("td",[e._v("Whether to skip the loading animation")]),e._v(" "),t("td",[t("strong",[e._v("Options:")]),e._v(" true, false "),t("strong",[e._v("Default:")]),e._v(" false")]),e._v(" "),t("td",[e._v("When enabled, the loading animation will not be displayed when the Captcha window pops up, shortening the verification time")]),e._v(" "),t("td",[e._v('[options setValue 😡(true) forKey:@"hideLoadHud"];')])]),e._v(" "),t("tr",[t("td",[e._v("hideWebCloseButton")]),e._v(" "),t("td",[e._v("Whether to hide the close button of the webview")]),e._v(" "),t("td",[t("strong",[e._v("Options:")]),e._v(" true, false "),t("strong",[e._v("Default:")]),e._v(" false")]),e._v(" "),t("td",[e._v("Scenarios that need to be forced to complete the Captcha")]),e._v(" "),t("td",[e._v('[options setValue:@(true) forKey:@"hideWebCloseButton "];')])]),e._v(" "),t("tr",[t("td",[e._v("openLog")]),e._v(" "),t("td",[e._v("Whether to open the log")]),e._v(" "),t("td",[t("strong",[e._v("Options:")]),e._v(" true, false "),t("strong",[e._v("Default:")]),e._v(" false")]),e._v(" "),t("td",[e._v("When enabled, the console will output more log information during debugging, which is convenient for troubleshooting")]),e._v(" "),t("td",[e._v('[options setValue:@( true) forKey:@"openLog"];')])]),e._v(" "),t("tr",[t("td",[e._v("skipCaptcha")]),e._v(" "),t("td",[e._v("Whether to skip the TrustDecision Captcha verification")]),e._v(" "),t("td",[t("strong",[e._v("Options:")]),e._v(" true, false "),t("strong",[e._v("Default:")]),e._v(" false")]),e._v(" "),t("td",[e._v("When enabled, the Captcha will not be verified, and a 4000 error code will be returned at the same time, which is used for dynamic settings Whether to use TrustDecision Captcha SDK verification")]),e._v(" "),t("td",[e._v('[options setValue:@(true) forKey:@"skipCaptcha"];')])]),e._v(" "),t("tr",[t("td",[e._v("mfaId")]),e._v(" "),t("td",[e._v("MFA ID")]),e._v(" "),t("td",[t("strong",[e._v("Optional:")]),e._v(" string "),t("strong",[e._v("Default:")]),e._v(" nil")]),e._v(" "),t("td",[e._v("If you have connected to the MFA product (the description can be ignored if the MFA is not connected), please set the mfa_id which is obtained from the MFA process to the configuration parameter.")]),e._v(" "),t("td",[e._v('[options setValue:@"mfaId string" forKey:@"mfaId"];')])])])]),e._v(" "),t("h2",{attrs:{id:"popup-captcha-window"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#popup-captcha-window"}},[e._v("#")]),e._v(" Popup Captcha Window")]),e._v(" "),t("p",[t("strong",[e._v("showCaptcha method")])]),e._v(" "),t("p",[e._v("The showCaptcha method is used to display the Captcha window, and its interface is defined as follows")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Display Captcha window\n// @param superView The parent view where the popup is displayed, UIView type\n// @param block result callback block\nvoid (*showCaptcha)(id superView,TongdunShowCaptchaBlock block);\n")])])]),t("p",[t("strong",[e._v("Callback parameter structure TongdunShowCaptchaResultStruct")])]),e._v(" "),t("p",[e._v("We use the TongdunShowCaptchaResultStruct structure to store the result of the callback;")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("typedef enum {\n    // The Captcha is verified successfully, and a valid validateToken can be obtained at this time;\n    TongdunShowCaptchaResultTypeSuccess,\n    // If the Captcha fails, you can get the error code errorCode and errorMsg, and check the cause according to the `Error code` in the document;\n    TongdunShowCaptchaResultTypeFailed,\n    // The Captcha window pop-up is successful, waiting to be verified;\n    TongdunShowCaptchaResultTypeReady,\n} TongdunShowCaptchaResultType;\n\n\ntypedef struct _TongdunShowCaptchaResultStruct{\n    // return result type\n    TongdunShowCaptchaResultType resultType;\n    // After returning successfully, the token of the Captcha returned\n    const char*validateToken;\n    // After the return fails, the returned error code can be checked according to the document\n    NSInteger errorCode;\n    // Return error message after failure\n    const char*errorMsg;\n}TongdunShowCaptchaResultStruct;\n")])])]),t("p",[t("strong",[e._v("Example Code")])]),e._v(" "),t("div",{staticClass:"language-objective extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('- (void)showCaptcha {\n    UIWindow * keyWindow = [UIApplication sharedApplication].keyWindow;\n    TDMobRiskManager_t *riskManager = [TDMobRiskManager sharedManager];\n    riskManager->showCaptcha(keyWindow,^(TongdunShowCaptchaResultStruct resultStruct) {\n        switch (resultStruct. resultType) {\n            case TongdunShowCaptchaResultTypeSuccess:\n            {\n                NSString * validateToken = resultStruct.validateToken;\n                NSLog(@"Obtain TrustDecision Captcha successfully!!!,validateToken:%@",validateToken);\n            }\n                break;\n            case TongdunShowCaptchaResultTypeFailed:\n            {\n                NSString * errorMsg = resultStruct. errorMsg;\n                NSLog(@"Get TrustDecision Captcha failed!!!, errorCode:%ld, errorMsg:%@",resultStruct.errorCode,errorMsg);\n            }\n                break;\n            case TongdunShowCaptchaResultTypeReady:\n                NSLog(@"Captcha window popup is successful, waiting to be verified!!!");\n                break;\n            default:\n                break;\n        }\n    });\n}\n')])])]),t("h2",{attrs:{id:"error-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-code"}},[e._v("#")]),e._v(" Error Code")]),e._v(" "),t("p",[e._v("The error code of the captcha function module will be output through [TDMobRiskManager sharedManager]->showCaptcha method")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Error code")]),e._v(" "),t("th",[e._v("Error message")]),e._v(" "),t("th",[e._v("Processing method")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1001")]),e._v(" "),t("td",[e._v("The Captcha window is closed")]),e._v(" "),t("td",[e._v("After the Captcha window popup, the user manually cancels the Captcha, no processing is required")])]),e._v(" "),t("tr",[t("td",[e._v("2001")]),e._v(" "),t("td",[e._v("The request parameter is abnormal, please check the parameter")]),e._v(" "),t("td",[e._v("Please check the appName and partnerCode parameters")])]),e._v(" "),t("tr",[t("td",[e._v("2100")]),e._v(" "),t("td",[e._v("The request parameter is abnormal, please check the parameter")]),e._v(" "),t("td",[e._v("Please check the passed parameter")])]),e._v(" "),t("tr",[t("td",[e._v("2101")]),e._v(" "),t("td",[e._v("The request parameter is abnormal, please check the parameter")]),e._v(" "),t("td",[e._v("There is an error in the request process, please contact the operator")])]),e._v(" "),t("tr",[t("td",[e._v("2102")]),e._v(" "),t("td",[e._v("The request parameter is abnormal, please check the parameter")]),e._v(" "),t("td",[e._v("The parameter is missing, please check the parameter")])]),e._v(" "),t("tr",[t("td",[e._v("2111")]),e._v(" "),t("td",[e._v("Authentication page network error")]),e._v(" "),t("td",[e._v("Try again later, or please contact the operator")])]),e._v(" "),t("tr",[t("td",[e._v("2112")]),e._v(" "),t("td",[e._v("Verification page operation is too frequent")]),e._v(" "),t("td",[e._v("Try again later")])]),e._v(" "),t("tr",[t("td",[e._v("2113")]),e._v(" "),t("td",[e._v("Unknown error")]),e._v(" "),t("td",[e._v("Unknown error, please contact the operator")])]),e._v(" "),t("tr",[t("td",[e._v("2114")]),e._v(" "),t("td",[e._v("Closed the Captcha window")]),e._v(" "),t("td",[e._v("Clicked the Captcha close button, no need to process")])]),e._v(" "),t("tr",[t("td",[e._v("2115")]),e._v(" "),t("td",[e._v("Authentication page network error")]),e._v(" "),t("td",[e._v("Failed to load network resources")])]),e._v(" "),t("tr",[t("td",[e._v("2116")]),e._v(" "),t("td",[e._v("Authentication page network error")]),e._v(" "),t("td",[e._v("Failed to load network resources")])]),e._v(" "),t("tr",[t("td",[e._v("2202")]),e._v(" "),t("td",[e._v("Verification succeeded")]),e._v(" "),t("td",[e._v("The verification result is successful and no processing is required")])]),e._v(" "),t("tr",[t("td",[e._v("2301")]),e._v(" "),t("td",[e._v("Did not purchase this service")]),e._v(" "),t("td",[e._v("Please contact the operator")])]),e._v(" "),t("tr",[t("td",[e._v("2302")]),e._v(" "),t("td",[e._v("Traffic has been disabled")]),e._v(" "),t("td",[e._v("Please contact the operator")])]),e._v(" "),t("tr",[t("td",[e._v("2303")]),e._v(" "),t("td",[e._v("Insufficient traffic")]),e._v(" "),t("td",[e._v("Please contact the operator")])]),e._v(" "),t("tr",[t("td",[e._v("2304")]),e._v(" "),t("td",[e._v("Service has expired")]),e._v(" "),t("td",[e._v("Please contact the operator")])]),e._v(" "),t("tr",[t("td",[e._v("2305")]),e._v(" "),t("td",[e._v("Daily traffic has been capped")]),e._v(" "),t("td",[e._v("Please contact the operator")])]),e._v(" "),t("tr",[t("td",[e._v("2600")]),e._v(" "),t("td",[e._v("The system is busy, please try again later")]),e._v(" "),t("td",[e._v("The system is busy, please try again later")])]),e._v(" "),t("tr",[t("td",[e._v("2601")]),e._v(" "),t("td",[e._v("Authentication failed, try again later")]),e._v(" "),t("td",[e._v("Authentication failed, please try again later")])]),e._v(" "),t("tr",[t("td",[e._v("2602")]),e._v(" "),t("td",[e._v("Authentication failed, try again later")]),e._v(" "),t("td",[e._v("Authentication failed, please try again later")])]),e._v(" "),t("tr",[t("td",[e._v("2603")]),e._v(" "),t("td",[e._v("Authentication failed, try again later")]),e._v(" "),t("td",[e._v("Authentication failed, please try again later")])]),e._v(" "),t("tr",[t("td",[e._v("2604")]),e._v(" "),t("td",[e._v("Authentication failed, try again later")]),e._v(" "),t("td",[e._v("Refresh frequently, please try again later")])]),e._v(" "),t("tr",[t("td",[e._v("2605")]),e._v(" "),t("td",[e._v("Verification failed, try again later")]),e._v(" "),t("td",[e._v("Failed to obtain Captcha information")])]),e._v(" "),t("tr",[t("td",[e._v("2702")]),e._v(" "),t("td",[e._v("Authentication failed, try again later")]),e._v(" "),t("td",[e._v("Parsing error, please try again later")])]),e._v(" "),t("tr",[t("td",[e._v("3001")]),e._v(" "),t("td",[e._v("SSL certificate verification failed")]),e._v(" "),t("td",[e._v("Please close the network proxy tool")])]),e._v(" "),t("tr",[t("td",[e._v("3002")]),e._v(" "),t("td",[e._v("Error loading verification page")]),e._v(" "),t("td",[e._v("Refresh the network and try again")])]),e._v(" "),t("tr",[t("td",[e._v("3003")]),e._v(" "),t("td",[e._v("Authentication page load timed out")]),e._v(" "),t("td",[e._v("Check network and try again")])]),e._v(" "),t("tr",[t("td",[e._v("4000")]),e._v(" "),t("td",[e._v("Validation logic skipping")]),e._v(" "),t("td",[e._v("Developers manually handle validation skipping logic")])]),e._v(" "),t("tr",[t("td",[e._v("9000")]),e._v(" "),t("td",[e._v("The device fingerprint is not mounted")]),e._v(" "),t("td",[e._v("To integrate the Captcha, you need to integrate the device fingerprint first")])]),e._v(" "),t("tr",[t("td",[e._v("9001")]),e._v(" "),t("td",[e._v("No network")]),e._v(" "),t("td",[e._v("Please check network connection")])]),e._v(" "),t("tr",[t("td",[e._v("9002")]),e._v(" "),t("td",[e._v("Request timed out")]),e._v(" "),t("td",[e._v("Check network, try again later")])]),e._v(" "),t("tr",[t("td",[e._v("9003")]),e._v(" "),t("td",[e._v("Return result is abnormal")]),e._v(" "),t("td",[e._v("Server error, return result is abnormal, contact technical support")])]),e._v(" "),t("tr",[t("td",[e._v("9004")]),e._v(" "),t("td",[e._v("Global loading timed out")]),e._v(" "),t("td",[e._v("Check network, try again later")])])])]),e._v(" "),t("h1",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("p",[t("strong",[e._v("Q1")]),e._v(": After integrated the TrustDecision SDK, the project can no longer be debugged in Xcode. How to solve it?")]),e._v(" "),t("p",[t("strong",[e._v("A1")]),e._v(": Please refer to "),t("a",{attrs:{href:"https://doc.trustdecision.com/API?article=38852&version=182#Initialization",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initialization"),t("OutboundLink")],1),e._v(" When initializing TrustDecision SDK, add the following parameters")]),e._v(" "),t("div",{staticClass:"language-objective extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[options setValue:@"allowed" forKey:@"allowed"];\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);