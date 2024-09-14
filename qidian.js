/***********************************************
> 应用名称：墨鱼自用奇点阅读去广告脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2024-09-14
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/


const version = 'V1.0.0';


var obj=JSON.parse($response.body);const propertiesToDelete=["ads2","adSource2","third"];for(const prop of propertiesToDelete)obj.data?.[prop]&&(obj.data[prop]={});$done({body:JSON.stringify(obj)});
