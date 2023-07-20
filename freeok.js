/* 公众号墨鱼手记 crated by ddgksf2013 on 2023-07-08 */

var body = $response.body.replace(/<head>/, '<head><style>.module-adslist, .player-rm > a[target="_blank"], .mplayer-poster{display:none!important} </style>');
$done({ body });
