<script setup>
import {ref} from 'vue'
import user from "./components/user.vue";
import footers from "./components/footers.vue";
import navs from "./components/navs.vue";
import about from './components/about.vue';
import gether from './components/gether.vue';
import activity from './components/activity.vue';
import agenda from './components/agenda.vue';
import news_center from './components/news_center.vue';
import {createRouter} from 'vue-router';
import { RouterView } from 'vue-router';
const count1=ref(0)
function increment(){
  if(count1.value==0){
    count1.value=1
    console.log(count1.value)
  }
  else{
    count1.value=0
  }
}
</script>

<template>
  <div>
    <!-- <button @click="increment">
      登录
    </button> -->
    <!-- <login v-if="count1"></login> -->
    <!-- 当count1=0时点击出现,然后count1=1,需要解决在登录界面按X就能关闭登录页面 -->
    <!-- CSS解决将login渲染到页面顶层 -->
    <!-- 解决登录成功后将"登录"修改为"个人中心" -->
    <!-- 合理使用v-if就可以防止多次使用函数 -->
    <!-- <modifyInformation v-if="count1"></modifyInformation> -->
    <!-- <footers v-if="count1"></footers> -->
    <!-- <navs></navs> -->
    <navs/>
    <!-- <user></user> -->
    <!-- <about></about> -->
    <!-- <gether></gether> -->
    <!-- <agenda></agenda> -->
    <!-- <activity></activity> -->
    <!-- <news_center></news_center> -->
    <!-- <footers></footers> -->
    <RouterView></RouterView>
    <footers/>
  </div>
  <div>
  </div>
</template>

<style scoped>
</style>