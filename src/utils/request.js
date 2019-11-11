import axios from "axios";
import Config from "webpack-chain";

const server = axios.create({
    timeout:5000,
    withCredentials:true
})


// 请求的拦截

server.interceptors.request.use((Config)=>{
    if(Config.method == "get"){
        Config.params = {...config.data};
    }

    // config.headers["content-type"] = "application/json"
},(err)=>{
    Promise.reject(err);
})

// 相应的拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
})

export default server;