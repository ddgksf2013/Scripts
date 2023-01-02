/********************************

@version     v0.0.3
@updatetime  2023-01-02
@tgchannel   https://t.me/ddgksf2021
@function    酷安去首页广告、信息流广告、评论广告
@author      ddgksf2013


[rewrite_local]

^https?:\/\/api.coolapk.com\/v6\/(feed\/(replyList|detail)|main\/indexV8|dataList) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js

[mitm]

hostname = api.coolapk.com

*********************************/





 
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf2df4=["\x72\x65\x70\x6C\x79\x4C\x69\x73\x74","\x69\x6E\x64\x65\x78\x4F\x66","\x75\x72\x6C","\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x6C\x65\x6E\x67\x74\x68","\x64\x61\x74\x61","\x69\x64","\x66\x69\x6C\x74\x65\x72","\x76\x61\x6C\x75\x65\x73","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x69\x6E\x64\x65\x78\x56\x38","\x65\x6E\x74\x69\x74\x79\x54\x65\x6D\x70\x6C\x61\x74\x65","\x73\x70\x6F\x6E\x73\x6F\x72\x43\x61\x72\x64","\x65\x6E\x74\x69\x74\x79\x49\x64","\u503C\u5F97\u4E70","\x74\x69\x74\x6C\x65","\u7EA2\u5305","\x64\x61\x74\x61\x4C\x69\x73\x74","\u7CBE\u9009\u914D\u4EF6","\x64\x65\x74\x61\x69\x6C","\x68\x6F\x74\x52\x65\x70\x6C\x79\x52\x6F\x77\x73","\x74\x6F\x70\x52\x65\x70\x6C\x79\x52\x6F\x77\x73","\x69\x6E\x63\x6C\x75\x64\x65\x5F\x67\x6F\x6F\x64\x73\x5F\x69\x64\x73","\x69\x6E\x63\x6C\x75\x64\x65\x5F\x67\x6F\x6F\x64\x73","\x64\x65\x74\x61\x69\x6C\x53\x70\x6F\x6E\x73\x6F\x72\x43\x61\x72\x64","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if($request[__Oxf2df4[0x2]][__Oxf2df4[0x1]](__Oxf2df4[0x0])!=  -1){var bodyObj=JSON[__Oxf2df4[0x4]]($response[__Oxf2df4[0x3]]);if(bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x5]]> 0){bodyObj[__Oxf2df4[0x6]]= Object[__Oxf2df4[0x9]](bodyObj[__Oxf2df4[0x6]])[__Oxf2df4[0x8]]((_0xa100x2)=>{return _0xa100x2[__Oxf2df4[0x7]]})};$done({body:JSON[__Oxf2df4[0xa]](bodyObj)})}else {if($request[__Oxf2df4[0x2]][__Oxf2df4[0x1]](__Oxf2df4[0xb])!=  -1){var bodyObj=JSON[__Oxf2df4[0x4]]($response[__Oxf2df4[0x3]]);bodyObj[__Oxf2df4[0x6]]= Object[__Oxf2df4[0x9]](bodyObj[__Oxf2df4[0x6]])[__Oxf2df4[0x8]]((_0xa100x2)=>{return !(_0xa100x2[__Oxf2df4[0xc]]== __Oxf2df4[0xd]|| _0xa100x2[__Oxf2df4[0xe]]== 8639|| _0xa100x2[__Oxf2df4[0xe]]== 33006|| _0xa100x2[__Oxf2df4[0xe]]== 32557|| _0xa100x2[__Oxf2df4[0x10]][__Oxf2df4[0x1]](__Oxf2df4[0xf])!=  -1|| _0xa100x2[__Oxf2df4[0x10]][__Oxf2df4[0x1]](__Oxf2df4[0x11])!=  -1)});$done({body:JSON[__Oxf2df4[0xa]](bodyObj)})}else {if($request[__Oxf2df4[0x2]][__Oxf2df4[0x1]](__Oxf2df4[0x12])!=  -1){var bodyObj=JSON[__Oxf2df4[0x4]]($response[__Oxf2df4[0x3]]);bodyObj[__Oxf2df4[0x6]]= Object[__Oxf2df4[0x9]](bodyObj[__Oxf2df4[0x6]])[__Oxf2df4[0x8]]((_0xa100x2)=>{return !(_0xa100x2[__Oxf2df4[0xc]]== __Oxf2df4[0xd]|| _0xa100x2[__Oxf2df4[0x10]]== __Oxf2df4[0x13])});$done({body:JSON[__Oxf2df4[0xa]](bodyObj)})}else {if($request[__Oxf2df4[0x2]][__Oxf2df4[0x1]](__Oxf2df4[0x14])!=  -1){var bodyObj=JSON[__Oxf2df4[0x4]]($response[__Oxf2df4[0x3]]);if(bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x15]]&& bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x15]][__Oxf2df4[0x5]]> 0){bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x15]]= Object[__Oxf2df4[0x9]](bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x15]])[__Oxf2df4[0x8]]((_0xa100x2)=>{return _0xa100x2[__Oxf2df4[0x7]]})};if(bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x16]]&& bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x16]][__Oxf2df4[0x5]]> 0){bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x16]]= Object[__Oxf2df4[0x9]](bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x16]])[__Oxf2df4[0x8]]((_0xa100x2)=>{return _0xa100x2[__Oxf2df4[0x7]]})};if(bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x17]]){bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x17]]= []};if(bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x18]]){bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x18]]= []};if(bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x19]]){bodyObj[__Oxf2df4[0x6]][__Oxf2df4[0x19]]= []};$done({body:JSON[__Oxf2df4[0xa]](bodyObj)})}else {$done($response)}}}};(function(_0xa100x3,_0xa100x4,_0xa100x5,_0xa100x6,_0xa100x7,_0xa100x8){_0xa100x8= __Oxf2df4[0x1a];_0xa100x6= function(_0xa100x9){if( typeof alert!== _0xa100x8){alert(_0xa100x9)};if( typeof console!== _0xa100x8){console[__Oxf2df4[0x1b]](_0xa100x9)}};_0xa100x5= function(_0xa100xa,_0xa100x3){return _0xa100xa+ _0xa100x3};_0xa100x7= _0xa100x5(__Oxf2df4[0x1c],_0xa100x5(_0xa100x5(__Oxf2df4[0x1d],__Oxf2df4[0x1e]),__Oxf2df4[0x1f]));try{_0xa100x3= __encode;if(!( typeof _0xa100x3!== _0xa100x8&& _0xa100x3=== _0xa100x5(__Oxf2df4[0x20],__Oxf2df4[0x21]))){_0xa100x6(_0xa100x7)}}catch(e){_0xa100x6(_0xa100x7)}})({})
