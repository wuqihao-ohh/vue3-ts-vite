import { createStore } from "vuex";

// 定义一个接口控制store的泛型
interface state{
    content:number
}

export const store =createStore<state>({
    state(){
        return{
            content:333  
        }
    },
    mutations:{
        COUNTADD(state){
            state.content++
        }
    }
})