/**********************************************

> 应用名称：ahhhhfs网站净化
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-07-01
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 网站地址：https://www.ahhhhfs.com
> 脚本说明：去除网页推广、网页广告


[rewrite_local]

^https?:\/\/.*ahhhhfs.com\/($|[0-9a-zA-Z]+\/$) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ahfs.js

[mitm]

hostname = *.ahhhhfs.com

**********************************************/





























var body = $response.body.replace(/<head>/, '<head><style>.top, .bottum, .sidebar-column, .m-menubar, .google-auto-placed, #rizhuti_v2_module_division-2, #related_posts, .post-note, .entry-share, .related-posts, #comments, #ad_position_box{display:none!important} </style>');
$done({ body });
