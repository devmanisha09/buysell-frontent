"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[544],{7069:function(e,t,r){r.d(t,{me:function(){return h}});var i=r(655),s=r(2262),n=r(4578),l=r(2255),o=r(1597),a=r(6921),u=r(7432),f=r(5463),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.id="",t.itemId="",t.buyerUserId="",t.sellerUserId="",t.negoPrice="",t.buyerUnreadCount="",t.sellerUnreadCount="",t.isAccept="",t.addedDate="",t.isOffer="",t.offerStatus="",t.offerAmount="",t.addedDateStr="",t.item=new u.Z,t.buyer=new f.Z,t.seller=new f.Z,t}return(0,i.ZT)(t,e),t.prototype.init=function(e,t,r,i,s,n,l,o,a,u,f,c,d,m,p,h){return this.id=e,this.itemId=t,this.buyerUserId=r,this.sellerUserId=i,this.negoPrice=s,this.buyerUnreadCount=n,this.sellerUnreadCount=l,this.isAccept=o,this.addedDate=a,this.isOffer=u,this.offerStatus=f,this.offerAmount=c,this.addedDateStr=d,this.item=m,this.buyer=p,this.seller=h,this},t.prototype.getPrimaryKey=function(){return this.id},t.prototype.toMap=function(e){var t={};return t["id"]=e.id,t["item_id"]=e.itemId,t["buyer_user_id"]=e.buyerUserId,t["seller_user_id"]=e.sellerUserId,t["nego_price"]=e.negoPrice,t["buyer_unread_count"]=e.buyerUnreadCount,t["seller_unread_count"]=e.sellerUnreadCount,t["is_accept"]=e.isAccept,t["added_date"]=e.addedDate,t["is_offer"]=e.isOffer,t["offer_status"]=e.offerStatus,t["offer_amount"]=e.offerAmount,t["added_date_str"]=e.addedDateStr,t["item"]=(new u.Z).toMap(e.item),t["buyer"]=(new f.Z).toMap(e.buyer),t["seller"]=(new f.Z).toMap(e.seller),t},t.prototype.toMapList=function(e){for(var t=[],r=0;r<e.length;r++)null!=e[r]&&t.push(this.toMap(e[r]));return t},t.prototype.fromMap=function(e){return(new t).init(e.id,e.item_id,e.buyer_user_id,e.seller_user_id,e.nego_price,e.buyer_unread_count,e.seller_unread_count,e.is_accept,e.added_date,e.is_offer,e.offer_status,e.offer_amount,e.added_date_str,(new u.Z).fromMap(e.item),(new f.Z).fromMap(e.buyer),(new f.Z).fromMap(e.seller))},t.prototype.fromMapList=function(e){var t=[];for(var r in e)null!=r&&t.push(this.fromMap(r));return t},t}(a.L),d=c,m=r(2317),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.offerList=(0,s.qj)(new o.Z),t.loading=(0,s.qj)({value:!1}),t.limit=30,t.offset=0,t.isNoMoreRecord=(0,s.qj)(!1),t}return(0,i.ZT)(t,e),t.prototype.makeOffer=function(e,t){return(0,i.mG)(this,void 0,void 0,(function(){var r;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.loading.value=!0,[4,l.Z.makeOffer(new d,e,t.toMap())];case 1:return r=i.sent(),this.loading.value=!1,[2,r]}}))}))},t.prototype.acceptOffer=function(e,t){return(0,i.mG)(this,void 0,void 0,(function(){var r;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.loading.value=!0,[4,l.Z.acceptedOffer(new d,e,t.toMap())];case 1:return r=i.sent(),this.loading.value=!1,[2,r]}}))}))},t.prototype.isUserBought=function(e,t){return(0,i.mG)(this,void 0,void 0,(function(){var r;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.loading.value=!0,[4,l.Z.isUsetBought(new m.Z,e,t.toMap())];case 1:return r=i.sent(),this.loading.value=!1,[2,r]}}))}))},t.prototype.markAsSold=function(e,t){return(0,i.mG)(this,void 0,void 0,(function(){var r;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.loading.value=!0,[4,l.Z.makeMarkAsSold(new m.Z,e,t.toMap())];case 1:return r=i.sent(),this.loading.value=!1,[2,r]}}))}))},t.prototype.updateOfferList=function(e){var t;null!=this.offerList&&null!=this.offerList.data&&this.offerList.data.length>0&&0!=this.offset?(null!=e.data&&e.data.length>0?(t=this.offerList.data).push.apply(t,e.data):this.isNoMoreRecord=!0,this.offerList.code=e.code,this.offerList.status=e.status,this.offerList.message=e.message):this.offerList=e,null!=this.offerList&&null!=this.offerList.data&&(this.offset=this.offerList.data.length)},t.prototype.loadOfferList=function(e){return(0,i.mG)(this,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(r){switch(r.label){case 0:return this.loading.value=!0,[4,l.Z.getOfferList(new d,e.toMap())];case 1:return t=r.sent(),this.updateOfferList(t),this.loading.value=!1,[2]}}))}))},t.prototype.resetOfferList=function(e){return(0,i.mG)(this,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(r){switch(r.label){case 0:return this.offset=0,this.loading.value=!0,[4,l.Z.getOfferList(new d,e.toMap())];case 1:return t=r.sent(),this.updateOfferList(t),this.loading.value=!1,[2]}}))}))},t}(n.n),h=(Symbol("OfferProvider"),function(){return(0,s.qj)(new p)})},9842:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var i=r(6252),s=r(3577),n={class:"sm:mt-32 lg:mt-36 mt-28 mb-16 w-mobile sm:w-median lg:w-large mx-auto"},l={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},o={class:"col-span-4 sm:col-span-8 lg:col-span-12"},a={class:"col-start-0 col-span-4 sm:col-span-2 lg:col-span-3"},u={class:""},f={key:0,class:"flex flex-row space-x-3.5 sm:space-x-0 space-y-0 sm:space-y-3.5 sm:flex-col",id:"sellerbtn",disabled:!0},c={key:1,class:"flex flex-row space-x-3.5 sm:space-x-0 space-y-0 sm:space-y-3.5 sm:flex-col",id:"buyerbtn",disabled:!0},d={class:"col-span-4 sm:col-span-6 lg:col-span-9"},m={key:0,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},p={key:1,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},h={key:2},_={id:"seller",class:"w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl"},y={class:"w-full"},g={class:"flex flex-col"},v={key:3,id:"seller",class:"flex flex-row mb-16"},w={key:0,class:"w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl"},b={key:1,class:"w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl"},k={class:"flex flex-wrap"},x={key:4,id:"buyer",class:"flex flex-row mb-16"},L={key:0,class:"w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl"},C={key:1,class:"w-full"},Z={class:"w-full flex flex-col bg-primary-000 dark:bg-primaryDark-black lg:p-4 p-2 sm:p-3 rounded-2xl"};function I(e,t,r,I,U,P){var D=(0,i.up)("ps-label"),O=(0,i.up)("ps-button"),M=(0,i.up)("chat-skeletor-item"),S=(0,i.up)("ps-icon"),T=(0,i.up)("ps-label-caption-3"),H=(0,i.up)("chat-horizontal-item"),E=(0,i.up)("ps-route-link"),R=(0,i.up)("chat-buyer-horizontal-item");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",l,[(0,i._)("div",o,[(0,i.Wm)(D,{class:"text-xl sm:text-3xl font-medium"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__offer")),1)]})),_:1})]),(0,i._)("div",a,[(0,i._)("div",u,[I.isSellerFocus?((0,i.wg)(),(0,i.iD)("div",f,[(0,i.Wm)(O,{class:"w-full",onClick:I.sellerClicked},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__offer_sent")),1)]})),_:1},8,["onClick"]),(0,i.Wm)(O,{class:"w-full",theme:"dark:bg-secondary-100 dark:text-textLight bg-primary-000 text-primary-400",onClick:I.buyerClicked},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__offer_received")),1)]})),_:1},8,["onClick"])])):((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(O,{class:"w-full",theme:"dark:bg-secondary-100 dark:text-textLight bg-primary-000 text-primary-400",onClick:I.sellerClicked},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__offer_sent")),1)]})),_:1},8,["onClick"]),(0,i.Wm)(O,{class:"w-full",onClick:I.buyerClicked},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__offer_received")),1)]})),_:1},8,["onClick"])]))])]),(0,i._)("div",d,[I.isSellerFocus?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(D,{class:"text-sm sm:text-xl font-medium"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__offer_sent")),1)]})),_:1})])):((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(D,{class:"text-sm sm:text-xl font-medium"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__offer_received")),1)]})),_:1})])),I.ps_loading?((0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("div",_,[(0,i._)("div",y,[(0,i._)("div",g,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(3,(function(e){return(0,i._)("div",{class:"w-full mt-2",key:e},[(0,i.Wm)(M)])})),64))])])])])):(0,i.kq)("",!0),I.isSellerFocus&&0==I.ps_loading?((0,i.wg)(),(0,i.iD)("div",v,[null==I.offerListProvider.offerList.data?((0,i.wg)(),(0,i.iD)("div",w,[(0,i.Wm)(S,{name:"mailOpen",textColor:"text-secondary-400 dark:text-secondaryDark-grey",class:"mt-2 w-full mx-auto",w:"80",h:"80"}),(0,i.Wm)(T,{class:"text-center mb-2"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__nothing_in_offer_sent")),1)]})),_:1})])):((0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("div",k,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.offerListProvider.offerList.data,(function(e){return(0,i.wg)(),(0,i.iD)("div",{class:"mt-2 w-full",key:e.id},[(0,i.Wm)(E,{to:{name:"chat",query:{buyer_user_id:e.buyerUserId,seller_user_id:e.sellerUserId,item_name:e.item.title,item_id:e.itemId,item_image_name:e.item.defaultPhoto.imgPath,item_price:e.item.price,currency:e.item.itemCurrency.currencySymbol,condition:e.item.conditionOfItem.name,chat_flag:I.PsConst.CHAT_FROM_SELLER.toString()}}},{default:(0,i.w5)((function(){return[(0,i.Wm)(H,{chathistory:e},null,8,["chathistory"])]})),_:2},1032,["to"])])})),128))])]))])):0==I.ps_loading?((0,i.wg)(),(0,i.iD)("div",x,[null==I.offerReceivedListProvider.offerList.data?((0,i.wg)(),(0,i.iD)("div",L,[(0,i.Wm)(S,{name:"mailOpen",textColor:"text-secondary-400 dark:text-secondaryDark-grey",class:"mt-2 w-full mx-auto",w:"80",h:"80"}),(0,i.Wm)(T,{class:"text-center mb-2"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,s.zw)(e.$t("offer_list__nothing_in_offer_received")),1)]})),_:1})])):((0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",Z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.offerReceivedListProvider.offerList.data,(function(e){return(0,i.wg)(),(0,i.iD)("div",{class:"w-full mt-2",key:e.id},[(0,i.Wm)(E,{to:{name:"chat",query:{buyer_user_id:e.buyerUserId,seller_user_id:e.sellerUserId,item_name:e.item.title,item_id:e.itemId,item_image_name:e.item.defaultPhoto.imgPath,item_price:e.item.price,currency:e.item.itemCurrency.currencySymbol,condition:e.item.conditionOfItem.name,chat_flag:I.PsConst.CHAT_FROM_BUYER.toString()}}},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{chathistory:e},null,8,["chathistory"])]})),_:2},1032,["to"])])})),128))])]))])):(0,i.kq)("",!0)])])])}var U=r(655),P=r(2262),D=r(3824),O=r(6037),M=r(4534),S=r(593),T=r(8385),H=r(9576),E=r(7069),R=r(9399),W=r(7640),A=function(){function e(){this.userId="",this.returnType=""}return e.prototype.OfferParameterHolder=function(){this.userId="",this.returnType=""},e.prototype.getOfferSentList=function(){return this.userId="",this.returnType=W.Z.CHAT_TYPE_SELLER,this},e.prototype.getOfferReceivedList=function(){return this.userId="",this.returnType=W.Z.CHAT_TYPE_BUYER,this},e.prototype.resetParameterHolder=function(){return this.userId="",this.returnType="",this},e.prototype.toMap=function(){var e={};return e["user_id"]=this.userId,e["return_type"]=this.returnType,e},e}(),z=A,Y=r(9020),G=r(1566),$=r(5415),J={name:"OfferListView",components:{PsButton:S.Z,PsLabel:H.Z,PsLabelCaption3:M.Z,PsIcon:O.Z,ChatHorizontalItem:Y.Z,ChatBuyerHorizontalItem:G.Z,ChatSkeletorItem:$.Z,PsRouteLink:T.Z},setup:function(){var e=R.$.psValueHolder,t=(0,E.me)(),r=(0,E.me)(),i=e.getLoginUserId();null!=i&&""!=i&&i!=W.Z.NO_LOGIN_USER||D.Z.push({name:"login"});var s=(new z).resetParameterHolder(),n=(0,P.iH)(!0),l=(0,P.iH)(!0);function o(){return(0,U.mG)(this,void 0,void 0,(function(){return(0,U.Jh)(this,(function(e){switch(e.label){case 0:return[4,t.resetOfferList(s)];case 1:return e.sent(),n.value=!1,[2]}}))}))}function a(){return(0,U.mG)(this,void 0,void 0,(function(){return(0,U.Jh)(this,(function(e){switch(e.label){case 0:return l.value=!0,n.value=!0,s.userId=i,s.returnType=W.Z.CHAT_TYPE_SELLER,[4,t.resetOfferList(s)];case 1:return e.sent(),n.value=!1,[2]}}))}))}function u(){return(0,U.mG)(this,void 0,void 0,(function(){return(0,U.Jh)(this,(function(e){switch(e.label){case 0:return l.value=!1,n.value=!0,s.userId=i,s.returnType=W.Z.CHAT_TYPE_BUYER,[4,r.resetOfferList(s)];case 1:return e.sent(),n.value=!1,[2]}}))}))}return s.userId=i,s.returnType=W.Z.CHAT_TYPE_SELLER,o(),{offerListProvider:t,offerReceivedListProvider:r,sellerClicked:a,buyerClicked:u,ps_loading:n,PsConst:W.Z,isSellerFocus:l}}},q=r(3744);const B=(0,q.Z)(J,[["render",I]]);var F=B}}]);
//# sourceMappingURL=OfferList-legacy.f9e3a20c.js.map