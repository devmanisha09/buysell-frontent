"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[9647],{59:function(e,t){var r=function(){function e(){this.userId="",this.userName="",this.userEmail="",this.userPhone="",this.userAboutMe="",this.isShowEmail="",this.isShowEmailBool=!1,this.isShowPhone="",this.isShowPhoneBool=!1,this.userAddress="",this.streetName="",this.city="",this.stateId="",this.stateName="",this.zipCode="",this.apartmentNo="",this.deviceToken="",this.birthday="",this.emailNoti="",this.emailNotiBool=!1,this.phoneNoti="",this.phoneNotiBool=!1,this.itemLocationId="",this.lat="",this.lng=""}return e.prototype.ProfileUpdateViewHolder=function(){this.userId="",this.userAddress="",this.userName="",this.userEmail="",this.userPhone="",this.userAboutMe="",this.isShowEmail="",this.isShowPhone="",this.streetName="",this.city="",this.stateId="",this.stateName="",this.zipCode="",this.apartmentNo="",this.deviceToken="",this.birthday="",this.emailNoti="",this.phoneNoti="",this.itemLocationId="",this.lat="",this.lng=""},e.prototype.toMap=function(){var e={};return e["user_id"]=this.userId,e["user_address"]=this.userAddress,e["user_name"]=this.userName,e["user_email"]=this.userEmail,e["user_phone"]=this.userPhone,e["user_about_me"]=this.userAboutMe,e["is_show_email"]=this.isShowEmail,e["is_show_phone"]=this.isShowPhone,e["street_name"]=this.streetName,e["city"]=this.city,e["state_id"]=this.stateId,e["state_name"]=this.stateName,e["zipcode"]=this.zipCode,e["apartment_no"]=this.apartmentNo,e["device_token"]=this.deviceToken,e["birthday"]=this.birthday,e["email_noti"]=this.emailNoti,e["phone_noti"]=this.phoneNoti,e["item_location_id"]=this.itemLocationId,e["lat"]=this.lat,e["lng"]=this.lng,e},e}();t["Z"]=r},6761:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(6252),i=r(3577),n=["id","checked"];function o(e,t,r,o,s,l){var u=(0,a.up)("ps-label");return(0,a.wg)(),(0,a.j4)(u,{class:"select-none inline-flex items-center"},{default:(0,a.w5)((function(){return[(0,a._)("input",{type:"checkbox",class:"form-checkbox me-2 checked:bg-primary-500 dark:bg-primaryDark-accent",id:r.title,checked:r.value,onInput:t[0]||(t[0]=function(e){return o.handleInput(e.target.checked)})},null,40,n),(0,a.Uk)(" "+(0,i.zw)(r.title),1)]})),_:1})}var s=r(9576),l={name:"PsCheckboxValue",components:{PsLabel:s.Z},props:{value:Boolean,title:{type:String,default:"N.A"}},setup:function(e,t){var r=t.emit;function a(e){r("update:value",e)}return{handleInput:a}}},u=r(3744);const d=(0,u.Z)(l,[["render",o]]);var c=d},9177:function(e,t,r){r.d(t,{Z:function(){return f}});var a=r(6252),i=r(3577);function n(e,t,r,n,o,s){var l=(0,a.up)("ps-label-title"),u=(0,a.up)("ps-label"),d=(0,a.up)("ps-modal");return(0,a.wg)(),(0,a.j4)(d,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-50"},{title:(0,a.w5)((function(){return[(0,a.Wm)(l,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("ps_loading_dialog__please_wait")),1)]})),_:1})]})),body:(0,a.w5)((function(){return[(0,a.Wm)(u,null,{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.message),1)]})),_:1})]})),footer:(0,a.w5)((function(){return[]})),_:1},512)}var o=r(2262),s=r(8915),l=r(2052),u=r(9576),d=r(679),c=(0,a.aZ)({components:{PsModal:s.Z,PsLabel:u.Z,PsLabelTitle:l.Z},setup:function(){var e=(0,o.iH)(),t=(0,o.iH)(d.a.global.t("ps_loading_dialog__loading"));function r(){e.value.toggle(!0)}function a(){e.value.toggle(!1)}function i(e){t.value=e}return{psmodal:e,openModal:r,closeModal:a,message:t,setMessage:i}}}),h=r(3744);const p=(0,h.Z)(c,[["render",n]]);var f=p},6157:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(6252);function i(e,t,r,i,n,o){var s=(0,a.up)("ps-label");return(0,a.wg)(),(0,a.j4)(s,{class:"lg:text-3xl sm:text-2xl text-xl font-medium",textColor:e.textColor},{default:(0,a.w5)((function(){return[(0,a.WI)(e.$slots,"default")]})),_:3},8,["textColor"])}var n=r(9576),o=(0,a.aZ)({name:"PsLabelHeader4",components:{PsLabel:n.Z},props:{textColor:{type:String,default:"text-secondary-500 dark:text-secondaryDark-white"}}}),s=r(3744);const l=(0,s.Z)(o,[["render",i]]);var u=l},2002:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(6252);function i(e,t,r,i,n,o){var s=(0,a.up)("ps-label");return(0,a.wg)(),(0,a.j4)(s,{class:"lg:text-md sm:text-sm text-xs font-medium",textColor:e.textColor},{default:(0,a.w5)((function(){return[(0,a.WI)(e.$slots,"default")]})),_:3},8,["textColor"])}var n=r(9576),o=(0,a.aZ)({name:"PsLabelTitle3",components:{PsLabel:n.Z},props:{textColor:{type:String,default:"text-secondary-500 dark:text-secondaryDark-white"}}}),s=r(3744);const l=(0,s.Z)(o,[["render",i]]);var u=l},6395:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(6252),i=r(3577),n=["rows","value"];function o(e,t,r,o,s,l){return(0,a.wg)(),(0,a.iD)("textarea",{class:(0,i.C_)(["shadow-sm text-sm",r.theme]),rows:r.rows,value:r.value,onInput:t[0]||(t[0]=function(e){return o.handleInput(e.target.value)})},null,42,n)}var s={name:"PsTextArea",props:{rows:{type:Number,default:3},value:String,type:{type:String,default:"text"},theme:{type:String,default:"ring-primary-200 dark:ring-primaryDark-grey focus:outline-none focus:ring py-2 ps-4 form-input bg-primary-000 dark:bg-primaryDark-black text-secondary-500 dark:text-secondaryDark-white rounded-xl lg:rounded-2xl"}},setup:function(e,t){var r=t.emit;function a(e){r("update:value",e)}return{handleInput:a}}},l=r(3744);const u=(0,l.Z)(s,[["render",o]]);var d=u},4803:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(6252),i={class:"w-mobile sm:w-median lg:w-large mx-auto"};function n(e,t,r,n,o,s){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.WI)(e.$slots,"content")])}var o=r(8345),s={name:"PsContentContainer",setup:function(){var e=(0,o.yj)();return{route:e}}},l=r(3744);const u=(0,l.Z)(s,[["render",n]]);var d=u},8251:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var a=r(6252),i=r(3577),n={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},o={class:"flex flex-col items-center"},s={key:0,class:"ms-4 mb-4 flex items-center mt-8"},l={class:"flex justify-between container mt-2 mx-auto p-4"},u={class:"w-full flex flex-col bg-background dark:bg-backgroundDark border rounded-md border-secondary-400 dark:border-secondaryDark-grey pt-4 py-4 px-8"},d={class:"bg-primary-000 w-32 h-32 flex items-center justify-center mt-2"},c=["src"],h=["src"],p={class:"flex justify-between container w-full p-4 flex-wrap"},f={class:"flex flex-col w-full md:flex flex-auto md:w-6/12 md:pe-4"},m=(0,a._)("span",{class:"text-primary-500 text-base"},"*",-1),_=(0,a._)("span",{class:"text-primary-500 text-base"},"*",-1),v=(0,a._)("span",{class:"text-primary-500 text-base"},"*",-1),g=(0,a._)("div",{id:"recaptcha-container"},null,-1),w=(0,a.Uk)(),x=(0,a._)("br",null,null,-1),b={class:"flex flex-col w-full md:flex flex-auto md:w-6/12 md:ps-4"},y=(0,a._)("span",{class:"text-primary-500 text-base"},"*",-1),k={class:"flex items-center justify-center"};function P(e,t,r,P,S,U){var Z=(0,a.up)("ps-label-header-4"),I=(0,a.up)("ps-label"),L=(0,a.up)("ps-route-link"),C=(0,a.up)("ps-icon"),M=(0,a.up)("ps-label-title-3"),D=(0,a.up)("ps-input"),N=(0,a.up)("ps-checkbox-value"),W=(0,a.up)("ps-textarea"),E=(0,a.up)("ps-button"),$=(0,a.up)("ps-content-container"),z=(0,a.up)("ps-loading-dialog"),j=(0,a.up)("user-phone-login-verification-modal"),A=(0,a.up)("ps-error-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)($,null,{content:(0,a.w5)((function(){var r;return[(0,a._)("div",n,[(0,a._)("div",o,[(0,a.Wm)(Z,{class:"font-medium"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__edit_profile")),1)]})),_:1})]),null!=(null===(r=P.userProvider.user)||void 0===r?void 0:r.data)?((0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(L,{to:{name:"profile"}},{default:(0,a.w5)((function(){return[(0,a.Wm)(I,{class:"hover:underline cursor-pointer font-medium"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(P.userProvider.user.data?P.userProvider.user.data.userName:""),1)]})),_:1})]})),_:1}),(0,a.Wm)(C,{name:"rightArrow",class:"mx-2"}),(0,a.Wm)(I,{class:"font-light"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__edit_profile")),1)]})),_:1})])):(0,a.kq)("",!0),(0,a._)("div",l,[(0,a._)("div",u,[(0,a._)("div",{class:"p-4 mx-2 w-32 relative",onClick:t[3]||(t[3]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return P.onImageClick&&P.onImageClick.apply(P,e)}),for:"upload-image1"},[(0,a.Wm)(M,{class:"mt-1"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__profile_photo")),1)]})),_:1}),(0,a._)("input",{type:"file",size:"1",max:"1",accept:".jpg,.jpeg,.png",onChange:t[0]||(t[0]=function(e){return P.onImageSelected(e)}),ref:"image",id:"upload-image1",style:{display:"none"},ordering:1},null,544),(0,a._)("div",d,[""==P.previewImage.data?((0,a.wg)(),(0,a.iD)("img",{key:0,alt:"Placeholder",width:"300px",height:"300px",class:"w-24 h-24 object-cover",src:P.userProvider.imageUrl(P.profilePhoto,2),onError:t[1]||(t[1]=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return P.userProvider.defaultProfileImage&&(e=P.userProvider).defaultProfileImage.apply(e,t)})},null,40,c)):((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(P.previewImage.data,(function(e){return(0,a.wg)(),(0,a.iD)("img",{key:e,alt:"Placeholder",width:"300px",height:"300px",class:"w-24 h-24 object-cover",src:e,onClick:t[2]||(t[2]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return P.onImageClick&&P.onImageClick.apply(P,e)})},null,8,h)})),128))])]),(0,a._)("div",p,[(0,a._)("div",f,[(0,a.Wm)(I,{class:"mt-1 mx-2"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__user_name"))+" ",1),m]})),_:1}),(0,a.Wm)(D,{class:"mt-2 mx-2",type:"text",placeholder:e.$t("edit_profile__user_name"),value:P.holder.userName,"onUpdate:value":t[4]||(t[4]=function(e){return P.holder.userName=e})},null,8,["placeholder","value"]),""!=P.userProvider.userResource.message?((0,a.wg)(),(0,a.j4)(I,{key:0,class:"content-center px-4 py-4 rounded-md",textColor:"text-primary-500 dark:text-primaryDark-accent"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(P.userProvider.userResource.message),1)]})),_:1})):(0,a.kq)("",!0),(0,a.Wm)(I,{class:"mt-4 mx-2"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__email")),1),_]})),_:1}),(0,a.Wm)(D,{class:"mt-2 mx-2",type:"text",placeholder:e.$t("edit_profile__email"),value:P.holder.userEmail,"onUpdate:value":t[5]||(t[5]=function(e){return P.holder.userEmail=e})},null,8,["placeholder","value"]),(0,a.Wm)(I,{class:"mt-4 mx-2"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__phone"))+" ",1),v]})),_:1}),(0,a.Wm)(D,{class:"mt-2 mx-2",type:"text",placeholder:e.$t("edit_profile__phone_placeholder"),value:P.holder.userPhone,"onUpdate:value":t[6]||(t[6]=function(e){return P.holder.userPhone=e}),onKeypress:t[7]||(t[7]=function(e){return P.phoneNumber(e)})},null,8,["placeholder","value"]),g,w,x,(0,a.Wm)(N,{title:e.$t("edit_profile__show_emil_to_other_users"),class:"mt-4 mx-2",value:P.holder.isShowEmailBool,"onUpdate:value":t[8]||(t[8]=function(e){return P.holder.isShowEmailBool=e})},null,8,["title","value"]),(0,a.Wm)(N,{title:e.$t("edit_profile__show_phone_to_other_users"),class:"mt-4 mx-2 mb-4",value:P.holder.isShowPhoneBool,"onUpdate:value":t[9]||(t[9]=function(e){return P.holder.isShowPhoneBool=e})},null,8,["title","value"])]),(0,a._)("div",b,[(0,a.Wm)(I,{class:"mt1 mx-2"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__address")),1)]})),_:1}),(0,a.Wm)(D,{class:"mt-2 mx-2",type:"text",placeholder:e.$t("edit_profile__address"),value:P.holder.userAddress,"onUpdate:value":t[10]||(t[10]=function(e){return P.holder.userAddress=e})},null,8,["placeholder","value"]),(0,a.Wm)(I,{class:"mt-4 mx-2"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__city")),1)]})),_:1}),(0,a.Wm)(D,{class:"mt-2 mx-2",type:"text",placeholder:e.$t("edit_profile__city"),value:P.holder.city,"onUpdate:value":t[11]||(t[11]=function(e){return P.holder.city=e})},null,8,["placeholder","value"]),(0,a.Wm)(I,{class:"mt-4 mx-2"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__about_me"))+" ",1),y]})),_:1}),(0,a.Wm)(W,{class:"mt-2 mx-2",type:"text",placeholder:e.$t("edit_profile__about_me"),value:P.holder.userAboutMe,"onUpdate:value":t[12]||(t[12]=function(e){return P.holder.userAboutMe=e})},null,8,["placeholder","value"])])])])]),(0,a._)("div",k,[(0,a.Wm)(E,{class:"text-center w-60 mx-auto mt-8 py-4",onClick:P.isPhoneVerified},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,i.zw)(e.$t("edit_profile__submit")),1)]})),_:1},8,["onClick"])])])]})),_:1}),(0,a.Wm)(z,{ref:"ps_loading_dialog"},null,512),(0,a.Wm)(j,{ref:"user_phone_login_verification_modal"},null,512),(0,a.Wm)(A,{ref:"ps_error_dialog"},null,512)],64)}var S=r(655),U=r(2262),Z=r(3824),I=r(3301),L=r(9399),C=r(4578),M=r(2255),D=r(1597),N=r(6921),W=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.id="",t.name="",t.status="",t.addedDate="",t.addedUserId="",t.updatedDate="",t.updatedUserId="",t.updatedFlag="",t.addedDateStr="",t}return(0,S.ZT)(t,e),t.prototype.init=function(e,t,r,a,i,n,o,s,l){return this.id=e,this.name=t,this.status=r,this.addedDate=a,this.addedUserId=i,this.updatedDate=n,this.updatedUserId=o,this.updatedFlag=s,this.addedDateStr=l,this},t.prototype.getPrimaryKey=function(){return this.id},t.prototype.toMap=function(e){var t={};return t["id"]=e.id,t["name"]=e.name,t["status"]=e.status,t["added_date"]=e.addedDate,t["added_user_id"]=e.addedUserId,t["updated_date"]=e.updatedDate,t["updated_user_id"]=e.updatedUserId,t["updated_flag"]=e.updatedFlag,t["added_date_str"]=e.addedDateStr,t},t.prototype.toMapList=function(e){for(var t=[],r=0;r<e.length;r++)null!=e[r]&&t.push(this.toMap(e[r]));return t},t.prototype.fromMap=function(e){return(new t).init(e.id,e.name,e.status,e.addedDate,e.addedUserId,e.updatedDate,e.updatedUserId,e.updatedFlag,e.addedDateStr)},t.prototype.fromMapList=function(e){var t=[];for(var r in e)null!=r&&t.push(this.fromMap(r));return t},t}(N.L),E=W,$=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isNoMoreRecord=(0,U.qj)(!1),t.userStateList=(0,U.qj)(new D.Z),t.loading=(0,U.qj)({value:!1}),t.limit=30,t.offset=0,t}return(0,S.ZT)(t,e),t.prototype.updateUserStateList=function(e){var t;null!=this.userStateList&&null!=this.userStateList.data&&this.userStateList.data.length>0&&0!=this.offset?(null!=e.data&&e.data.length>0?(t=this.userStateList.data).push.apply(t,e.data):this.isNoMoreRecord=!0,this.userStateList.code=e.code,this.userStateList.status=e.status,this.userStateList.message=e.message):this.userStateList=e,null!=this.userStateList&&null!=this.userStateList.data&&(this.offset=this.userStateList.data.length)},t.prototype.loadUserStateList=function(){return(0,S.mG)(this,void 0,void 0,(function(){var e;return(0,S.Jh)(this,(function(t){switch(t.label){case 0:return this.loading.value=!0,[4,M.Z.getUserStateList(new E,this.limit,this.offset)];case 1:return e=t.sent(),this.updateUserStateList(e),this.loading.value=!1,[2]}}))}))},t.prototype.resetUserStateList=function(){return(0,S.mG)(this,void 0,void 0,(function(){var e;return(0,S.Jh)(this,(function(t){switch(t.label){case 0:return this.offset=0,this.loading.value=!0,[4,M.Z.getUserStateList(new E,this.limit,this.offset)];case 1:return e=t.sent(),this.updateUserStateList(e),this.loading.value=!1,[2]}}))}))},t}(C.n),z=(Symbol("UserStateListProvider"),function(){return(0,U.qj)(new $)}),j=r(4803),A=r(6157),H=r(593),R=r(6037),B=r(8752),V=r(6395),T=r(6761),G=r(59),q=r(2567),J=r(9177),F=r(958),O=r(8978),Y=r(9576),K=r(2002),Q=r(8385),X=r(5503),ee=(r(2211),r(679)),te=r(9070),re=r(7640),ae={name:"EditProfileView",components:{PsContentContainer:j.Z,PsButton:H.Z,PsLabelHeader4:A.Z,PsIcon:R.Z,PsInput:B.Z,PsTextarea:V.Z,PsCheckboxValue:T.Z,PsLabelTitle3:K.Z,PsLoadingDialog:J.Z,PsErrorDialog:F.Z,UserPhoneLoginVerificationModal:O.Z,PsLabel:Y.Z,PsRouteLink:Q.Z},setup:function(){var e=(0,I.xu)(),t=z(),r=L.$.psValueHolder,i=r.getLoginUserId();null!=i&&""!=i&&i!=re.Z.NO_LOGIN_USER||Z.Z.push({name:"login"});var n,o=(0,U.qj)({data:[]}),s=(0,U.qj)(new G.Z),l=(0,U.iH)(),u=new Date;u.setFullYear(u.getFullYear()-18);var d,c,h=(0,U.iH)(),p=(0,U.iH)(u),f=(0,U.iH)(),m=(0,U.iH)(""),_=(0,U.iH)(),v=(0,U.iH)(),g=(0,U.iH)();function w(){return(0,S.mG)(this,void 0,void 0,(function(){var t,r;return(0,S.Jh)(this,(function(a){switch(a.label){case 0:return _.value.openModal(),[4,e.getUser(i)];case 1:return t=a.sent(),d=t.data[0],_.value.closeModal(),t.status==q.Z.SUCCESS?(r=t.data[0],s.userId=r.userId,s.userName=r.userName,s.userEmail=r.userEmail,s.userPhone=r.userPhone,s.city=r.city,s.userAboutMe=r.userAboutMe,s.userAddress=r.userAddress,s.isShowEmail=r.isShowEmail,s.isShowEmailBool="1"==s.isShowEmail,s.isShowPhone=r.isShowPhone,s.isShowPhoneBool="1"==s.isShowPhone,m.value=r.userProfilePhoto.toString()):(v.value.openModal("",t.message),Z.Z.push({name:"dashboard"})),[2]}}))}))}function x(e){e=e||window.event;var t=e.which?e.which:e.keyCode;if(!(t<42||t>57))return!0;e.preventDefault()}function b(e){e=e||window.event;var t=e.which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!==t))return!0;e.preventDefault()}function y(e){var t=e.target.files;if(t&&t.length>1)window.alert("Over 5");else{o.data=[];for(var r=0;r<t.length;r++){var a=new FileReader;a.onload=function(e){o.data.push(e.target&&e.target.result?e.target.result.toString():"")},a.readAsDataURL(t[r]),n=t[r]}}}function k(){f.value.click()}function P(){e.postImageUpload(r.getLoginUserId(),"web",n,"")}function C(){return(0,S.mG)(this,void 0,void 0,(function(){var t;return(0,S.Jh)(this,(function(a){switch(a.label){case 0:return s.isShowEmail=s.isShowEmailBool?"1":"0",s.isShowPhone=s.isShowPhoneBool?"1":"0",_.value.openModal(),_.value.setMessage(ee.a.global.t("edit_profile__updating_profile")),[4,e.postProfileUpdate(s)];case 1:return t=a.sent(),void 0==n?[3,3]:(_.value.setMessage(ee.a.global.t("edit_profile__uploading_profile_image")),[4,e.postImageUpload(r.getLoginUserId(),"web",n,"")]);case 2:a.sent(),a.label=3;case 3:return _.value.closeModal(),t.status==q.Z.SUCCESS?v.value.openModal(ee.a.global.t("edit_profile__success"),ee.a.global.t("edit_profile__profile_updated")):t.status==q.Z.ERROR&&v.value.openModal("",t.message),[2]}}))}))}function M(){return(0,S.mG)(this,void 0,void 0,(function(){return(0,S.Jh)(this,(function(e){switch(e.label){case 0:return[4,t.loadUserStateList()];case 1:return e.sent(),[2]}}))}))}function D(){s.userPhone==d.userPhone?C():W(s.userPhone)}function N(){_.value.openModal(),setTimeout((function(){window.recaptchaVerifier=new X.Z.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:function(e){te.Z.log("Callback"),te.Z.log(e)},"expired-callback":function(){te.Z.log("expiry callback")}}),c=window.recaptchaVerifier,_.value.closeModal()}),1e3)}function W(e){return(0,S.mG)(this,void 0,void 0,(function(){var t,r,a=this;return(0,S.Jh)(this,(function(i){switch(i.label){case 0:return _.value.openModal(),t=c,[4,X.Z.auth().signInWithPhoneNumber(e,t).catch((function(e){_.value.closeModal(),v.value.openModal(ee.a.global.t("edit_profile__error_in_changing_phone_number"),null===e||void 0===e?void 0:e.message)}))];case 1:return r=i.sent(),_.value.closeModal(),void 0!=r&&g.value.openModal("Phone No Verification","","Submit","Cancel",(function(e){return(0,S.mG)(a,void 0,void 0,(function(){var t=this;return(0,S.Jh)(this,(function(a){return _.value.openModal(),r.confirm(e).then((function(e){return(0,S.mG)(t,void 0,void 0,(function(){return(0,S.Jh)(this,(function(t){return null!=e&&null!=e.user&&null!=e.user.uid&&""!=e.user.uid?(_.value.closeModal(),C()):te.Z.log("ERROR"),[2]}))}))})).catch((function(e){_.value.closeModal(),v.value.openModal(ee.a.global.t("edit_profile__error_in_changing_phone_number"),null===e||void 0===e?void 0:e.message)})),[2]}))}))}),(function(){te.Z.log("Cancel")})),[2]}}))}))}return(0,a.bv)((function(){w(),N()})),{userStateListProvider:t,previewImage:o,onImageSelected:y,uploadImage:P,userProvider:e,submit:C,holder:s,date_picker:l,pickedDate:h,loadStateList:M,image:f,onImageClick:k,profilePhoto:m,ps_loading_dialog:_,ps_error_dialog:v,upperDate:p,phoneNumber:x,isNumber:b,user_phone_login_verification_modal:g,isPhoneVerified:D}}},ie=r(3744);const ne=(0,ie.Z)(ae,[["render",P]]);var oe=ne}}]);
//# sourceMappingURL=EditProfile-legacy.24860c79.js.map