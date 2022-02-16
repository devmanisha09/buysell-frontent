
<template>
    <div class="w-mobile sm:w-median lg:w-large mx-auto mt-2">
        <ins class="adsbygoogle"
            :style="adStyle"
            :data-ad-client="adClient"
            :data-ad-format="adFormat"
            :data-ad-slot="adSlot"></ins>
    </div>
</template>

<script lang='ts'>
import PsConfig from '@/config/PsConfig';
export default {
    name : "PsAdSense",
    props: {
        adStyle: {
            type: String,
            required: false,
            default: "display:inline-block",
        },
        adClient: {
            type: String,
            required: false,
            default: PsConfig.adClient,
        },
        adFormat: {
            type: String,
            required: false,
            default: "auto",
        },
        adSlot: {
            type: String,
            required: false,
            default: PsConfig.adSlot,
        },
    },
    mounted() {
    //    document.addEventListener('DOMContentLoaded', (e) => {

    //        alert("sdf");
    //        console.log(e);
    //          (window as any).adsbygoogle.push({});
    //      }, false)
        //(window as any).adsbygoogle.push({});
        let inlineScript   = document.createElement("script");
        inlineScript.type  = "text/javascript";
        inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'
        document.getElementsByTagName('body')[0].appendChild(inlineScript);
    }
}
</script>