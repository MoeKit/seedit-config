# seedit-config

---

[![spm version](http://moekit.com/badge/seedit-config)](http://moekit.com/package/seedit-config)
[![private package](http://moekit.com/privateBadge/bozhong)](http://moekit.com/package/seedit-config)
[![Coverage Status](https://coveralls.io/repos/MoeKit/seedit-config/badge.png?branch=master)](https://coveralls.io/r/MoeKit/seedit-config?branch=master)
[![Travic CI Status](https://travis-ci.org/MoeKit/seedit-config.svg)](https://travis-ci.org/MoeKit/seedit-config)


全站统一配置
从201406开始，需要引入该模块读取配置和测试环境下修改配置。

---



## API

### get <em>function([key])</em>
获取配置，key为空时，返回整个配置

### set <em>function(key,val)</em>
设定配置

## config 配置项

### commonAPI
common API 域名。默认为 `http://common.seedit.com`。

更改该项可以统一所有请求基地址为本地域名。

------
该模块根据url做了适配，
如果域名是 `m.csf.bzdev.net`,那么commonAPI为`common.csf.bzdev.net`。
如果域名是 `m.online.bozhong.com`,那么commonAPI为`common.online.bozhong.com`。
------

