<script setup>
</script>
<template>
    <div class="news_center">
        <div class="news_center_header" style="background-image: ">
            <p class="header">媒体中心</p>
        </div>
        <div class="news_center_choice">
            <router-link to="./news">行业简讯</router-link>
            <router-link to="./wonderful_picture">精彩图片</router-link>
            <router-link to="./wonderful_video">精彩视频</router-link>
            <router-link to="./download">资料下载</router-link>
        </div>
        <RouterView></RouterView>
        <!-- <news/>
        <news/> -->
        <!-- <wonderful_picture/> -->
        <!-- <wonderful_video/> -->
        <!-- <download/> -->
    </div>
    <div class="news">
        <div class="pic_1">
            <span  style="background-image: "></span>
        </div>
        <div class="body">
            <div class="header1"><strong>第七届西湖论剑·中国杭州网络安全技能大赛决赛在杭州举行</strong></div>
            <div class="logo-time">
                <div class="logo">
                    <p></p>
                </div>
                <div class="time">2024-03-31</div>
            </div>
            <div class="information">
                <p>3月30日，第七届西湖论剑·中国杭州网络安全技能大赛决赛在杭州市滨江区体育馆举行，大赛以“人才：数字安全创新引擎”为主题，分为网络攻防实战赛、创新挑战赛、可信众测赛三...</p>
            </div>
            <div class="subtag">推荐</div>
        </div>
    </div>
    <div class="news">
        <div class="pic_2">
            <span style="background-image: "></span>
        </div>
        <div class="body">
            <div class="header1"><strong>【重磅干货】大家都关心的嘉宾PPT下载指南来啦！</strong></div>
            <div class="logo-time">
                <div class="logo">
                    <p></p>
                </div>
                <div class="time">2023-05-12</div>
            </div>
            <div class="information">
                <p>指路贴来啦！大家都关心的嘉宾PPT下载指南在这里！一图解锁西湖论剑官网&小程序下载路径，看众多专家真知灼见，干货满满 ，引领行业思辨...</p>
            </div>
            <div class="subtag">推荐</div>
        </div>
    </div>
    <div class="news">
        <div class="pic_3">
            <span style="background-image: "></span>
        </div>
        <div class="body">
            <div class="header1"><strong>2023西湖论剑·数字安全大会举办</strong></div>
            <div class="logo-time">
                <div class="logo">
                    <p></p>
                </div>
                <div class="time">2023-05-08</div>
            </div>
            <div class="information">
                <p>央广网杭州5月8日消息(记者 姜頔)自山下而仰山巅谓之高远，自山前而窥山后谓之深远，自近山而望远山谓之平远。5月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会在杭州成功举办...</p>
            </div>
            <div class="subtag">推荐</div>
        </div>
    </div>
    <div class="news">
        <div class="pic_4">
            <span style="background-image: "></span>
        </div>
        <div class="body">
            <div class="header1"><strong>西湖论剑暨安恒信息年度新品发布会在杭州举行</strong></div>
            <div class="logo-time">
                <div class="logo">
                    <p></p>
                </div>
                <div class="time">2023-04-19</div>
            </div>
            <div class="information">
                <p>人民网杭州4月19日电 （叶宾得）今天，西湖论剑暨安恒信息首次年度新品发布会在杭州举行，发布会以“新·见未来 实·现梦想”为主题，介绍安恒“MSS+数据安全”两大战略新进展、发布新产品，并为2023年市场方向进行布局...</p>
            </div>
            <div class="subtag">推荐</div>
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
    margin-bottom: 50px;
}
.news{
    display: flex;
    flex-direction: row;
    align-items:center ;
    margin-left: 150px;
    border-bottom: solid 1px #c7c7c7;
    padding-bottom: 50px;
    padding-top: 50px;
}
.logo{
    background-color: rgb(0, 110, 255);
}
.time{
    font-size: 12px;
    color: rgb(178, 179, 179);
    padding-bottom: 20px;
}
.information{
    font-size: 12px;
    color: rgb(143, 144, 145);
    padding-bottom: 10px;
}
.subtag{
    background-image: linear-gradient(90deg,#f95858,#fff);
    padding-left: 20px;
    border-radius: 5px;
    width: 10%;
    /* margin-bottom: 40px; */
}
.header1{
    display: flex;
    align-items:center ;
    font-size: 20px;
    padding-bottom: 10px;
}
.pic_1 span{
    display: block;
    background-image: url('./style/picture/news_pic.jpg');
    height: 160px;
    width: 300px;
    background-size: cover;
    margin-right: 30px;
}
.pic_2 span{
    display: block;
    background-image: url('./style/picture/news_2.jpg');
    height: 160px;
    width: 300px;
    background-size: cover;
    margin-right: 30px;
}
.pic_3 span{
    display: block;
    background-image: url('./style/picture/news_3.jpg');
    height: 160px;
    width: 300px;
    background-size: cover;
    margin-right: 30px;
}
.pic_4 span{
    display: block;
    background-image: url('./style/picture/news_4.jpg');
    height: 160px;
    width: 300px;
    background-size: cover;
    margin-right: 30px;
}
.body{
    display: flex;
    flex-direction: column;
}
</style>