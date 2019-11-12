<template>
    <div id="login_content">
        <div class="login_username">
            <input type="text" placeholder="账户名/手机号/Email">
        </div>
         <div class="login_password">
            <input type="text" placeholder="请输入密码">
        </div>
        <div class="login_btn">
            <input type="submit" value="登录">
        </div>
        <div class="login_link">
            <p>立即登录</p>
            <p>找回密码</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"login"
}
</script>

<style>
    #login_content{
        width:100%;
        position: absolute;
        top:0;
        bottom:0;
        padding-bottom: 0;
    }
    #login_content .login_username,#login_content .login_password{
        width: 100%;
        height:.8rem;
        border-bottom:1px solid #ccc;
    }
    #login_content input{
        border:0;
        height:100%;
        width:100%;
        font-size:.3rem;
        padding-left: .2rem;
        outline: none;
    }
    #login_content .login_btn{
        width:100%;
        height:1rem;
        display: flex;
        justify-content: center;
        align-items:center;
        margin-top:.2rem;
    }
    #login_content .login_btn>input{
        width:96%;
        height:100%;
        background: #e54847;
        border-radius:.3px;
        border:none;
        display: block;
        color:white;
        font-size:.4rem;
    }
    #login_content .login_link{
        width:100%;
        display: flex;
        justify-content: space-between;
        padding:.1rem .2rem;
        font-size: .3rem;
    }
</style>