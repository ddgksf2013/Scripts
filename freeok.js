/* 公众号墨鱼手记 crated by ddgksf2013 on 2023-06-08 */

var body = $response.body.replace(/<head>/, '<head><style>.module-adslist, input.search-input, .player-rm > a[target="_blank"]{display:none!important} </style>');
$done({ body });
