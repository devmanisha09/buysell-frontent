
<style>
/* @import "css/app.css"; */

.fade-enter,
.fade-leave-to
 {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}

</style>

<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
        <template v-slot:og(title)="{ content, metainfo, og }">
        {{ content }} - {{ og.description }} - {{ metainfo.description }} - Hello Again
      </template>
    </metainfo>
    <header />
    <div class='bg-background dark:bg-backgroundDark h-full'>
    <div id="app" :dir='psValueHolder.languageCode == "ar" ? "rtl" : "ltr" ' class="  w-full h-full flex flex-col min-h-screen ">
        <vue-progress-bar></vue-progress-bar>

        <!-- Body --> 
        <main class="flex-grow">
            <router-view v-slot="{ Component }" :key="route.fullPath" >
               <transition 
                name="slide-fade" 
                mode="out-in"
                appear
                >
                    <div>

                        <component :is="Component" />

                    </div>
                </transition>
            </router-view>
        </main> 
        <!-- End Body -->
        <ps-notification-box></ps-notification-box>
        
        <div class="top-0 fixed">
        <ps-nav-tab-bar  :topOfPage="atTopOfPage" />
        <ps-nav-bar  :topOfPage="atTopOfPage" />
        </div>

        <!-- Footer -->
        <footer>
            <footer-view />
        </footer>
        <!-- End Footer -->
        

        </div>
    </div>
   
</template>

<script lang="ts">

// libs
import { defineComponent, onMounted , onUnmounted, ref, getCurrentInstance} from 'vue';
import { useRoute } from 'vue-router';
import { i18n } from '@/assets/locales/index';
import  firebase  from 'firebase/app';
import 'firebase/messaging'

// Providers
import { PsValueProvider } from './store/modules/core/PsValueProvider';
import { usePsAppInfoProviderState } from './store/modules/appinfo/AppInfoProvider';

// Holders
import { usePsValueHolderState } from '@/object/core/PsValueHolder';
import AppInfoParameterHolder from './object/holder/AppInfoParameterHolder';

// Components
import FooterView from '@/views/general/FooterView.vue';
import PsNavTabBar from '@/components/layouts/navbar/PsNavTabBar.vue';
import PsNavBar from '@/components/layouts/navbar/PsNavBar.vue';
import PsIcon from './components/core/icons/PsIcon.vue';
import PsNotificationBox from './components/core/notificationbox/PsNotificationBox.vue';
import PsConfig from './config/PsConfig';

export default defineComponent({
    name : "AppView",
    components: {
        PsNavBar,
        FooterView,
        PsIcon,
        PsNavTabBar,
        PsNotificationBox
    },
  
    setup() {
        const internalInstance = getCurrentInstance();
        //  [App.vue specific] When App.vue is first loaded start the progress bar
        internalInstance?.appContext.config.globalProperties.$Progress.start();
        setTimeout(() => {
        internalInstance?.appContext.config.globalProperties.$Progress.finish();
        }, 3500);
        PsValueProvider.psValueHolder = usePsValueHolderState();
        const appInfoProvider = usePsAppInfoProviderState();
        const atTopOfPage = ref(true);
        const route = useRoute();
        const showEntryMessage = ref(true);
        const psValueHolder = PsValueProvider.psValueHolder;
        const loginUserId = psValueHolder.getLoginUserId();

        const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null;
        //const messaging = firebase.messaging();
        function resetUI() {
            if(!messaging) return;
              messaging.getToken({ vapidKey: PsConfig.firebaseWebPushKeyPair }).then((currentToken) => {
                  
                  if (currentToken) {
                    localStorage.deviceToken = currentToken;
                    psValueHolder.replacedeviceToken(currentToken);
                    subscribeTokenToTopic(currentToken,'fe_broadcast');
                    console.log('Notification has token.', localStorage.deviceToken);
                  } else {
                      console.log('No registration token available. Request permission to generate one.');
                      requestPermission();
                  }
              }).catch((err) => {
                  console.log('An error occurred while retrieving token. ', err);
              });
          }
      
          function requestPermission() {
              if(!messaging) return;
            console.log('Requesting permission...');
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                    resetUI();
                } else {
                    console.log('Unable to get permission to notify.');
                }
            });
        }
    
        resetUI();
        function subscribeTokenToTopic(token, topic) {
            if(!messaging) return;
            fetch('https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic, {
                method: 'POST',
                headers: new Headers({
                    'Authorization': 'key=' + PsConfig.fcmServerKey
                })
            }).then(response => {
                if (response.status < 200 || response.status >= 400) {
                    throw 'Error subscribing to topic: ' + response.status + ' - ' + response.text();
                }
                console.log('Subscribed to "' + topic + '"');
            }).catch(error => {
                console.error(error);
            })
        }



        psValueHolder.replacedeviceToken(localStorage.deviceToken); 
        function handleScroll(){
            // when the user scrolls, check the pageYOffset
            if(window.pageYOffset>30){
                // user is scrolled
                if(atTopOfPage.value) atTopOfPage.value = false;
            }else{
                // user is at top of page
                if(!atTopOfPage.value) atTopOfPage.value = true;
            }
        }

        onMounted( async () =>{
            window.addEventListener('scroll', handleScroll);
            document.title = i18n.global.t('ps_nav_bar__ps_buy_sell');

            const appInfoParameterHolder = new AppInfoParameterHolder();
            appInfoParameterHolder.userId = loginUserId;
            appInfoProvider.loadDeleteHistory(appInfoParameterHolder);
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        })

        

        return {
            atTopOfPage,
            route,
            showEntryMessage,
            psValueHolder,
        }
    }

})

</script>

