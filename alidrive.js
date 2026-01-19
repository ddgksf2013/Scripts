/***********************************

> 应用名称：阿里云盘
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2023-02-21
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 脚本功能：优化首页display
> 额外说明：此脚本停止维护，请引用下面链接[广告净化+本地视频倍速、码率切换]
> 引用链接：https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载售卖
            ⛔⛔⛔



[rewrite_local]

# ～ 阿里云盘（2023-01-05）@ddgksf2013
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/(apps|home)\/widgets$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/alidrive.js

[mitm]

hostname=api.aliyundrive.com

***********************************/







$notify("Tips", "", "此脚本停止维护，请使用新的重写，点击可跳转",{"open-url":"https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js"});
let ddgksf2013=JSON.parse($response.body);ddgksf2013.result&&(ddgksf2013.result=Object.values(ddgksf2013.result).filter(d=>"file"==d.appCode||"video"==d.appCode)),ddgksf2013.activities&&delete ddgksf2013.activities,ddgksf2013.myBackup&&delete ddgksf2013.myBackup,$done({body:JSON.stringify(ddgksf2013)});
