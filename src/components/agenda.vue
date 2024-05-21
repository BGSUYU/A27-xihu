<template>
    <div class="agenda" style="background-image: ">
        <div class="agenda_header">
            <strong>大会议程</strong>
            <div class="subheader">西湖论剑·数字安全大会</div>
        </div>
        <div class="agenda_body_1">
            <div class="agenda_body_2">
                <div class="body_header">
                    <strong>全部议程</strong>
                    <!-- <input>
                    <label></label> -->
                </div>
                <div class="conference_date">
                    <ul>
                        <!-- <li>全部</li>
                        <li>5月5日</li>
                        <li>5月6日</li>
                        <li>5月7日</li>
                        <li>5月8日</li> -->

                        <!-- <input type="checkbox">
                        <label>全部</label>
                        <input type="checkbox">
                        <label>5月5日</label>
                        <input type="checkbox">
                        <label>5月6日</label>
                        <input type="checkbox">
                        <label>5月7日</label>
                        <input type="checkbox">
                        <label>5月8日</label> -->

                        <button>全部</button>
                        <button>5月5日</button>
                        <button>5月6日</button>
                        <button>5月7日</button>
                        <button>5月8日</button>
                    </ul>
                </div>
                <div class="conference_type">
                    <ul>
                        <!-- <li>全部类型</li>
                        <li>主论坛</li>
                        <li>平行论坛</li>
                        <li>科普论坛</li>
                        <li>掌上论剑</li>
                        <li>生态合作论坛</li> -->

                        <!-- <input type="checkbox">
                        <label>全部类型</label>
                        <input type="checkbox">
                        <label>主论坛</label>
                        <input type="checkbox">
                        <label>平行论坛</label>
                        <input type="checkbox">
                        <label>科普论坛</label>
                        <input type="checkbox">
                        <label>掌上论剑</label>
                        <input type="checkbox">
                        <label>生态合作论坛</label> -->

                        <button>全部类型</button>
                        <button>主论坛</button>
                        <button>平行论坛</button>
                        <button>科普论坛</button>
                        <button>掌上论剑</button>
                        <button>掌上论剑</button>
                    </ul>
                </div>
                <div class="agenda_information">
                    <div class="date">
                        <p>5月5日  上午</p>
                    </div>
                    <div class="title">
                        <div class="main_tag"><strong>格致论道@西湖论剑</strong></div>
                        <div class="subtag"> 
                            <span><strong>科普论坛</strong></span>
                            <span><strong>观看回放</strong></span>
                        </div>
                    </div>
                    <div class="time-location">
                        <div class="time">10:00 - 10:30</div>
                        <div class="location">线上直播</div>
                    </div>
                    <div class="title">
                        <div class="main_tag"><strong>当科幻照进现实我们会更安全吗？</strong></div>
                        <div class="subtag"> 
                            <span><strong>科普论坛</strong></span>
                            <span><strong>观看回放</strong></span>
                        </div>
                    </div>
                    <div class="time-location">
                        <div class="time"> 13:00 - 13:30</div>
                        <div class="location">线上直播</div>
                    </div>
                    <div class="title">
                        <div class="main_tag"><strong>人工智能会颠覆安全行业吗？</strong></div>
                        <div class="subtag"> 
                            <span><strong>科普论坛</strong></span>
                            <span><strong>观看回放</strong></span>
                        </div>
                    </div>
                    <div class="time-location">
                        <div class="time"> 15:00 - 15:30</div>
                        <div class="location">线上直播</div>
                    </div>
                </div>
                
                <div class="agenda_information">
                    <div class="date">
                        <p>5月6日  上午</p>
                    </div>
                    <div class="title">
                        <div class="main_tag"><strong>主论坛</strong></div>
                        <div class="subtag"> 
                            <span><strong>科普论坛</strong></span>
                            <span><strong>观看回放</strong></span>
                        </div>
                    </div>
                    <div class="time-location">
                        <div class="time"> 09:00 - 12:00</div>
                        <div class="location"> 杭州洲际酒店·杭州厅</div>
                    </div>
                </div>
                <div class="agenda_information">
                    <div class="date">
                        <p>5月7日  下午</p>
                    </div>
                    <div class="title">
                        <div class="main_tag"><strong>数字中国&安全治理论坛</strong></div>
                        <div class="subtag"> 
                            <span><strong>科普论坛</strong></span>
                            <span><strong>观看回放</strong></span>
                        </div>
                    </div>
                    <div class="time-location">
                        <div class="time"> 13:30 - 18:00</div>
                        <div class="location">杭州洲际酒店·杭州厅</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.agenda{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 75px;
    width: 100%;
    min-height: 500px;
    background-image: url("./style/picture/agenda_bg.jpg");
    background-size: 100% auto;
    /* position: relative; */
}
.agenda_body_1{
    background-color: #fff;
    border:solid 25px #fff;
    border-radius: 20px;
    width: 78.5%;
}
.agenda_body_2{
    display: flex;
    flex-direction: column;
    margin-left:150px ;
    margin-right:150px ;
}
.conference_type button,.conference_date button{
    padding-block: 0px;
    width: 150px;
    padding-inline: 0px;
    border-width: 0px;
    margin-bottom: 30px;
    font-size: 20px;
    color: white;
    margin-right: 20px;
    background-image: linear-gradient(90deg, #3e3aff, #1bb196);
    border: solid 20px linear-gradient(90deg, #3e3aff, #1bb196);
    border-radius: 20px;
}
ul{
    padding-inline-start: 0px;
    list-style: none;
}
.body_header{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 30px;
    color: #1c70b5;
}
.agenda_information{
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    /* border-bottom: solid 1px #adadad; */
}
.date{
    display: flex;
    font-size: 25px;
    background: linear-gradient(to right, #694cfb, #70e5d0);
    width: 100%;
    height: 75px; 
    flex-flow: column;
    justify-content: center;
    padding-left: 50px;
    padding-right: 80px;
    color: #fff;
    margin-top: -0.1rem;
    margin-bottom: 25px;
}
.title{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.main_tag{
    display: flex;
    font-size: 30px;
    padding-left: 25px;
    border-left:solid 2px rgb(90, 112, 255);
    background: linear-gradient(to right, #78cdff, #ffffff);
}
.subtag span{
    color: #45aeeb;
    margin-left: 20px;
    font-size: 15px;
}
.time-location{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    border-bottom: solid 1px #d0d0d0;
    padding-bottom: 30px;
    margin-bottom: 30px;
}
.time{
    margin-right: 30px;
}
.time,.location{
    font-size: 15px;
}
.agenda_header{
    display: flex;
    flex-direction: column;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    margin-bottom: 50px;
    color: #fff;
}
.subheader{
    font-size: 15px;
}
</style>