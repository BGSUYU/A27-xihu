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
    <div class="download">
        <div class="download_header">
            <span class="cn">资料下载</span>
            <span class="en">Download</span>
        </div>
            <ul class="download_body" style="background-image:">
                <li class="downheader">
                    <div class="down">
                        <p>信息技术应用创新分论坛-构建信创安全领航者 共筑信创生态共同体 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>主论坛-数据安全：保障数据高效合理开发利用的基石 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>主论坛-上海“一网统管”的探索与实践 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>主论坛-安全：赋能数据开放、激活数据价值 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>反诈宝典 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>无人机系统安全白皮书 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>防范电信网络诈骗科普分论坛-让分享更安全——抗压缩“隐形衣 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>防范电信网络诈骗科普分论坛-网络空间生存法则 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>工业互联网安全分论坛-安联纵横 · 智维感知 ——暨工业互联网安全态势感知技术与发布 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>工业互联网安全分论坛-工业互联网“1+N”发展布局 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>防范电信网络诈骗科普分论坛-数字时代下的电信网络诈骗及防范 </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>大数据环境下隐私保护与风险管控技术(2020) </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>金融科技安全挑战与展望(2020) </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>UEBA白皮书(2020) </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>不凡之路无捷径，携手共建真生态(2020) </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>主论坛-构建loT端的自适应保护体系（2019） </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>主论坛-智能自适应：闭环安全最后一公里（2019） </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>主论坛-加快工业互联网数据安全能力建设切实护航我国制造业高质量发展（2019） </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>主论坛-贯彻落实“4.19讲话”精神  为建设网络强国努力奋斗（2019） </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>智慧医疗安全高峰论坛-医疗行业勒索病毒防范（2019） </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>运营商网络安全分论坛-基于开源软件的网络纵深防御系统（2019） </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>智慧医疗安全高峰论坛-AiLPHA大数据安全分析应用于医疗网络安全闭环的实践（2019） </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>智慧医疗安全高峰论坛-AiLPHA大数据安全分析应用于医疗网络安全闭环的实践（2019） </p><a href="" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>运营商网络安全分论坛-5G移动通信网络安全（2019） </p>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>运营商网络安全分论坛-运营商云安全解决方案新思路(2019) </p><a href="" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>云安全分论坛-云领数聚 安全护航(2019) </p><a href="" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>云安全分论坛-云安全与物联网安全实践(2019) </p><a href="" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>威胁情报及应急响应分论坛-中国社群网络安全协作之国际化(2019) </p><a href="" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>网络安全人才与道德培养分论坛-信息安全从业人员调研报告预告(2019) </p><a href="/uploadfile/2019/04/28/20190428142817oNqCDi.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>网络安全人才与道德培养分论坛-《信息安全专业规范（第二版）》(2019) </p><a href="/uploadfile/2019/04/28/201904281424169eh807.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>网络安全人才与道德培养分论坛-专企融合校企合作模式的信息安全专业建设(2019) </p><a href="/uploadfile/2019/04/28/20190428142225mg3qso.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>数字经济和智慧城市安全分论坛-智慧城市实施路径构想(2019) </p><a href="/uploadfile/2019/04/28/20190428142120qmDu94.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>数字经济和智慧城市安全分论坛-城市安全运营中心AISCO平台(2019) </p><a href="/uploadfile/2019/04/28/20190428141834RreN8T.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>数据安全治理和个人信息保护分论坛-数据安全的若干误解(2019) </p><a href="/uploadfile/2019/04/28/20190428141714iIqFcS.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>数据安全治理和个人信息保护分论坛-数据安全保障工程（2019） </p><a href="/uploadfile/2019/04/28/20190428141623quOLPI.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>西湖论剑-新时代，新安全(2018) </p><a href="/uploadfile/2019/04/01/20190401141640q2axbF.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>数据安全治理和个人信息保护分论坛-企业技术信息（数据）的商业秘密保护（2019） </p><a href="/uploadfile/2019/04/28/20190428141550h3Gl5R.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>数据安全治理和个人信息保护分论坛-企业技术信息（数据）的商业秘密保护（2019） </p><a href="/uploadfile/2019/04/28/20190428141550h3Gl5R.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>数据安全治理和个人信息保护分论坛-大数据交易与处理中的数据脱敏技术研究（2019） </p><a href="/uploadfile/2019/04/28/20190428141453psyHZb.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>首席安全官（CSO）高峰论坛-用中医理念为企业安全把脉（2019） </p><a href="/uploadfile/2019/04/28/201904281413516JaXQ0.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>新技术领域的风险识别和解决方案(2018) </p><a href="/uploadfile/2019/04/01/20190401141506Oix5Vd.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>信核数据存储和容灾系统(2018) </p><a href="/uploadfile/2019/04/01/20190401141434qg0Ej2.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>智能之源 安全之本(2018) </p><a href="/uploadfile/2019/04/01/201904011413253x4wHD.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
                <li class="downheader">
                    <div class="down">
                        <p>Olympic Destroyer Westlake Conference China(2018) </p><a href="/uploadfile/2019/04/01/20190401141241ARYuvH.pdf" target="_blank" class="download" data-bs-toggle="modal" data-bs-target="#SMS_modal"><i class="iconfont icon-down1"></i></a>
                    </div>
                </li>
            </ul>
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
.download_body,.download_header{
    margin-left: 150px;
    margin-right: 150px;
}
.download_header{
    padding: 30px;
    font-size: 40px;
}
ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
}
.download_body{
    padding: 50px 60px;
    display: flex;
    flex-wrap: wrap;
    font-size: 17px;
    background-image: url('./style/picture/downloadbg.png');
}
.down{
    padding: 20px 30px;
}
p{
    margin-block-start: 0em;
    margin-block-end: 0em;
}
.downheader{
    width: 50%;
}
.en{
    margin-left: 20px;
    font-size: 15px;
}
</style>