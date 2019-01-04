export default {
    state:{//state
        //这里存储着所有状态的初始化状态
        show:false,
      
        logData:{
          'first':{'msg':'11333'},
          'second':{'msg':'22222'}
        }
    },
    mutations:{//这里存放所有将要改变的状态
        dialog_store(state){//这里的state对应着上面这个state
            state.show = state.show?false:true;
            state.logData['first']['msg']='132322';
            //你还可以在这里执行其他的操作改变state
        }
    },
    actions:{//一个动作触发多个状态时，在此定义一个方法，把所有状态修改的动作集中到这里统一更改
        dialog_store(context){
            context.commit('dialog_store');
        }
    },
}