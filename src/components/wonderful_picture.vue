<script setup>

</script>
<template>
        <div class="news_center">
            <div class="news_center_header" style="background-image: ">
                <p class="header">媒体中心</p>
            </div>
            <div class="news_center_choice">
                <router-link to="./news">新闻中心</router-link>
                <router-link to="./wonderful_picture">精彩图片</router-link>
                <router-link to="./wonderful_video">精彩视频</router-link>
                <router-link to="./download">资料下载</router-link>
            </div>
            <RouterView></RouterView>
            <!-- <news/>
            <news/>
            <news/> -->
            <!-- <wonderful_picture/> -->
            <!-- <wonderful_video/> -->
            <!-- <download/> -->
        </div>
        <div class="pic_choice">
            <button>全部</button>
            <button>精彩回顾</button>
            <button>大会预热</button>
        </div>
        <div class="picture_body">
            <div class="pic">
                <img src="./style/picture/w_pic_1.jpg">
            </div>
            <div class="pic">
                <img src="./style/picture/w_pic_2.jpg">
            </div>
            <div class="pic">
                <img src="./style/picture/w_pic_3.jpg">
            </div>
        </div>
        <div class="picture_body">
            <div class="pic">
                <img src="./style/picture/w_pic_4.jpg">
            </div>
            <div class="pic">
                <img src="./style/picture/w_pic_5.jpg">
            </div>
            <div class="pic">
                <img src="./style/picture/w_pic_6.jpg">
            </div>
        </div>
</template>
<style scoped>
.news_center{
    margin-top: 75px;
    /* height: 400px; */
}
.news_center_header{
    background-image: url('./style/picture/newsheader_bg.jpg');
    background-size: cover;
}
.header{
    display: flex;
    align-items: center;
    font-size: 50px;
    margin-left: 150px;
    height: 400px;
    color: white;
    margin-block-start: 0em;
    margin-block-end: 0em;
}
.news_center_choice{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 150px; 
    margin-right: 150px;
}
.news_center_choice a{
    color: aquamarine;
    text-decoration:none;
    background-color: rgb(255, 255, 255);
    font-size: 20px;
    /* padding-left:30px;
    padding-right: 30px; */
    padding: 30px;
    margin-left: 50px;
    margin-right: 50px;
    border-bottom: solid 1.5px #a7a7a7;
    /* padding-block: 0px;
    padding-inline: 0px; */
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    /* border: 0px 0px 0px; */
}
.news_center_choice{
    margin-bottom: 80px;
}
.picture_body{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 150px;
    margin-right: 150px;
}
.pic_choice{
    display: flex;
    flex-direction: row;
    margin-left: 150px;
    margin-right: 150px;
    align-items: center;
    justify-content: center;
    margin-bottom: 75px;
}
.pic_choice button{
    /* padding-block: 0px;
    padding-inline: 0px; */
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 20px;
    margin-right:20px ;
    border-width: 0px;
    font-size: 18px;
    background-image:linear-gradient(90deg,#8e8ef8,#6191fa);
    border-radius: 20px;
    /* color: white; */
    /* background-color: rgb(0, 132, 247); */
}
.pic{
    display: flex;
    /* width: 20%; */
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    /* margin-bottom:100px ; */
    margin-bottom: 50px;
}
.pic img{
    align-items: center;
    width: 400px;
    height: 250px;
    /* height: 50%; */
}
</style>