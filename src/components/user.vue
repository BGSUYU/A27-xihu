<script setup>
import {ref} from 'vue'
import ModifyInformation from './modify-information.vue';
import handbook from './handbook.vue'
import { RouterLink, RouterView } from 'vue-router';
var count2=ref(0);

</script>
<template>
        <div v-if="count2" class="modifyInformate">
            <ModifyInformation class="modifys"></ModifyInformation>
        </div>
    <div class="user">
        <div class="user_head" style="background-image:">
            <!-- 初始样式,使用一张背景图片 -->
            <div class="user_h1">
                <h1 class="user_logo" style="">个人中心</h1>
            </div>
        </div>
        <div class="user_main">
            <div class="user_information">
                <p class="username">SU</p>
                <p class="audience_type">线上观众</p>
                <p class="score">我的积分</p>
                <button class="sign-in">
                    每日签到
                </button>
                <ul>
                    <li class="company">公司</li>
                    <!-- <li v-if="a">{{}}</li> -->
                    <li class="department">部门</li>
                    <li class="position">职位</li>
                    <li class="phonenumber">电话</li>
                    <li class="email">邮箱</li>
                </ul>
                <button class="modify" @click="count2=!count2">修改资料</button>
            </div>
            <div class="my_activity">
                <div class="my_nav">
                    <button>我的订阅</button>
                    <button>我的积分</button>
                </div>
                <div class="nav_information">
                    <div class="subscription_information">
                        <button>议程订阅</button>
                        <button>精彩活动订阅</button>
                        <a href="https://2023.gcsis.cn/attendance_guide/">大会指南</a>
                    </div>
                    <div class="score_information"></div>
                    <!-- <handbook/> -->
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.user_h1{
    display: flex;
    margin-top: 75px;
    margin-left:150px;
    margin-right:150px ;
    color: white;
}
.user_head{
    background-image: url("./style/picture/user_h1.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    height: 200px;
}
.user_information{
    width: 18%;
    margin-left:150px;
    margin-right:50px;
    background-color: white;
    border:solid 10px white;
    border-radius: 10px;
    margin-top: 50px;
}
.my_activity{
    display: flex;
    flex-direction: column;
    margin-right: 150px;
    width: 68%;
    background-color:  rgb(228, 248, 248);
    margin-top: 50px;
}
.my_nav{
    display: flex;
    align-items: center;
    background-color: white;
    height: 12%;
    width: 90%;
    border:solid 10px white;
    border-radius: 10px;
    margin-bottom: 20px;
}
.nav_information{
    background-color: white;
    width: 90%;
    border-radius: 10px;
    border:solid 10px white;
    min-height: 50%;
}
.user_main{
    background-color: rgb(228, 248, 248);
    display: flex;
    flex-direction:row;
    padding-bottom: 50px;
}
ul,
li{
    padding-inline-start: 0px;
    list-style: none;
}
.user_information li,.user_information button{
    margin-left: 25px;
    margin-bottom: 30px;
}
.user_information p{
    margin-left: 25px;
}
.audience_type{
    margin-top: 0;
}
button{
    padding-block: 0px;
    padding-inline: 0px;
    border-width: 0px;
    font-size: 20px;
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
}
.audience_type{
    display: flex;
    font-size: 15px;
    width: 30%;
    background-color: rgb(113, 185, 248);
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 50px;
}
.username{
    font-size: 25px;
    margin-bottom: 5px;
}
.score{
    font-size: 15px;
}
.my_nav button,.subscription_information button,.score_information button{
    margin-right: 30px;
    margin-left: 30px;
}
.subscription_information{
    margin-top: 30px;
}
.modifyInformate{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 810;
    background-color: rgba(0, 0, 0, 0.4);;
}
.modifys{
    width: 100%;
    min-height: 50%;
}
.modifys{
    position: relative;
    z-index: 400;
}
a,a:visited{
    padding-block: 0px;
    padding-inline: 0px;
    border-width: 0px;
    margin-left: 30px;
    margin-right: 30px;
    text-decoration:none;
    font-size: 20px;
    color: black;
}
</style>