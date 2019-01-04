// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
Vue.config.productionTip = false;

 Vue.filter("sum", function(value) {  //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
   if(value.indexOf('30')>-1){
      return value+'--change';
   }else{
     return value;
   }
       
  });
      
  Vue.filter('cal', function (value, begin, xing) {  //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    console.log(begin);
    console.log(xing);
        return value + begin + xing;
  });
  Vue.filter("change", {//这种双向绑定的过滤器只能用在ng-model指令中，否则会报错[Vue warn]: Error in render: “TypeError: _vm._f(…) is not a function” 
        read: function (value) { // model -> view 在更新 `<input>` 元素之前格式化值
          return value;
        },
        write: function (newVal,oldVal) { // view -> model 在写回数据之前格式化值
          console.log("newVal:"+newVal); 

          console.log("oldVal:"+oldVal);
          return newVal;
        }
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


