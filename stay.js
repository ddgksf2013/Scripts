/***********************************

> 应用名称：Stay去除仓库广告
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-10-17
> 通知频道：https://t.me/ddgksf2021
> 脚本功能：去除仓库广告
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载售卖
            ⛔⛔⛔
            
[rewrite_local]

# ～ Stay（2022-10-17）@ddgksf2013
^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/stay.js

[mitm]

hostname=api.shenyin.name

***********************************/

let ddgksf2013 = JSON.parse($response.body);
if (ddgksf2013.biz) {
    ddgksf2013.biz = Object.values(ddgksf2013.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(ddgksf2013) });
