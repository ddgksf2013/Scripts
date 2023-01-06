/*

https://t.me/ddgksf2013

12306 去除倒计时 made by ddgksf2013 on 2022-12-29

使用本重写，请务必在本地添加分流 host, ad.12306.cn, direct

[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/12306.js

[mitm]

hostname = ad.12306.cn

*/

















var ddgksf2013=JSON.parse($response.body);ddgksf2013.materialsList&&(1==ddgksf2013.materialsList.length?(ddgksf2013.materialsList[0].filePath="",ddgksf2013.advertParam.skipTime=1,delete ddgksf2013.materialsList[0].billId,ddgksf2013.materialsList[0].billMaterialsId="6491"):ddgksf2013.materialsList.length>1&&(ddgksf2013.materialsList=[{}])),$done({body:JSON.stringify(ddgksf2013)});
