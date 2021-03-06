var expect = require('expect.js');
var seeditConfig = require('../index');
var getCommonAPI = seeditConfig.getCommonAPI;
var getHuodongAPI = seeditConfig.getHuodongAPI;
var getSiteUrl = seeditConfig.getSiteUrl;
var getMainDomain = seeditConfig.getMainDomain;

describe('read config', function() {

    it('get method exists', function() {
        expect(seeditConfig.get).to.be.a('function');
    });

    it('window.__seeditConfig exists', function() {
        expect(window.__seeditConfig).to.be.an('object');
    });

    it('get all config', function() {
        expect(seeditConfig.get().commonAPI).to.be('http://common.seedit.com');
        expect(seeditConfig.get().huodongAPI).to.be('http://huodong.seedit.com/restful');
    });

    it('get single config', function() {
        expect(seeditConfig.get('commonAPI')).to.be('http://common.seedit.com');
    });

});

describe('write config', function() {

    it('set method exists', function() {
        expect(seeditConfig.set).to.be.a('function');
    });

    it('get all config', function() {
        seeditConfig.set('commonAPI', 'http://a.seedit.com');
        expect(seeditConfig.get().commonAPI).to.be('http://a.seedit.com');
    });

    it('get single config', function() {
        seeditConfig.set('commonAPI', 'http://b.seedit.com');
        expect(seeditConfig.get('commonAPI')).to.be('http://b.seedit.com');
    });

});


describe('detect function with http://', function() {
    it('少凡m站配置测试', function() {
        expect(getCommonAPI('http://m.csf.bzdev.net')).to.be('http://common.csf.bzdev.net');
        expect(getHuodongAPI('http://m.csf.bzdev.net')).to.be('http://huodong.csf.bzdev.net/restful');
    });

    it('活动office站配置测试', function() {
        expect(getCommonAPI('http://huodong.office.bzdev.net')).to.be('http://common.office.bzdev.net');
        expect(getHuodongAPI('http://huodong.office.bzdev.net')).to.be('http://huodong.office.bzdev.net/restful');
    });

    it('承林huodong站配置测试', function() {
        expect(getCommonAPI('http://huodong.wcl.bzdev.net')).to.be('http://common.wcl.bzdev.net');
        expect(getHuodongAPI('http://huodong.wcl.bzdev.net')).to.be('http://huodong.wcl.bzdev.net/restful');
    });

    it('活动online站配置测试', function() {
        expect(getCommonAPI('http://huodong.online.bozhong.com')).to.be('http://common.online.bozhong.com');
        expect(getHuodongAPI('http://huodong.online.bozhong.com')).to.be('http://huodong.online.bozhong.com/restful');
    });

    it('线上活动配置测试', function() {
        expect(getCommonAPI('http://huodong.seedit.com')).to.be('http://common.seedit.com');
        expect(getHuodongAPI('http://huodong.seedit.com')).to.be('http://huodong.seedit.com/restful');
    });

    it('切换域名到bozhong后', function() {
        expect(getCommonAPI('http://bozhong.com')).to.be('http://common.bozhong.com');
        expect(getHuodongAPI('http://bozhong.com')).to.be('http://huodong.bozhong.com/restful');

        expect(getCommonAPI('http://bbs.bozhong.com')).to.be('http://common.bozhong.com');
        expect(getHuodongAPI('http://huodong.bozhong.com')).to.be('http://huodong.bozhong.com/restful');
    });


});


describe('detect function without http://', function() {
    it('少凡m站配置测试', function() {
        expect(getCommonAPI('m.csf.bzdev.net')).to.be('http://common.csf.bzdev.net');
        expect(getHuodongAPI('m.csf.bzdev.net')).to.be('http://huodong.csf.bzdev.net/restful');
    });

    it('活动office站配置测试', function() {
        expect(getCommonAPI('huodong.office.bzdev.net')).to.be('http://common.office.bzdev.net');
        expect(getHuodongAPI('huodong.office.bzdev.net')).to.be('http://huodong.office.bzdev.net/restful');
    });

    it('承林huodong站配置测试', function() {
        expect(getCommonAPI('huodong.wcl.bzdev.net')).to.be('http://common.wcl.bzdev.net');
        expect(getHuodongAPI('huodong.wcl.bzdev.net')).to.be('http://huodong.wcl.bzdev.net/restful');
    });

    it('活动online站配置测试', function() {
        expect(getCommonAPI('bbs.online.bozhong.com')).to.be('http://common.online.bozhong.com');
        expect(getCommonAPI('huodong.online.bozhong.com')).to.be('http://common.online.bozhong.com');
        expect(getHuodongAPI('huodong.online.bozhong.com')).to.be('http://huodong.online.bozhong.com/restful');
    });

    it('线上活动配置测试', function() {
        expect(getCommonAPI('huodong.seedit.com')).to.be('http://common.seedit.com');
        expect(getHuodongAPI('huodong.seedit.com')).to.be('http://huodong.seedit.com/restful');
    });


});


describe('子站域名获取', function() {
    it('线上域名', function() {
        expect(getSiteUrl('bbs', 'huodong.seedit.com')).to.be('http://bbs.seedit.com');
        expect(getSiteUrl('bbs', 'riji.seedit.com')).to.be('http://bbs.seedit.com');
    });
    it('bozhong域名', function() {
        expect(getSiteUrl('bbs', 'bozhong.com')).to.be('http://bbs.bozhong.com');
        expect(getSiteUrl('common', 'bozhong.com')).to.be('http://common.bozhong.com');
    });
    it('online域名', function() {
        expect(getSiteUrl('bbs', 'huodong.online.bozhong.com')).to.be('http://bbs.online.bozhong.com');
        expect(getSiteUrl('bbs', 'riji.online.bozhong.com')).to.be('http://bbs.online.bozhong.com');
    });
    it('office域名', function() {
        expect(getSiteUrl('bbs', 'huodong.office.bzdev.net')).to.be('http://bbs.office.bzdev.net');
        expect(getSiteUrl('bbs', 'riji.office.bzdev.net')).to.be('http://bbs.office.bzdev.net');
    });
});

describe('主域名获取', function() {
    it('线上域名', function() {
        expect(getMainDomain('http://bbs.seedit.com')).to.be('seedit.com');
    });
    it('线上域名', function() {
        expect(getMainDomain('http://bbs.bozhong.com')).to.be('bozhong.com');
    });
    it('bozhong域名', function() {
        expect(getMainDomain('http://bozhong.com')).to.be('bozhong.com');
    });
    it('online域名', function() {
        expect(getMainDomain('http://bbs.online.bozhong.com')).to.be('online.bozhong.com');
    });
    it('office域名', function() {
        expect(getMainDomain('http://bbs.office.bzdev.net')).to.be('office.bzdev.net');
    });
});