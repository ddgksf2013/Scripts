/***********************************

> 应用名称：爱奇艺去除开屏广告
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-03-17
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 脚本功能：去除开屏广告
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：⛔⛔⛔
           本脚本仅供学习交流使用，禁止转载售卖
           ⛔⛔⛔
        
        
        
请自行在本地添加分流
host-suffix, cupid.iqiyi.com, direct


[rewrite_local]

# ～ 爱奇艺（2023-03-17）@ddgksf2013
^https?:\/\/.*cupid\.iqiyi\.com\/mixer\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/iqiyi_open_ads.js

[mitm]

hostname=*cupid.iqiyi.com

***********************************/












let obj=JSON.parse($response.body);delete obj.adSlots,$done({body:JSON.stringify(obj)});
