var commonAPI;
var host = window.location.host;
// default setting
if (/seedit.com/.test(host) || /localhost/.test(host) || /seedit.cn/.test(host) || /^\d+.\d+.\d+.\d+/.test(host)) {
    commonAPI = 'http://common.seedit.com';
} else {
    var hostArr = host.split('.');
    if(hostArr.length > 2) {
        hostArr.splice(0, 1);
    }
    commonAPI = 'http://common.' + hostArr.join('.');
}

var __seeditConfig = window.__seeditConfig = window.__seeditConfig || {
    commonAPI: commonAPI // common API
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

module.exports = seeditConfig;