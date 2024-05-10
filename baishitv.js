var obj=JSON.parse($response.body);obj.dt.data=Object.values(obj.dt.data).filter(a=>-1===a.jumpTypeString.indexOf("广告")),$done({body:JSON.stringify(obj)});
