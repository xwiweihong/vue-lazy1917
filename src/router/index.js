import Vue from "vue"
import VueRouter from "vue-router";
import movie from "./movie"
import cinema from "./cinema"
import search from "./search"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {   
            path:"/",
            redirect:"/movie"
        },
           movie,
           cinema, 
           search, 
        {
            path:"/mine",
            name:"mine",
            meta:{
                flag:true,
                requiredAuth:true,
            },
            component:_=>import("@pages/mine")
        },
        {
            path:"/login",
            name:"login",
            meta:{
                flag:true,
                requiredAuth:false,
            },
            component:_=>import("@pages/login")
        }
    ]
})

//封装路由守卫 
router.beforeEach((to,from,next)=>{
    if(to.path !="/login" && to.meta.requiredAuth){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}})
        }
    }else{
        next();
    }
})


export default router;