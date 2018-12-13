<template>
  <div class="hello">
    <ul class="menu">
      <li class="menu-list"><a >首页</a></li>
      <li><a href="">设备管理</a></li>
      <li><a href="">日志管理</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to ZhangSai Vue.js App'
    }
  }
}
</script>
<style> 
  @import '../css/reset.css';
   @import '../css/less/demo.css';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu {   
    height:auto;
  }
</style>
