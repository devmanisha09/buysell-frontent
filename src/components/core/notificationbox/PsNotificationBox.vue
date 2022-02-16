<template>
    <div v-if="notify"> 
        <div id="notification-box" class="notification-box">
            <a href="#" id="notification-close" @click="closed()" title="close">x</a>

            <div class="notification-data">
                <div class="notification-title">
                    <p id="title">
                        <span id="title" style="font-size: 12px; font-weight: 600;">{{title}}</span>
                    </p>
                </div>

                <div class="notification-notice">
                    <p id="subject">{{subject}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/messaging";
export default {
    name: "PsNotificationBox",

    components: {},

    data() {
        return {
            title: "Test",
            subject: "Test",
            messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
            currentMessage: "Test",
            notify: false,
        };
    },

    methods: {
        closed(){

        },
        receiveMessage() {
            try {
                if(!this.messaging) return;
                this.messaging.onMessage((payload) => {
                    // debugger
                    this.currentMessage = payload;
                    console.log(this.currentMessage);
                    console.log("Message received. ", payload);
                   
                    this.setNotificationBoxForm(
                        payload.notification.title,
                        payload.notification.body
                    );
                   
                    this.notify = true;
                    setTimeout(() => {
                        this.notify = false;
                    }, 10000);
                });
            } catch (e) {
                console.log(e);
            }
        },
      
        setNotificationBoxForm(title, subject) {
            this.title = title;
            this.subject = subject;
        },
    },

    created() {
        this.receiveMessage();
    },

    validations: function () {
        return {};
    },

    computed: {},
};
</script>

<style>
.notification-box {
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 10px;
    width: 30%;
    height: 100px;
    background-color: #fff;
    z-index: 999;
    border: 1px dotted black;
    border-radius: 12px;
}
#notification-close {
    position: absolute;
    color: #777;
    font: 14px;
    right: 10px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    top: 6px;
    z-index: 10;
    cursor: pointer;
}

.notification-data {
    margin: 0 20px;
}
.notification-data p {
    margin: 10px 0;
}
.notification-notice p {
    font-size: 12px;
    /* font-weight: 400; */
}
.notification-title p {
    font-size: 22px;
    font-weight: bold;
    line-height: 18px;
}
.notification-time small {
    font-size: 12px;
}

.notification-wall-number small {
    font-size: 8px;
}
img{
    width: 30px;
}
</style>