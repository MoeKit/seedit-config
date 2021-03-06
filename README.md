# seedit-config

---

[![spm version](http://moekit.com/badge/seedit-config)](http://moekit.com/package/seedit-config)
[![private package](http://moekit.com/privateBadge/bozhong)](http://moekit.com/package/seedit-config)
[![Travic CI Status](https://travis-ci.org/MoeKit/seedit-config.svg)](https://travis-ci.org/MoeKit/seedit-config)
[![Coverage Status](http://img.shields.io/coveralls/MoeKit/seedit-config.svg)](https://coveralls.io/r/MoeKit/seedit-config?branch=master)

全站统一配置

---

从201406开始，需要引入该模块读取配置和测试环境下修改配置，以保证在多个环境UI行为一致。

网站写cookie时请使用该模块设置domain。否则会导致不同环境表现不一致。

该模块已经打包进 `jquery.min.js`

---

## 使用

````javascript
var Config = require('index');
````

## API

### get <em>function([key])</em>
获取配置，key为空时，返回整个配置

#### 可用key列表

+ `commonAPI`  common接口地址，线上为`http://common.seedit.com`
+ `huodongAPI` 活动接口地址，线上为`http://huodong.seedit.com/restful`

### set <em>function(key,val)</em>
不推荐使用，一般不需要使用，用于特殊情况下的调试

### getSiteUrl <em>function(site)</em>
根据当前页面地址获取子站域名

```javascript
// 若当前url为`http://bbs.seedit.com`
getSiteUrl('common'); // http://common.seedit.com

```

### getMainDomain
根据当前页面地址获取主域名

```javascript
// 若当前url为`http://bbs.seedit.com`
getMainDomain(); // seedit.com

```

### getWechatAuthProxyUrl
根据当前域名获取对应微信授权代理地址

```javascript
// 若当前url为`http://bbs.bozhong.com`
getWechatAuthProxyUrl(); // http://scdn.bozhong.com/source/wechat/redirect/product.html
// 若当前url为`http://bbs.online.seedit.cc`
getWechatAuthProxyUrl(); // http://scdn.bozhong.com/source/wechat/redirect/online.html
// 若当前url为`http://bbs.office.bzdev.net`
getWechatAuthProxyUrl(); // http://scdn.bozhong.com/source/wechat/redirect/office.html
```

### getAppid 
获取所有可授权appid (array)
1. 要个宝宝
2. 小蜜桃
3. 百事可问
4. 造人现场

```javascript
getAppid()[0]; // 默认使用第一个
```
