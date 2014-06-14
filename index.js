var hostname = window.location.hostname;
var commonAPI = getCommonAPI(hostname);
var huodongAPI = getHuodongAPI(hostname);

var __seeditConfig = window.__seeditConfig = window.__seeditConfig || {
    commonAPI: commonAPI, // common API
    huodongAPI: huodongAPI
};

var seeditConfig = {
    get: function (key) {
        if (!key) {
            return __seeditConfig;
        } else {
            return __seeditConfig[key];
        }
    },
    set: function (key, value) {
        __seeditConfig[key] = value;
    }
};

// get scope
// 当有 huodong 标识时， scope为 huodong
// http://huodong.office.bzdev.net/shiyong/ =>
// http://huodong.office.bzdev.net/restful  只在当前域可用
// http://common.office.bzdev.net/

// 其他为common
// http://m.csf.bzdev.net
// => http://common.csf.bzdev.net
// => http://huodong.csf.bzdev.net


function getScopeByUrl(url) {
    url = url || document.location.host;
    if (/huodong/.test(url)) {
        return 'huodong';
    }
    return 'common';
};

// is localhost or cms
function isLocal(url) {
    return  /localhost/.test(url) || /seedit.cn/.test(url) || /^\d+.\d+.\d+.\d+/.test(url);
}

// 获取huodong API
function getHuodongAPI(url) {
    if (isLocal(url)) {
        return 'http://huodong.seedit.com/restful';
    }
    var scope = getScopeByUrl(url);
    // 当前不在huodong域，拼凑子域名
    if (scope === 'common') {
        return ['http://huodong'].concat(url.split('.').slice(1)).join('.') + '/restful';
    } else {
        return url + '/restful';
    }
};


// 获取common API
function getCommonAPI(url) {
    var scope = getScopeByUrl(url);
    // default setting
    if (/seedit.com/.test(url) || isLocal(url)) {
        return 'http://common.seedit.com';
    } else {
        var hostArr = url.split('.');
        if (hostArr.length > 2) {
            hostArr.splice(0, 1);
        }
        return 'http://common.' + hostArr.join('.');
    }
};

module.exports = seeditConfig;
module.exports.getCommonAPI = getCommonAPI;
module.exports.getHuodongAPI = getHuodongAPI;