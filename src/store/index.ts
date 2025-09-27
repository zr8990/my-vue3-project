import {defineStore} from 'pinia'
interface userInfoInter {
    name:string,
    age:number,
    sex:string,
    phone:string,
    email:string,
    address:string,
    birthday:string,
    hobby:string,
    desc:string,
    avatar:string
}
export const useUserStore = defineStore('user',{ 
    state:()=>({
        name:'zzz',
        age:0,
        sex:'',
        phone:'',
        email:'',
        address:'',
        birthday:'',
        hobby:'',
        desc:'',
        avatar:''
    }),
    getters:{
        getUserInfo:state=>state
    },
    actions:{
        setUserInfo(userInfo:userInfoInter){
            this.$patch(userInfo)
        }
    }
})