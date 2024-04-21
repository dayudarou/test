import { defineStore } from "pinia"
import { SET_TOKEN,GET_TOKEN } from "@/utils/token"

// 创建用户小仓库
const useUserStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN(), // 用户唯一标识token

        }
    },
    actions: {

    },
    getters: {
        
    }
})

export default useUserStore