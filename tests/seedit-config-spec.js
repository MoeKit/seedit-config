var expect = require('expect.js');
var seeditConfig = require('../index');

describe('read config', function() {
  
  it('get method exists', function(){
    expect(seeditConfig.get).to.be.a('function');
  });
 
  it('window.__seeditConfig exists',function(){
    expect(window.__seeditConfig).to.be.an('object');
  });

  it('get all config', function() {
    expect(seeditConfig.get().commonAPI).to.be('http://common.seedit.com');
  });
    
  it('get single config',function(){
    expect(seeditConfig.get('commonAPI')).to.be('http://common.seedit.com');
  });

});

describe('write config', function() {

  it('set method exists', function(){
    expect(seeditConfig.set).to.be.a('function');
  });

  it('get all config', function() {
    seeditConfig.set('commonAPI','http://a.seedit.com');
    expect(seeditConfig.get().commonAPI).to.be('http://a.seedit.com');
  });
    
  it('get single config',function(){
    seeditConfig.set('commonAPI','http://b.seedit.com');
    expect(seeditConfig.get('commonAPI')).to.be('http://b.seedit.com');
  });

});
