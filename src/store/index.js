import Vue from 'vue'
import vuex from 'vuex'
import device_store from '../modules/device.js'
import log_store from '../modules/log.js'
Vue.use(vuex);
export default new vuex.Store({//store对象
   modules:{
       device_store:device_store,
       log_store:log_store
   }
   ,
   getters:{
       not_show(state){
        return !state.show;
       }
   }
}); 