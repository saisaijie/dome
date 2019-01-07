<template>
  <div class="hello">
    <ul class="menu">
      <li  v-for="(li,key,index) in msg"  v-bind:class="{'menu-list':index==0}">
        <router-link :to ="{name:li.url}" >
            <a href="javascript:;" v-text='key+"=="+li.mes'></a>
          </router-link>
      </li>
    </ul>
    <span ng-bind="reversedMessage"></span>
    <span v-if="$store.state.device_store.show" v-text="$store.state.device_store.deviceData.first['msg']"></span>
     <span v-if="$store.state.log_store.show" v-text="$store.state.log_store.logData.first['msg']"></span>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: {        
        'first':{ "mes" : '首页' , "url" : 'Main' },
        'second':{ "mes" : '设备管理' , "url" : 'Device' },
        'third':{ "mes" : '日志管理' , "url" : 'Log' }
      },
      name:'123456',

      methods:{
        
      },
      computed:{
          reversedMessage:function(){
           return  this.name.split('').reverse().join();
          }
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../css/less/demo.css';
</style>
