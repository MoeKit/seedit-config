var hostname = window.location.hostname;
var commonAPI = getCommonAPI(hostname);
var huodongAPI = getHuodongAPI(hostname);

var __seeditConfig = window.__seeditConfig = {
    commonAPI: commonAPI, // common API
    huodongAPI: huodongAPI
};

var seeditConfig = {
    get: function(key) {
        if (!key) {
            return __seeditConfig;
        } else {
            return __seeditConfig[key];
        }
    },
    set: function(key, value) {
        __seeditConfig[key] = value;
    }
};

// get scope
// 当有 huodong 标识时， scope为 huodong
// //huodong.office.bzdev.net/shiyong/ =>
// //huodong.office.bzdev.net/restful  只在当前域可用
// //common.office.bzdev.net/

// 其他为common
// //m.csf.bzdev.net
// => //common.csf.bzdev.net
// => //huodong.csf.bzdev.net


function getScopeByUrl(url) {
    url = url || document.location.host;
    if (/huodong/.test(url)) {
        return 'huodong';
    }
    return 'common';
};

// is localhost or cms
function isLocal(url) {
    return /localhost/.test(url) || /seedit.cn/.test(url) || /^\d+.\d+.\d+.\d+/.test(url) || /moekit/.test(url);
}

// 获取huodong API
function getHuodongAPI(url) {
    if (isLocal(url)) {
        return '//huodong.seedit.com/restful';
    }
    if (url.replace('//', '') === 'bozhong.com') {
        return '//huodong.bozhong.com/restful';
    }
    var scope = getScopeByUrl(url);
    // 当前不在huodong域，拼凑子域名
    if (scope === 'common') {
        return ['//huodong'].concat(url.split('.').slice(1)).join('.') + '/restful';
    } else {
        var prefix = /^http/.test(url) ? '' : '//';
        return prefix + url + '/restful';
    }
}

// 获取common API
function getCommonAPI(url) {
    //var scope =  getScopeByUrl(url);
    // default setting
    if (/seedit.com/.test(url) || isLocal(url)) {
        return '//common.seedit.com';
    }
    if (/bozhong.com/.test(url)) {
        return '//common.' + url.replace('//', '');
    } else {
        url = url || document.location.host;
        var hostArr = url.split('.');
        if (hostArr.length >= 3) {
            hostArr.splice(0, 1);
        }
        return '//common.' + hostArr.join('.');
    }
};

// 根据当前域名获取其他子站域名
function getSiteUrl(domain, host) {
    host = host || document.location.host;
    var tmp = host.split('.');
    if (tmp.length >= 3) {
        tmp = tmp.slice(1);
    }
    return ['//' + domain].concat(tmp).join('.');
};

// 获取主域名
function getMainDomain(host) {
    return getSiteUrl('', host).replace('//.', '').replace('//', '');
}

// 获取微信授权代理地址
function getWechatAuthProxyUrl(){
    return !!window.location.href.match(/bozhong\.com/gi) ? "http://scdn.bozhong.com/source/wechat/redirect/product.html" :
            !!window.location.href.match(/seedit\.cc/gi) ? "http://scdn.bozhong.com/source/wechat/redirect/online.html" : 
                                                            "http://scdn.bozhong.com/source/wechat/redirect/office.html";
}

// 获取微信号appid
function getAppid(){
    return [
        // 要个宝宝
        "wx06297e68f1f987bd", 
        // 小蜜桃product
        "wx94d275603a55a2d8",
        // 百事可问
        "wxbdabbca71a87b6c2",
        // 造人现场正式号
        "wx36b297f838942821",
    ];
}

module.exports = seeditConfig;
module.exports.getCommonAPI = getCommonAPI;
module.exports.getHuodongAPI = getHuodongAPI;
module.exports.getSiteUrl = getSiteUrl;
module.exports.getMainDomain = getMainDomain;
module.exports.getWechatAuthProxyUrl = getWechatAuthProxyUrl;
module.exports.getAppid = getAppid;