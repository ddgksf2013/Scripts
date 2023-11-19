/**********************************************
> 应用名称：墨鱼自用朴朴超市去广告脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-11-19
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 脚本说明：去除开屏广告、搜索轮播填充
**********************************************/


const version = 'V1.0.0';

var obj=JSON.parse($response.body);obj.data&&(obj.data=Object.values(obj.data).filter(o=>!(320==o.position_type||710==o.position_type||50==o.position_type))),$done({body:JSON.stringify(obj)});
