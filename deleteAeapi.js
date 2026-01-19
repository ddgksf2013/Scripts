/***********************************************
> 应用名称：墨鱼自用deleteHeader脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2024-10-11
> 通知频道：https://t.me/ddgksf2021
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/	

const version = 'V1.0.2';


function deleteHeader(e,d){for(var r in e)if(r.toLowerCase()===d.toLowerCase()){delete e[r];return}}var modifiedHeaders=$request.headers;deleteHeader(modifiedHeaders,"X-AEAPI"),$done({headers:modifiedHeaders});
