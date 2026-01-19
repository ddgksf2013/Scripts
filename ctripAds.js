/**********************************************

> 应用名称：墨鱼自用携程旅行小程序去广告脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-07-28
> 通知频道：https://t.me/ddgksf2021
> 特别提醒：如需转载请注明出处，谢谢合作！
> 脚本说明：请自行查看# > 备注，终于可以把携程旅行APP卸载了
> 特别注意：携程旅行小程序去广告脚本与携程旅行APP冲突[禁止MITM]，若你使用APP版，请勿引用本重写！


[rewrite_local]

# > 携程旅行小程序_热门活动@ddgksf2013
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/\d+\/queryWeChatHotEvent url reject-200
# > 携程旅行小程序_信息流@ddgksf2013
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/\d+\/getWaterflowInfo url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ctripAds.js
# > 携程旅行小程序_广告请求@ddgksf2013
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/\d+\/tripAds\.json url reject-200
# > 携程旅行小程序_热搜词@ddgksf2013
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/\d+\/json\/gethotsearchrespbysmallprogram url reject-200
# > 携程旅行小程序_航班页信息流@ddgksf2013
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/\d+\/flightHomeSecondService url reject-200



[mitm]

hostname = m.ctrip.com

**********************************************/






















var ddgksf2013=JSON.parse($response.body);ddgksf2013.data.items=[],$done({body:JSON.stringify(ddgksf2013)});
