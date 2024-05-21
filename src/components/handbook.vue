<script>

</script>
<template>
    <div class="headers">
        <span class="cn">参展指南</span>
    </div>
    <div class="handbook">
        <div class="hall_plan">
            <div class="container">
                <p class="header">大会场馆</p>
                <p class="subtag">Hall Plan</p>
                <div class="choice">
                    <ul>
                        <p class="choice_1">杭州洲际酒店</p>
                    </ul>
                </div>
                <div class="pic">
                    <img src="./style/picture/hall1.webp" alt="">
                </div>
            </div>
        </div>
        <div class="transport">
            <div class="container">
                <p class="header">大会交通</p>
                <p class="subtag">Transport</p>
                <div class="methods">
                    <div class="method">
                        <div class="method_header">杭州萧山国际机场—杭州洲际酒店</div>
                        <div class="method_body">搭乘地铁7号线（吴山广场方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。</div>
                        <div class="method_body">路程25公里 时间约50分钟 车费60元左右</div>
                    </div>
                    <div class="method">
                        <div class="method_header">杭州东站—杭州洲际酒店</div>
                        <div class="method_body">搭乘地铁4号线（浦沿方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。</div>
                        <div class="method_body">路程7公里时长约20分钟车费20元左右。</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hotel_commodation">
            <div class="container">
                <p class="header">酒店住宿</p>
                <p class="subtag">Hotel Accommodation</p>
            </div>
        </div>
        <div class="sign_in">
            <div class="container">
                <p class="header">大会签到</p>
                <p class="subtag">Sign In</p>
                <div class="sign_information">
                    <div class="sign_information_main">
                        <div class="location">
                            <div class="maintag">签到位置</div>
                            <div class="sub_tag">杭州洲际酒店正门入口</div>
                        </div>
                        <div class="time">
                            <div class="maintag">签到时间</div>
                            <div class="sub_tag">
                                <p>5月7日 上午 08:00-9:00 下午13:00-13:30</p>
                                <p>5月8日 上午 08:00-9:00 下午13:00-13:30</p>
                            </div>
                        </div>
                        <div class="flow">
                            <div class="maintag">签到流程</div>
                            <div class="sub_tag">通过大会【短信】签到，领取大会胸卡</div>
                        </div>
                    </div>
                    <div class="sign_information_sub">
                        <p>嘉宾领取大会胸卡须知:</p>
                        <p>① 嘉宾自行领取个人参会胸卡，不代领</p>
                        <p>② 每位嘉宾专属码只有一次领证时效，不可重复领取</p>
                        <p>③ 大会胸卡将作为参会期间唯一身份认证，遗失无补，请妥善保管</p>
                        <p>④ 嘉宾在会议期间需全程佩戴</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact_person">
            <div class="container">
                <p class="header">联系我们</p>
                <p class="subtag">Contact Person</p>
                <div class="person">
                    <div class="person_1">
                        <p class="name">
                            <span>薛女士</span>
                            <span>会务咨询</span>
                        </p>
                        <p class="phone_number">+86-13810244613</p>
                        <p class="email">mia.xue@dbappsecurity.com.cn</p>
                    </div>
                    <div class="person_1">
                        <p class="name">
                            <span>朱女士</span>
                            <span>商务合作</span>
                        </p>
                        <p class="phone_number">+86-15988310161</p>
                        <p class="email">yuki.zhu@dbappsecurity.com.cn</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.headers{
    display: flex;
    height: 400px;
    font-size: 50px;
    color: white;
    background-image: url('./style/picture/handbook_bg.jpg');
    background-size: cover;
    margin-top: 75px;
    align-items:center ;
    margin-bottom: 75px;
}
.container{
    display: flex;
    flex-direction: column;
    margin-left: 150px;
    margin-right:150px;
}
.cn{
    display: flex;
    align-items: center;
    margin-left: 150px;
    height: 400px;
}
.header,.subtag{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}
.subtag{
    margin-bottom: 50px;
}
.hall_plan_header{
    font-size: 20px;
}
.hall_plan_subtag{
    font-size: 15px;
}
.choice{
    display: flex;
    margin-top: 50px;
    margin-bottom: 25px;
    justify-content: center;
}
ul{
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-inline-start: 0px;
}
img{
    width: 100%;
}
.methods{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 50px;
    padding-bottom:50px ;
}
.method_header{
    font-size: 20px;
    margin-bottom: 30px;
}
.method_body{
    font-size: 13px;
    margin-bottom: 15px;
}
</style>