<template>
  <div class="log">
    <ul class="menu" v-for="(li,key,index) in  msg">
      <li v-bind:class="{'menu-list':index==0}" >
        <a href="javascript:;" v-text='key+"=="+li.mes'></a>
      </li>
    </ul>
    <ul>
      <li v-for="(li,key,index) in $store.state.log_store.logData">
        <a href="javascript:;" v-text='key+"=="+li.msg'></a>
      </li>
    </ul>
     <router-link :to ="{name:'Main'}" >
    <button @click="$store.dispatch('dialog_store')">保存</button>
     </router-link>
  </div>
</template>
<script>
export default {
  name: 'Log',
  data () {
    return {
      msg:{
        'first':{ 'mes' : 'KVM设备日志' },
        'second':{ 'mes' : 'DPU设备日志' },
        'third':{ 'mes' : 'DPU资产设备日志' }
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../css/less/demo.css';
</style>
