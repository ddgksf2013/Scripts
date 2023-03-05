


var wallpaperId = $request.url.match(/wallpaperId%22%3A%22(\w+)%22/)[1];

var openUrl = 'https://hwoss.ibzhi.com/wallpaper/'+wallpaperId+'.jpg';

$notify("墨鱼手记", "", "点击我",{"open-url":openUrl});

$done({});
