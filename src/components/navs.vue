<script setup>
import login from "./login.vue"
import { RouterLink } from "vue-router";
import {ref} from 'vue'
import agenda from "./agenda.vue";
import {createRouter} from 'vue-router'
var count1=ref(0);
</script>
<template>
    <header>
        <div v-if="count1" class="login_use">
            <login class="logins"></login>
        </div>
        <div class="row">
            <div class="logo">
                <a href="">
                    <img src="./style/picture/2024.png" alt="">
                </a>
            </div>
            <nav class="nav">
                <div class="active">
                    <a class="text" data-id="0" href="">首页</a>
                </div>
                <div class="  item">
                    <router-link to="./agenda">大会议程</router-link>
                    <!-- <a class="text " data-id="1" href="">大会议程</a> -->
                </div>
                <div class="  item">
                    <router-link to="./about">关于大会</router-link>
                </div>
                <div class="  item">
                    <router-link to="./gether">群英荟萃</router-link>
                </div>
                <div class="  item">
                    <router-link to="./activity">精彩活动</router-link>
                </div>
                <div class="  item">
                    <a class="text" data-id="5" href="https://2023.gcsis.cn/exhibitor/">展商风采</a>
                </div>
                <div class="  item">
                    <a href="https://2023.gcsis.cn/results/">成果发布</a>
                </div>
                <div class="  item">
                    <router-link to="./news_center">媒体中心</router-link>
                </div>
                <!-- <div class="  item">
                    <a class="text " data-id="8" href="">行业简讯</a>
                </div> -->
                <div class="  item">
                    <a class="text " data-id="9" href="">大会直播</a>
                </div>
                <div class="  item">
                    <router-link to="./user">个人中心</router-link>
                </div>
                <!-- <router-view></router-view> -->
            </nav>
            <div class="login">
                <button @click="count1=!count1">
                    <!-- <i class="iconfont icon-yonghu"></i> -->
                    登录/
                </button>
                <button>注册</button>
            </div>
            <!-- <div class="individual login">
                <button>
                    <i class="iconfont icon-yonghu"></i>
                    <span>个人中心</span>
                </button>
                <button>
                    <span>退出</span>
                </button>
            </div> -->
        </div>
    </header>
</template>
<style scoped>
.row{
    z-index: 610;
}
.logo{
    display: flex;
    align-items: center;
    margin-right: 150px;
}
.login{
    display: flex;
}
header{
    background-color: rgb(0, 132, 247);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
}
img{
    height: 50px;
    width:100% ;
    vertical-align: middle;
}
.row{
    height: 75px;
    display: flex;
    margin-left:150px ;
    margin-right:150px ;
    font-size: 15px;
}
.row nav{
    display: flex;
    align-items: center;
    justify-content: center;
}
button{
    padding-block: 0px;
    padding-inline: 0px;
    border-width: 0px;
    font-size: 12px;
    color: white;
    background-color: rgb(0, 132, 247);
}
a,a:visited{
    color:white;
    text-decoration:none;
}
.logins{
    position: relative;
    z-index: 400;
}
nav a{
    margin-right: 30px;
}
.login_use{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 810;
    background-color: rgba(0, 0, 0, 0.4);;
}
.logins{
    width: 100%;
    height: 50%;
}
</style>