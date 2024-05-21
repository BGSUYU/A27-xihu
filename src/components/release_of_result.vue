<script setup>

</script>
<template>
    <div id="app">
        <div class="banner" style="background-image:">
            <div class="release_header">
                <h1 class="header">成果发布</h1>
            </div>
        </div>
        <div class="white_paper">
            <div class="paper_header">
                <span class="cn">白皮书</span>
                <span class="en">White Paper</span>
            </div>
            <div class="paper_body"></div>
        </div>
        <div class="new_product">
            <div class="product_header">
                <span class="cn">新品发布</span>
                <span class="en">New Product Launch</span>
            </div>
        </div>
        <div class="books">
            <div class="books_header">
                <span class="cn">书籍</span>
                <span class="en">Books</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.banner{
    margin-top: 75px;
    height: 400px;
    background-image: url('./style/picture/release_bg.jpg');
    background-size: cover;
}
.release_header{
    display: flex;
    height: 400px;
    margin-left: 150px;
    margin-right: 150px;
    align-items: center;
}
.header{
    font-size: 50px;
    color: white;
}
.white_paper,.new_product,.books{
    margin-left: 150px;
    margin-right: 150px;
}
.paper_header,.product_header,.books_header{
    padding-top: 50px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cn{
    font-size: 30px;
}
.en{
    font-size: 15px;
}
</style>