<template>
  <div class="device">
    <ul class="menu" v-for="(li,key,index) in msg">
      <li v-bind:class="{'menu-list':index==0}">
        <a href="javascript:;" v-text='key+"=="+li.mes'></a>
      </li>
    </ul>
    <ul class="menu" v-for="(li,key,index) in $store.state.device_store.deviceData | dataFilter">
      <li v-bind:class="{'menu-list':index==0}">
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
  name: 'Device',
  data () {
    return {
      msg:{
        'first':{ 'mes' : 'KVM设备' },
        'second':{ 'mes' : 'DPU设备' },
        'third':{ 'mes' : 'DPU资产设备' }
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../css/less/demo.css';
</style>
