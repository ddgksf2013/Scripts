/*

针对QuantumultX下载AppleStore应用速度过慢的几种解决措施：

1、为apple添加代理分流

2、禁用配置文件【DNS】下的no-system或将【DNS】下内容全部删除

3、清除QX的DNS缓存，添加定时脚本from@unknowntokyo(每天晚9点清理一次）

0 21 * * * https://github.com/ddgksf2013/Scripts/raw/master/clear_qxdns_cache.js

以上三种方式，可自行尝试，选择适合自己的使用

*/

const message = {
    action: "dns_clear_cache"
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.ret) {
        console.log("dnsCache Cleared!");
    } else {
        console.log(resolve.error);
    }
    $done();
}, reject => {
    $done();
});
