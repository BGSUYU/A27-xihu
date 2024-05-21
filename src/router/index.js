import { createRouter, createWebHashHistory } from "vue-router";
import user from "@/components/user.vue";
import footers from "@/components/footers.vue";
import navs from "@/components/navs.vue";
import about from '@/components/about.vue';
import gether from '@/components/gether.vue';
import activity from '@/components/activity.vue';
import agenda from '@/components/agenda.vue';
import news_center from '@/components/news_center.vue';
import news from "@/components/news.vue";
import wonderful_picture from "@/components/wonderful_picture.vue";
import wonderful_video from "@/components/wonderful_video.vue";
import download from "@/components/download.vue";
import handbook from "@/components/handbook.vue";
import release_of_result from "@/components/release_of_result.vue";

const router =createRouter(
    {
        history:createWebHashHistory(),
        routes:[
            {
                path:'/agenda',
                component:agenda
            },
            {
                path:'/activity',
                component:activity
            },
            {
                path:'/about',
                component:about
            },
            {
                path:'/news_center',
                component:news_center
            },
            {
                path:'/news',
                component:news
            },
            {
                path:'/wonderful_picture',
                component:wonderful_picture
            },
            {
                path:'/wonderful_video',
                component:wonderful_video
            },
            {
                path:'/download',
                component:download
            },
            {
                path:'/user',
                component:user
            },
            {
                path:'/handbook',
                component:handbook
            },
            {
                path:'/release_of_result',
                component:release_of_result
            },
            {
                path:'/gether',
                component:gether
            }
        ]
    }
)
export default router