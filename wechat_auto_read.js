/******************************

🐏 微信阅读（全自动），阅读得积分，10000积分换1元
🐏 单篇阅读为80～100积分，一轮约为30篇，即一轮获得0.3元，一天可获得2元+
👀 请复制下面的链接在微信中打开👇👇👇
🔗 活动打开地址：https://shrtm.nu/njW
👀 Tg通知频道：https://t.me/ddgksf2021
⚠️ 微信多账户请切换IP使用
🚩 建议积分每天兑换，并清空，不要积累，不要积累


【QuantumultX】 :
*************************
[rewrite_local]
^https?://mp\.weixin\.qq\.com/s\?.* url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/wechat_auto_read.js
*************************

【Loon】 :
*************************
[Script]
http-response ^https?://mp\.weixin\.qq\.com/s\?.* script-path=https://github.com/ddgksf2013/Scripts/raw/master/wechat_auto_read.js, requires-body=true, timeout=10, tag=微信自动阅读（羊毛） 
*************************

【Surge】 :
*************************
[Script]
微信自动阅读（羊毛） = type=http-response,pattern=^https?://mp\.weixin\.qq\.com/s\?.*,script-path=https://github.com/ddgksf2013/Scripts/raw/master/wechat_auto_read.js, requires-body=true
*************************

【小火箭】 :
*************************
[Script]
微信自动阅读（羊毛） = type=http-response,script-path=https://github.com/ddgksf2013/Scripts/raw/master/wechat_auto_read.js,pattern=^https?://mp\.weixin\.qq\.com/s\?.*,max-size=131072,requires-body=true,timeout=10,enable=true
*************************

[mitm]
hostname = mp.weixin.qq.com

*****************************************/








var possibleTimeouts = [6000, 7000, 8000, 9000, 10000,11000,12000];
var randomTimeout = possibleTimeouts[Math.floor(Math.random() * possibleTimeouts.length)];
var body = $response.body.replace(/<\/script>/, `setTimeout(() => window.history.back(), ${randomTimeout}); </script>`);
$done({ body });
