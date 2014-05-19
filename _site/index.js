var __seeditConfig = window.__seeditConfig = window.__seeditConfig || {
    commonAPI: 'http://common.seedit.com' // common API
};
var seeditConfig = {
    get:function(key){
        if(!key){
            return __seeditConfig;            
        }else{
            return __seeditConfig[key];
        }        
    },
    set:function(key,value){
        __seeditConfig[key] = value;    
    }
};

module.exports = seeditConfig;
