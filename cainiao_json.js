/***********************************************
> 应用名称：菜鸟净化[原菜鸟裹裹]
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2022-02-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/	  










const version = 'V1.0.16';


var ddgksf2013=JSON.parse($response.body);-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn")?ddgksf2013.data?.result?.dataList?.length>0&&(ddgksf2013.data.result.dataList=ddgksf2013.data.result.dataList.filter(d=>"big_banner_area_v870"!=d.type)):-1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn")?ddgksf2013.data?.result&&(ddgksf2013.data.result=[]):-1!=$request.url.indexOf("mtop.cainiao.adkeyword")&&ddgksf2013.data?.result?.adHotKeywords&&(ddgksf2013.data.result.adHotKeywords=[]);var body=JSON.stringify(ddgksf2013);$done({body});
