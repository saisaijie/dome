<template>
  <div class="hello">
    <ul class="menu" v-for="(li,key,index) in msg">
      <li  v-bind:class="{'menu-list':index==0}">
        <router-link :to ="{name:li.url}" >
            <a href="javascript:;" v-text='key+"=="+li.mes'></a>
          </router-link>
      </li>
    </ul>
    <span v-if="$store.state.dialog.show" v-text="$store.state.dialog.deviceData.first['msg']"></span>
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
      methods:{
        
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../css/less/demo.css';
</style>
