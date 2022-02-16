"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[7494],{7847:function(e,t,l){l.r(t),l.d(t,{default:function(){return R}});var r=l(6252),a=l(3577),o=l(9963),s={class:"sm:mt-32 lg:mt-36 mt-28 flex flex-col"},n={class:"content-center mx-auto w-96"},i={class:"w-55 lg:w-80 flex flex-col mx-auto rounded-lg"},u={class:"w-full"},c={class:"flex flex-row items-start mt-2 lg:mt-3"},d={class:"flex flex-auto justify-center mt-3"},g={class:"flex flex-row justify-center mt-4"},m=(0,r._)("div",{class:"my-4"},null,-1);function _(e,t,l,_,f,p){var x=(0,r.up)("ps-label"),v=(0,r.up)("ps-input"),w=(0,r.up)("ps-button"),k=(0,r.up)("ps-checkbox-value"),y=(0,r.up)("ps-route-link"),b=(0,r.up)("ps-line"),h=(0,r.up)("font-awesome-icon"),W=(0,r.up)("ps-error-dialog"),U=(0,r.up)("ps-success-dialog-2"),C=(0,r.up)("privacy-modal");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",s,[(0,r._)("div",n,[""!=_.userProvider.userResource.message?((0,r.wg)(),(0,r.j4)(x,{key:0,class:"content-center bg-white text-general-200 px-4 py-4 rounded-md"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(_.userProvider.userResource.message),1)]})),_:1})):(0,r.kq)("",!0)]),(0,r._)("div",i,[(0,r.Wm)(x,{class:"font-medium text-2xl mt-8 mx-auto lg:text-3xl mb-4"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__register_title")),1)]})),_:1}),(0,r._)("form",u,[(0,r.Wm)(x,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__user_name")),1)]})),_:1}),(0,r.Wm)(v,{class:"lg:mt-2 mt-1 w-full",type:"email",placeholder:e.$t("register__user_name"),onKeyup:(0,o.D2)(_.clicked,["enter"]),value:_.name,"onUpdate:value":t[0]||(t[0]=function(e){return _.name=e})},null,8,["placeholder","onKeyup","value"]),(0,r.Wm)(x,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__email")),1)]})),_:1}),(0,r.Wm)(v,{class:"lg:mt-2 mt-1 w-full",type:"email",placeholder:e.$t("register__email"),onKeyup:(0,o.D2)(_.clicked,["enter"]),value:_.email,"onUpdate:value":t[1]||(t[1]=function(e){return _.email=e}),onBlur:_.validateEmail},null,8,["placeholder","onKeyup","value","onBlur"]),_.validationEmail?((0,r.wg)(),(0,r.j4)(x,{key:0,class:"lg:mt-2 mt-1 w-full",textColor:"text-primary-500"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("login__email_required_error")),1)]})),_:1})):(0,r.kq)("",!0),(0,r.Wm)(x,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__password")),1)]})),_:1}),(0,r.Wm)(v,{class:"lg:mt-2 mt-1 w-full",type:"password",placeholder:e.$t("register__password"),onKeyup:(0,o.D2)(_.clicked,["enter"]),value:_.password,"onUpdate:value":t[2]||(t[2]=function(e){return _.password=e}),autocomplete:"off"},null,8,["placeholder","onKeyup","value"]),(0,r.Wm)(x,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__confirm_password")),1)]})),_:1}),(0,r.Wm)(v,{class:"lg:mt-2 mt-1 w-full",type:"password",placeholder:e.$t("register__confirm_password"),onKeyup:(0,o.D2)(_.clicked,["enter"]),value:_.confirmPassword,"onUpdate:value":t[3]||(t[3]=function(e){return _.confirmPassword=e}),autocomplete:"off"},null,8,["placeholder","onKeyup","value"])]),_.userProvider.loading.value?((0,r.wg)(),(0,r.j4)(w,{key:0,textSize:"text-xs lg:text-base",class:"mt-4 lg:mt-5 w-full py-3",disabled:!0},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__loading")),1)]})),_:1})):((0,r.wg)(),(0,r.j4)(w,{key:1,textSize:"text-xs lg:text-base",class:"mt-4 lg:mt-5 py-3",onClick:_.clicked,disabled:!1},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__register")),1)]})),_:1},8,["onClick"])),(0,r._)("div",c,[(0,r.Wm)(k,{title:"",onClick:_.agreePrivacyPolicyClicked,class:"lg:mt-1 mt-0.5",value:_.checkedterms,"onUpdate:value":t[4]||(t[4]=function(e){return _.checkedterms=e})},null,8,["onClick","value"]),(0,r.Wm)(x,{class:"me-2 font-medium text-sm lg:text-base"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__check_privacy_policy")),1)]})),_:1}),(0,r.Wm)(y,{to:{name:"privacy"},class:"underline cursor-pointer text-sm",url:"https://www.panacea-soft.com/privacy"},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"font-medium text-sm lg:text-base"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__privacy_policy")),1)]})),_:1})]})),_:1})]),(0,r._)("div",d,[(0,r.Wm)(x,{textColor:"text-secondary-400 dark:text-secondaryDark-grey",class:"cursor-pointer font-light text-xs lg:text-sm",onClick:_.loginClicked},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("register__already_member_login")),1)]})),_:1},8,["onClick"])]),(0,r._)("div",g,[(0,r.Wm)(b,{class:"w-full lg:h-3 h-2 border border-l-0 border-r-0 border-secondary-400 dark:border-secondaryDark-grey"}),(0,r.Wm)(x,{class:"px-1 font-medium text-sm lg:text-base"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.$t("login__or")),1)]})),_:1}),(0,r.Wm)(b,{class:"w-full lg:h-3 h-2 border border-l-0 border-r-0 border-secondary-400 dark:border-secondaryDark-grey"})]),(0,r.Wm)(w,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",onClick:_.phoneloginclicked},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{icon:["fas","phone"],class:"text-textLight dark:text-textDark text-xl me-2"}),(0,r.Uk)(" "+(0,a.zw)(e.$t("register__register_with_phone")),1)]})),_:1},8,["onClick"]),(0,r.Wm)(w,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",theme:"bg-blue-600 hover:bg-blue-700 text-textLight px-4 py-2",onClick:_.facebookloginclicked},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{icon:["fab","facebook-f"],class:"text-textLight text-xl me-2"}),(0,r.Uk)(" "+(0,a.zw)(e.$t("register__register_with_facebook")),1)]})),_:1},8,["onClick"]),(0,r.Wm)(w,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center mb-2",theme:"bg-yellow-600 hover:bg-yellow-700 text-textLight px-4 py-2",id:"signinBtn",onClick:_.googleloginclicked},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{icon:["fab","google"],class:"text-textLight text-xl me-2"}),(0,r.Uk)(" "+(0,a.zw)(e.$t("register__register_with_google")),1)]})),_:1},8,["onClick"]),m]),(0,r.Wm)(W,{ref:"ps_error_dialog"},null,512),(0,r.Wm)(U,{ref:"ps_success_dialog"},null,512)]),(0,r.Wm)(C,{ref:"privacy_modal"},null,512)])}var f=l(655),p=l(9576),x=l(593),v=l(8752),w=l(3301),k=l(9399),y=l(3824),b=l(2262),h=l(6761),W=l(958),U=l(3207),C=l(8345),z=l(8385),$=l(6194),P=l(679),Z=l(7696),L=l(2567),S=l(8947),j=l(1417),D=l(1436);S.vI.add(j.AYu,D.j1w,j.xYR);var q={name:"RegisterView",components:{PsButton:x.Z,PsLine:Z.Z,PsInput:v.Z,PsLabel:p.Z,PsCheckboxValue:h.Z,PsErrorDialog:W.Z,PsRouteLink:z.Z,PrivacyModal:$.Z,PsSuccessDialog2:U.Z},setup:function(){var e=(0,C.yj)();k.$.psValueHolder.isUserLoggedIn()&&y.Z.push({name:"dashboard"});var t=(0,b.iH)(""),l=(0,b.iH)(""),r=(0,b.iH)(""),a=(0,b.iH)(""),o=(0,b.iH)(!1),s=(0,b.iH)(!1),n=(0,b.iH)(),i=(0,b.iH)(),u=(0,b.iH)(),c=(0,w.ie)();function d(e){var t=/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/,l=t.test(e.target.value);o.value=!l}function g(){return(0,f.mG)(this,void 0,void 0,(function(){return(0,f.Jh)(this,(function(e){switch(e.label){case 0:return l.value!=r.value?[3,4]:1!=s.value?[3,2]:[4,c.signUpWithEmailId(a.value,t.value,l.value,(function(){W()}),(function(){y.Z.push({name:"verify-email"})}))];case 1:return e.sent(),[3,3];case 2:n.value.openModal("",P.a.global.t("register__select_privacy_policy")),e.label=3;case 3:return[3,5];case 4:n.value.openModal("",P.a.global.t("register__passwords_not_match_error")),e.label=5;case 5:return[2]}}))}))}function m(){c.navigateUserLoginTo("login",y.Z,e.query.redirect,e.query,e.params)}function _(e){s.value=e}function p(){1==s.value?c.navigateUserLoginTo("phone-login",y.Z,e.query.redirect,e.query,e.params):n.value.openModal(P.a.global.t("login__privacy_policy"),P.a.global.t("login__need_to_agree_privacy"))}function x(){u.value.openModal(_)}function v(){return(0,f.mG)(this,void 0,void 0,(function(){return(0,f.Jh)(this,(function(e){switch(e.label){case 0:return 1!=s.value?[3,2]:[4,c.loginWithFacebookId()];case 1:return e.sent(),c.userResource.status==L.Z.SUCCESS&&i.value.openModal(P.a.global.t("register__success"),P.a.global.t("register__login_success"),P.a.global.t("register_ok"),(function(){W()})),[3,3];case 2:n.value.openModal("",P.a.global.t("register__select_privacy_policy")),e.label=3;case 3:return[2]}}))}))}function h(){return(0,f.mG)(this,void 0,void 0,(function(){return(0,f.Jh)(this,(function(e){switch(e.label){case 0:return 1!=s.value?[3,2]:[4,c.loginWithGoogleId()];case 1:return e.sent(),c.userResource.status==L.Z.SUCCESS&&i.value.openModal(P.a.global.t("register__success"),P.a.global.t("register__login_success"),P.a.global.t("register_ok"),(function(){W()})),[3,3];case 2:n.value.openModal("",P.a.global.t("register__select_privacy_policy")),e.label=3;case 3:return[2]}}))}))}function W(){c.navigateUserLoginRedirect(e.query.redirect,"dashboard",y.Z,e.query.redirect,e.query,e.params)}return c.userResource.message="",{clicked:g,email:t,password:l,confirmPassword:r,name:a,userProvider:c,checkedterms:s,ps_error_dialog:n,ps_success_dialog:i,loginClicked:m,agreePrivacyPolicyClicked:x,privacy_modal:u,facebookloginclicked:v,googleloginclicked:h,phoneloginclicked:p,validateEmail:d,validationEmail:o}}},H=l(3744);const M=(0,H.Z)(q,[["render",_]]);var R=M}}]);
//# sourceMappingURL=Register-legacy.ca0a4de7.js.map