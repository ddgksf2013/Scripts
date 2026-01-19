/***********************************

> 应用名称：知乎开屏
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-02-04
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 脚本功能：去开屏广告
> 特别说明：⛔⛔⛔
           本脚本仅供学习交流使用，禁止转载售卖
           ⛔⛔⛔
		   
		   
请搭配@blackmatrix7的知乎净化助手使用
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zheye/zheye.snippet


[rewrite_local]

# ～ 知乎开屏（2023-02-04）@ddgksf2013
^https?:\/\/api\.zhihu\.com\/commercial_api.*launch_v2 url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/zhihu_openads.js

[mitm]

hostname=api.zhihu.com

***********************************/





















var body=$response.body.replace(/img_play_duration\\":\d+/g,'img_play_duration":0').replace(/launch_timeout\\":\d+/g,'launch_timeout":0');$done({body});
