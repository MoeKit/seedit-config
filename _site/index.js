<<<<<<< HEAD
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
=======
var seeditConfig = {};
>>>>>>> f84837aa27c80ec17bf82d0aa64071c08e510518

module.exports = seeditConfig;
