<script setup>

</script>
<template>
    <div class="footers">
        <footer id="footer" class="container">
            <div class="bg"></div>
            <div class="organizer">
                <div class="col-6">
                    <h1>指导单位</h1>
                    <ul>
                        <li>
                            <a href="" target="_blank">浙江省互联网信息办公室</a>
                        </li>
                        <li>
                            <a href="" target="_blank">浙江省经济和信息化厅</a>
                        </li>
                        <li>
                            <a href="" target="_blank">浙江省公安厅</a>
                        </li>
                        <li>
                            <a href="" target="_blank">浙江省发展和改革委员会</a>
                        </li>
                        <li>
                            <a href="" target="_blank">浙江省通信管理局</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6">
                    <h1>主办单位</h1>
                    <li>
                        <a href="" target="_blank">杭州市人民政府</a>
                    </li>
                </div>
                <div class="col-6">
                    <h1>联合主办单位</h1>
                    <ul>
                        <li>
                            <a href="" target="_blank">中国信息通信研究院</a>
                        </li>
                        <li>
                            <a href="" target="_blank">中国网络空间研究院</a>
                        </li>
                        <li>
                            <a href="" target="_blank">国家工业信息安全发展研究中心</a>
                        </li>
                        <li>
                            <a href="" target="_blank">中国电子技术标准化研究院</a>
                        </li>
                        <li>
                            <a href="" target="_blank">工业和信息化部教育与考试中心</a>
                        </li>
                        <li>
                            <a href="" target="_blank">杭州市滨江区人民政府</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6">
                    <h1>承办单位</h1>
                    <ul>
                        <li>
                            <a href="" target="_blank">杭州市互联网信息办公室</a>
                        </li>
                        <li>
                            <a href="" target="_blank">杭州市经济和信息化局</a>
                        </li>
                        <li>
                            <a href="" target="_blank">杭州市公安局</a>
                        </li>
                        <li>
                            <a href="" target="_blank">杭州市发展和改革委员会</a>
                        </li>
                        <li>
                            <a href="" target="_blank">浙江省网络空间安全协会</a>
                        </li>
                        <li>
                            <a href="" target="_blank">安恒信息</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6">
                    <h1>战略合作媒体</h1>
                    <ul>
                        <li>
                            <a href="" target="_blank">新华网</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6">
                    <h1>特别支持媒体</h1>
                    <ul>
                        <li>
                            <a href="" target="_blank">光明网</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer_nav">
                <div class="footer_left">
                    <a href="/" class="footer_logo">
                        <img src="./style/picture/2024(2).png" alt="">
                    </a>
                    <div class="privacyProtocol">
                        <a href="/privacy">隐私协议</a>/<a href="/service">服务条款</a>
                    </div>
                </div>
                <div class="footer_center">
                    <ul>
                        <li>
                            <a href="/" data-id="0">首页</a>
                        </li>
                        <li>
                            <a href="/agenda" data-id="1">大会议程</a>
                        </li>
                        <li>
                            <a href="/about" data-id="2">关于大会</a>
                        </li>
                        <li>
                            <a href="/expert" data-id="3">大咖云集</a>
                        </li>
                        <li>
                            <a href="/wonderful_activity" data-id="4">精彩活动</a>
                        </li>
                        <li>
                            <a href="/exhibitor" data-id="5">展商风采</a>
                        </li>
                        <li>
                            <a href="/results" data-id="6">成果发布</a>
                        </li>
                        <li>
                            <a href="/news" data-id="7">媒体中心</a>
                        </li>
                        <li>
                            <a href="/attendance_guide" data-id="8">参会指南</a>
                        </li>
                        <li>
                            <a href="/agendaLive" data-id="9">大会直播</a>
                        </li>
                    </ul>
                    <div class="copyright">
                        <p>
                            <span> © 杭州安恒信息技术股份有限公司</span>
                            <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备09102757号-28</a>
                            <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35018102000550" target="_blank">浙公网安备 33010802009170号</a>
                        </p>
                    </div>

                </div>
                <div class="footer_right">
                    <img src="" alt="扫码进入小程序">
                    <p>扫码进入小程序</p>
                </div>
            </div>
        </footer>
    </div>
</template>
<style scoped>
.footer_left{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.footers{
    background-color: #f5f5f5;
}
#footer{
    display: flex;
    flex-direction:column;
    /* margin-top: 1000px; */
    margin-left:150px ;
    margin-right:150px ;
}
.organizer{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    border-bottom:solid;
}
.col-6{
    margin-bottom: 50px;
    width: calc((100% / 24)* 6);
}                 
.footer_nav{
    justify-content: space-between;
    display: flex;
}
.footer_center{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.footer_center ul{
    display: flex;
}
.footer_center li{
    margin-right: 20px;
}
/* .organizer.col-6{
    border: 10px splid rgba(0, 0, 0,.6);
}                                           */
ul,
li{
    padding-inline-start: 0px;
    list-style: none;
}
ul{
    margin-block-start: 2em;
    margin-block-end: 2em;
}
.organizer li{
    margin-bottom:5px;
}
.organizer a{
    font-size: 13px;
}
h1{
    font-size: 20px;
}
.footer_nav a{
    font-size: 15px;
}
a,a:visited{
    color:black;
    text-decoration:none;
}
.copyright{
    display: flex;
    align-items: end;
}
.copyright a,
.copyright span{
    font-size: 12px;
}
img{
    height: 50px;
    width:100% ;
    vertical-align: middle;
    margin-bottom: 30px;
}
.privacyProtocol a{
    font-size: 12px;
}
</style>