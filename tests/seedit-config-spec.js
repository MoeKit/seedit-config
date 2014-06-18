var expect = require('expect.js');
var seeditConfig = require('../index');
var getCommonAPI = seeditConfig.getCommonAPI;
var getHuodongAPI = seeditConfig.getHuodongAPI;

describe('read config', function () {

    it('get method exists', function () {
        expect(seeditConfig.get).to.be.a('function');
    });

    it('window.__seeditConfig exists', function () {
        expect(window.__seeditConfig).to.be.an('object');
    });

    it('get all config', function () {
        expect(seeditConfig.get().commonAPI).to.be('http://common.seedit.com');
        expect(seeditConfig.get().huodongAPI).to.be('http://huodong.seedit.com/restful');
    });

    it('get single config', function () {
        expect(seeditConfig.get('commonAPI')).to.be('http://common.seedit.com');
    });

});

describe('write config', function () {

    it('set method exists', function () {
        expect(seeditConfig.set).to.be.a('function');
    });

    it('get all config', function () {
        seeditConfig.set('commonAPI', 'http://a.seedit.com');
        expect(seeditConfig.get().commonAPI).to.be('http://a.seedit.com');
    });

    it('get single config', function () {
        seeditConfig.set('commonAPI', 'http://b.seedit.com');
        expect(seeditConfig.get('commonAPI')).to.be('http://b.seedit.com');
    });

});


describe('detect function with http://', function () {
    it('少凡m站配置测试', function () {
        expect(getCommonAPI('http://m.csf.bzdev.net')).to.be('http://common.csf.bzdev.net');
        expect(getHuodongAPI('http://m.csf.bzdev.net')).to.be('http://huodong.csf.bzdev.net/restful');
    });

    it('活动office站配置测试', function () {
        expect(getCommonAPI('http://huodong.office.bzdev.net')).to.be('http://common.office.bzdev.net');
        expect(getHuodongAPI('http://huodong.office.bzdev.net')).to.be('http://huodong.office.bzdev.net/restful');
    });

    it('承林huodong站配置测试', function () {
        expect(getCommonAPI('http://huodong.wcl.bzdev.net')).to.be('http://common.wcl.bzdev.net');
        expect(getHuodongAPI('http://huodong.wcl.bzdev.net')).to.be('http://huodong.wcl.bzdev.net/restful');
    });

    it('活动online站配置测试', function () {
        expect(getCommonAPI('http://huodong.online.bozhong.com')).to.be('http://common.online.bozhong.com');
        expect(getHuodongAPI('http://huodong.online.bozhong.com')).to.be('http://huodong.online.bozhong.com/restful');
    });

    it('线上活动配置测试', function () {
        expect(getCommonAPI('http://huodong.seedit.com')).to.be('http://common.seedit.com');
        expect(getHuodongAPI('http://huodong.seedit.com')).to.be('http://huodong.seedit.com/restful');
    });


});


describe('detect function without http://', function () {
    it('少凡m站配置测试', function () {
        expect(getCommonAPI('m.csf.bzdev.net')).to.be('http://common.csf.bzdev.net');
        expect(getHuodongAPI('m.csf.bzdev.net')).to.be('http://huodong.csf.bzdev.net/restful');
    });

    it('活动office站配置测试', function () {
        expect(getCommonAPI('huodong.office.bzdev.net')).to.be('http://common.office.bzdev.net');
        expect(getHuodongAPI('huodong.office.bzdev.net')).to.be('http://huodong.office.bzdev.net/restful');
    });

    it('承林huodong站配置测试', function () {
        expect(getCommonAPI('huodong.wcl.bzdev.net')).to.be('http://common.wcl.bzdev.net');
        expect(getHuodongAPI('huodong.wcl.bzdev.net')).to.be('http://huodong.wcl.bzdev.net/restful');
    });

    it('活动online站配置测试', function () {
        expect(getCommonAPI('huodong.online.bozhong.com')).to.be('http://common.online.bozhong.com');
        expect(getHuodongAPI('huodong.online.bozhong.com')).to.be('http://huodong.online.bozhong.com/restful');
    });

    it('线上活动配置测试', function () {
        expect(getCommonAPI('huodong.seedit.com')).to.be('http://common.seedit.com');
        expect(getHuodongAPI('huodong.seedit.com')).to.be('http://huodong.seedit.com/restful');
    });


});
