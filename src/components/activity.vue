<template>
    <div class="bg"></div>
    <div class="activity" style="background-image: ">
        <div class="activity_header">精彩活动</div>
        <div class="activity_body">
            <div class="sort">
                <button>全部</button>
                <button>格致论道</button>
                <button>安全特训营</button>
                <button>直播探展</button>
                <button>24小时直播间</button>
                <button>创新案例实践征集</button>
                <button>西湖论剑十一周年回顾</button>
            </div>
            <div class="activities_information">
                <div class="block">
                    <div class="header">
                        格致论道@西湖论剑
                        <button class="into">+订阅</button>
                    </div>
                    <p class="information">“格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展</p>
                    <div class="footer">
                        2023-05-05 18:30 - 21:45       1280人预约
                        <button class="understand">了解详情</button>
                    </div>
                </div>
                <div class="block2">
                        <a href="###" style="background-image:"></a>
                </div>
            </div>
            <div class="activities_information">
                <div class="block">
                    <div class="header">
                        西湖论剑安全特训营·网络攻防蓝队实战技法进阶班
                        <button class="into">+订阅</button>
                    </div>
                    <p class="information">本次培训面向网络安全从业人员，特别是负责网络安全防护的蓝队人员，以及有意向从事蓝队工作的人员。 培训所需具备的基础能力：应具备网络安全的基本知识，了解常见的网络攻击手法和防御策略，掌...</p>
                    <div class="footer">
                        2023-05-04 09:00 - 18:00 
                        <button class="understand">了解详情</button>
                    </div>
                </div>
                <div class="block3">
                        <a href="###" style="background-image:"></a>
                </div>
            </div>
            <div class="activities_information">
                <div class="block">
                    <div class="header">
                        西湖论剑安全特训营·数字安全官高级研修班
                        <button class="into">+订阅</button>
                    </div>
                    <p class="information">作为整个企业安全治理结构的设计者和践行人，数字安全官即需要了解国家、行业合规需求与发展趋势，还要洞悉数字经济背景下企业所需的安全能力，协助企业提升安全能力建设的成熟度。本次培训以塑</p>
                    <div class="footer">
                        2023-05-04 09:00 - 18:00 
                        <button class="understand">了解详情</button>
                    </div>
                </div>
                <div class="block4">
                        <a href="###" style="background-image:"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.activity{
    /* width: 100%; */
    background-image: url("./style/picture/activity_banner.jpg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    min-height: 500px;
    margin-top: 75px;
    padding-left: 150px;
    padding-right: 150px;
}
.activity_header{
    display: flex;
    align-self: center;
    padding-top:50px;
    margin-bottom: 50px;
    color: #fff;
    /* justify-content: center; */
    font-size: 30px;
    /* color: #fff; */
}
.activity_body{
    display: flex;
    flex-direction: column;
    background-color: #c4fcf6;
    padding-top: 75px;
    border-radius: 50px;
    padding-left: 50px;
    padding-right:50px ;
}
.sort{
    display: flex;
    /* justify-content: space-between; */
    width: 100%
}
.sort button{
    width: 16%;
    font-size: 14px;
    height: 40px;
    /* padding: 20px; */
    /* border: solid 5px linear-gradient(90deg, #00ffe5, #1bb196);  */
    border-radius: 20px;
    color: #fff;
    /* margin-left: 50px; */
    margin-right: 20px;

    padding-block: 0px;
    padding-inline: 0px;
    border-width: 0px;
    /* font-size: 12px; */
    /* color: white;
    background-color: rgb(0, 132, 247); */
    background-image: linear-gradient(90deg, #00ffe5, #1bb196);
}
.activities_information{
    background-color: #e4f7f5;
    height: 300px;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 75px;
}
.block{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 50px;
}
.block2,.block3,.block4{
    display: flex;
    width: 45%;
    /* height: 30%; */
    /* height: 37.5rem; */
}
.block2 a{
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("./style/picture/activity_1.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    text-decoration:none;
}
.block3 a{
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("./style/picture/activity_2.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    text-decoration:none;
}
.block4 a{
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("./style/picture/activity_3.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    text-decoration:none;
}
.block2 a:visited,.block3 a:visited,.block4 a:visited{
    text-decoration: none;
}
.header,.footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.header{
    display: flex;
    flex-direction: row;
    font-size: 30px;
    /* font-weight: 1000px; */
}
.header button{
    padding-block: 0px;
    padding-inline: 0px;
    border-width: 0px;

    background-image:linear-gradient(90deg,#1900f9,#00d0ff);
    color: #9af1ff;
    border-radius: 20px;
    height: 30px;
    width: 100px;
}
.footer button{
    padding-block: 0px;
    padding-inline: 0px;
    border-width: 0px;
    background-image:linear-gradient(90deg,#a59bfd,#007bff);
    color: #fff;

    height: 30px;
    width: 150px;
    border-radius: 30px;
}
.information{
    padding-right: 150px;
    font-size: 15px;
}
.footer{
    font-size: 13px;
}
</style>