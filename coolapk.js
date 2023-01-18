/***********************************
> 应用名称：酷安净化
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-01-18
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载、售卖
          ⚠️⚠️⚠️
		  
    
[rewrite_local]

# > 酷安_推广广告@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/dataList url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_首页广告@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/main\/indexV8 url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_评论广告@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/feed\/replyList url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_商品推广@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/feed\/detail url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_屏蔽热词@ddgksf2013
^https?:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch url reject-dict
[mitm] 

hostname=api.coolapk.com


***********************************/






const version = 'V1.0.8';
 
if(-1!=$request.url.indexOf("replyList")){var a=JSON.parse($response.body);a.data.length>0&&(a.data=Object.values(a.data).filter(a=>a.id)),$done({body:JSON.stringify(a)})}else if(-1!=$request.url.indexOf("indexV8")){var a=JSON.parse($response.body);a.data=Object.values(a.data).filter(a=>!("sponsorCard"==a.entityTemplate||8639==a.entityId||33006==a.entityId||32557==a.entityId||-1!=a.title.indexOf("值得买")||-1!=a.title.indexOf("红包"))),$done({body:JSON.stringify(a)})}else if(-1!=$request.url.indexOf("dataList")){var a=JSON.parse($response.body);a.data=Object.values(a.data).filter(a=>!("sponsorCard"==a.entityTemplate||"精选配件"==a.title)),$done({body:JSON.stringify(a)})}else if(-1!=$request.url.indexOf("detail")){var a=JSON.parse($response.body);a.data?.hotReplyRows?.length>0&&(a.data.hotReplyRows=Object.values(a.data.hotReplyRows).filter(a=>a.id)),a.data?.topReplyRows?.length>0&&(a.data.topReplyRows=Object.values(a.data.topReplyRows).filter(a=>a.id)),a.data?.include_goods_ids&&(a.data.include_goods_ids=[]),a.data?.include_goods&&(a.data.include_goods=[]),a.data?.detailSponsorCard&&(a.data.detailSponsorCard=[]),$done({body:JSON.stringify(a)})}else $done($response);
