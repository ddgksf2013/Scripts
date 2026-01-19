/***********************************

> 网站名称：墨鱼自用V2EX网页去广告
> 脚本功能：网站净化|去广告
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2024-01-05
> 通知频道：https://t.me/ddgksf2021
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载、售卖
          ⚠️⚠️⚠️
		  
    
[rewrite_local]

^https?:\/\/.*v2ex\.com\/($|t\/\d+) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/v2ex.js

[mitm] 

hostname = *.v2ex.com

***********************************/



var body = $response.body.replace(
  /<head>/,
  `<head>
    <style>
      .sidebar_units,
      .sidebar_compliance,
      div[class^="wwads-"]{
        display: none !important;
      }
    </style>`
);
$done({ body });
