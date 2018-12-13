<template>
  <div class="hello">
    <ul class="menu">
      <li>首页</li>
      <li>设备管理</li>
      <li>日志管理</li>
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
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu {   
    height:auto;
  }
</style>
