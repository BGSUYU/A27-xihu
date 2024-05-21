<script setup>
// import {ref} from 'vue'
var shrink='展开'
// var num1=ref(0)
// if(num1==0){
//     shrink='收拢'
// }
// else{
//     shrink='展开'
// }
</script>
<template>
    <div>
        <div class="about_head" style="background-image: ">
            <div class="about_logo">            
                <p>关于大会</p>
            </div>
        </div>
        <div class="about_body">
            <div class="about_conference">
                <div class="videos">
                    <video src="./style/video/about_video.mp4" muted="muted" loop="loop"   autoplay></video>
                </div>
                <div class="conference" style="background-image: ">
                    <div class="conference_2">
                        <p class="conference_content">大会介绍</p>
                        <p class="conference_content_en">About Conference</p>
                        <div class="conference_main">
                            <p>西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”。历届大会期间，国家部委、省市领导，院士、知名专家和优秀企业代表齐聚杭州，共商数字时代的安全之道。</p>
                            <p>2023年是全面贯彻落实党的二十大精神的开局之年，为深入学习贯彻党的二十大精神，推动落实《数字中国建设整体布局规划》尤其是筑牢数字安全屏障的要求，推进数字安全人才培养、科技创新、产业融合发展，以保障数字政务、数字经济、数字社会等数字化生态安全发展。在迎来大会十一年之际，由“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。</p>
                            <p>本届大会主题为“数字安全@数字中国”，大会将邀请相关政府部门、科研院所，以及数字生态各领域的参与者、构建者、守护者，共同探讨数字中国的发展和安全之道。大会将设主论坛、数字安全成果展、多个平行论坛及研讨会，结合数字安全前沿技术、行业应用、人才培养、企业治理等议题展开讨论、展示成果。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="conference_highlight">
                <div class="highlight_logo">大会亮点</div>
                <div class="conference_data">
                    <ul class="data">
                        <li class="information_1">
                            <p class="information1">100款+新品</p>
                            <p class="information2">精细打磨，产品卓越</p>
                            <p class="information3">我们聚焦产品、新技术、新方案，为网络安全专业人士最新的技术工具。</p>
                        </li>
                        <li class="information_2">
                            <p class="information1">67场论坛 510场主题演讲</p>
                            <p class="information2">论坛荟萃，精英共议</p>
                            <p class="information3">我们精心策划，与行业精英们共同探讨网络空间的多元风险和挑战。</p>
                        </li>
                        <li class="information_3">
                            <p class="information1">20+本白皮书</p>
                            <p class="information2">深挖成果，创新引领</p>
                            <p class="information3">我们深入挖掘网络安全技术成果，以创新驱动发展，赋能行业发展新动能。</p>
                        </li>
                        <li class="information_4">
                            <p class="information1">14位院士</p>
                            <p class="information2">高峰智慧，指引前行</p>
                            <p class="information3">我们将院士智慧汇聚于此，畅谈网络安全行业新技术、新风向、新趋势。</p>
                        </li>
                    </ul>
                </div>
                <!-- <div class="conference_information">
                    <div class="information_head">议题更前沿</div>
                    <div class="information_body">大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作。</div>
                    <a></a>
                    <button></button>
                </div>
                <div class="conference_information">
                    <div class="information_head">线上更精彩</div>
                    <div class="information_body">“掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。</div>
                </div>
                <div class="conference_information">
                    <div class="information_head">成果更显著</div>
                    <div class="information_body">将推出国内首份《2023中国数字安全能力洞察报告》，报告涵盖趋势、科技、人才、实践等多部分内容，引领行业发展方向。</div>
                </div>
                <div class="conference_information">
                    <div class="information_head">成果更显著国际化更深入</div>
                    <div class="information_body">峰会将通过引入国际组织、设置国际话题等，从全球角度研判数字化进程和趋势。</div>
                </div>
                <div class="shrink">
                    <button>{{ shrink }}    +</button>
                </div> -->
            </div>
            <div class="past_header">往期回顾</div>
            <div class="pastreview">
                <div class="past_information">
                    <!-- <div class="img_main">
                        <span class="img" style="background-image:"></span>
                    </div> -->
                    <img src="./style/picture/past_1.webp" alt="">
                    <p>2022年西湖论剑·网络安全大会由浙江省互联网信息办公室、 浙江省经济和信息化厅、浙江省公安厅、浙江省科学技术协会、浙江省工商业联合会、 浙江省通信管理局、杭州市人民政府主办，拟于2022年7月2日-3日召开，主题为“构建安全可信的数字世界” 。  作为国内首个进入十年的网络安全大会，本次大会将首设北京、杭州双主场 ，大会议题聚焦“两法一条例”落地实施、 助力 “ 浙江数字化改革 ”  高质量发展等方向 ...</p>
                    <!-- <div class="shrink">
                        <button>{{ shrink }}    +</button>
                    </div> -->
                </div>
                <div class="past_information">
                    <img src="./style/picture/past_2.webp" alt="">
                    <p>2021年的西湖论剑大会于4月24日在杭州国际博览中心举办，本届大会主题为 “安全：数字化改革之根基”。届时，大会邀请相关主管部门领导、国内外知名专家学者、网络信息安全行业从业者们，共同解读中国网络信息安全产业政策、法规、行业标准等，厘清网络信息安全发展方向。</p>
                    <!-- <div class="shrink">
                        <button>{{ shrink }}    +</button>
                    </div> -->
                </div>
                <div class="past_information">
                    <img src="./style/picture/past_3.webp" alt="">
                    <p>2020西湖论剑·网络安全线上峰会，主题为“数治安全 智理未来”。通过北京、杭州两地直播间同步连线直播的形式，聚焦后疫情时代的网络安全新业态、新模式，延续两会的热议话题，邀请政府主管部门领导、知名专家学者和网络安全专家“云聚集”，系统解读数字中国发展浪潮中的智慧城市安全、大数据安全、云安全、5G安全、工业互联网安全等多领域方向的最新成果，共推数字世界新时代。峰会设立1个主论坛，6个分论坛 ...</p>
                    <!-- <div class="shrink">
                        <button>{{ shrink }}    +</button>
                    </div> -->
                </div>
            </div>
                <div class="shrink">
                    <button style="background-image:">{{ shrink }}    +</button>
                </div>
        </div>
    </div>
</template>
<style scoped>
.about_head{
    display: flex;
    align-items: center;
    /* background-color: blue; */
    background-image: url("./style/picture/about_bg.webp");
    background-image: cover;
    margin-top: 75px;
    min-height: 500px;
}
.about_logo{
    margin-left:150px;
    margin-right:150px;
}
.about_logo p{
    font-size: 45px;
    color: white;
}
.about_body{
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    margin-left:150px;
    margin-right:150px ;
}
.about_conference{
    width: 100%;
    display: flex;
    flex-direction:row;
    /* flex-direction: column; */
}
.videos{
    width: 56%;
    /* position: relative; */
    overflow: hidden;
    float: left;
    z-index: -1;
    height:390px;
}
video{
    width: 100%;
}
.conference{
    float: left;
    background: url(../img/about_2.jpg) no-repeat center center / cover;
    width: 52%;
    height: 390px;
    margin-top: 8%;
    margin-left: -8%;
    padding-left: 10%;
    padding-right:10% ;
    padding-top: 3rem;
    color:#fff;
}
p{
    margin-block-start: 0em;
    margin-block-end: 0em;
}
.conference{
    z-index: -2;
    flex-direction: column;
    /* background-color: aqua; */
    background-image: url('./style/picture/about_2.jpg');
    background-size: cover;
    /* border-left: 10px; */
    float: left;
}
/* video{
    width: 99%;
} */
.conference_highlight{
    display: flex;
    flex-direction: column;
}
.data{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
li{
    background-color: aquamarine;
    /* border: solid 5px aquamarine; */
    /* border-radius: 10px; */
    margin: 5px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.conference_data{
    display: flex;
    justify-content: center;
}
.data p{
    margin-left: 75px;
}
.highlight_logo,.past_header{
    font-size: 40px;
    margin-top: 75px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    color:  #1bb196
}
ul,
li{
    padding-inline-start: 0px;
    list-style: none;
}
.information1{
    font-size: 20px;
    margin-bottom: 25px;
}
.information2{
    font-size: 30px;
    margin-bottom: 25px;
}
.pastreview{
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-between;
}
.past_information{
    width: 30%;
    /* margin-left: 30px; */
    /* margin-right: 30px; */
    /* height: 300px; */
    display: flex;
    flex-direction: column;
}
.past_header{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    margin-bottom: 40px;
}
.shrink{
    display: flex;
    justify-content: center;
}
.conference_2{
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 30px;
}
.conference_content{
    font-size: 30px;
}
.conference_content_en{
    font-size: 15px;
    margin-bottom: 20px;
}
.conference_main p{
    font-size: 13px;
}
.information_1,.information_3{
    background-image: url('./style/picture/index_p1.jpg');
    background-size: cover;
}
.information_2,.information_4{
    background-image: url('./style/picture/index_p2.jpg');
    background-size: cover;
}
.information_1,.information_2,.information_3,.information_4{
    margin-bottom: 30px;
    color: white;
}
span{
    width: 100%;
    height: 100%;
    display: block;
    background-image: url('./style/picture/past_1.webp');
    background-size: cover;
}
button{
    padding-block: 0px;
    padding-inline: 0px;
    border-width: 0px;
    font-size: 30px;
    color: white;
    background-image: linear-gradient(90deg,#4f87f9,#b971f9);
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>