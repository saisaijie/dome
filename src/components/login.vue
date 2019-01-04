<template>
  <div class="login-content">
     
        <div class="login">
             <img class="img" src="../assets/logo.png">
            <form action="192.168.7.145/" method="POST">

                <div>
                    <label for="username">用户名</label>
                    <input type="text" name="username" id="username">
                </div>
                <div>
                    <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                    <input type="password" name="password" id="password">
                </div>
                <div>
                     <router-link :to ="{name:'Main'}" >
                        <button type="submit" class="login-btn" >登&nbsp;&nbsp;录</button>
                    </router-link>                    
                </div>
            </form>
        </div>
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
        
      },
      computed:{
          computedName:function(){

          }
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   .login-content{
        position: relative;
        width:100%;
        height:100%;
   }
   .login{
       position: absolute;
       width:400px;
       height:300px;
       border:1px solid #eee;
       left:50%;
       top:50%;
       margin-left:-200px;
       margin-top:-150px;
   }
   .img{
       margin:20px;
   }
    .login div{
       margin:10px;
   }
   .login div:first{
       margin-top:30px;
   }
   .login label{
      color: #666;
       font: normal 800 14px/2em '微软雅黑';
       margin-right:3px;
   }
   .login input{
       height: 28px;
       border: 1px solid #ccc;
       border-radius: 3px;
   }
   .login .login-btn{
       width:60%;       
       font: normal 800 14px/2em '微软雅黑';
       padding:3px 5px;
       background: limegreen;
       border:1px solid limegreen;
       color:#fff;
       border-radius: 3px;
   }
</style>
