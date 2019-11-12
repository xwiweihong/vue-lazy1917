<template>
  <div id="footer">
      <ul>
          <router-link
              tag="li"
              v-for="item in tabbars"
              :key="item.id"
              :to="item.path">
              <i class="iconfont" v-html="item.icon"></i>
              <span>{{item.text}}</span>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            tabbars:[
                {
                    id:0,
                    text:"首页",
                    icon:"&#xe64d;",
                    path:"/movie"
                },
                {
                    id:1,
                    text:"分类",
                    icon:"&#xe601;",
                    path:"/cinema"
                },
                 {
                    id:3,
                    text:"搜索",
                    icon:"&#xe60d;",
                    path:"/search"
                },
                {
                    id:2,
                    text:"我的",
                    icon:"&#xe6eb;",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
        width:100%;
        height:1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #ccc;
        text-align: center;
    }
    #footer ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    #footer ul li{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: cneter;
    }
    #footer ul li span{
        font-size: .3rem;
    }
    #footer ul li i{
        font-size: .4rem;
    }
    #footer ul .router-link-active{
        color: red;
    }
</style>