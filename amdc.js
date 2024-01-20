/***********************************************
> 应用名称：墨鱼自用amdc脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2024-01-20
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/

//使用AMDC的APP有：咸鱼、淘宝、盒马、高德、菜鸟、飞猪

const version = 'V1.0.7';



var ua=$request.headers["User-Agent"]||$request.headers["user-agent"];/(AMap|Cainiao|%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C|Hema4iPhone|Moon|DMPortal|%E6%B7%98%E5%AE%9D)/.test(ua)?$done({body:"ddgksf2013"}):$done({});
