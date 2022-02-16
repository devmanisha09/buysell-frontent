(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[3555],{7966:function(t){
/*! Javascript-number-formatter v2.0.9 */
!function(e,i){t.exports=i()}(0,(function(){"use strict";const t=/[0-9\-+#]/,e=/[^\d\-+#]/g;function i(e){return e.search(t)}return(t,a,r={})=>{if(!t||isNaN(Number(a)))return a;const s=function(t="#.##"){const a={},r=t.length,s=i(t);a.prefix=s>0?t.substring(0,s):"";const n=i(t.split("").reverse().join("")),d=r-n,l=t.substring(d,d+1),o=d+("."===l||","===l?1:0);a.suffix=n>0?t.substring(o,r):"",a.mask=t.substring(s,o),a.maskHasNegativeSign="-"===a.mask.charAt(0),a.maskHasPositiveSign="+"===a.mask.charAt(0);let u=a.mask.match(e);return a.decimal=u&&u[u.length-1]||".",a.separator=u&&u[1]&&u[0]||",",u=a.mask.split(a.decimal),a.integer=u[0],a.fraction=u[1],a}(t),n=function(t,e,i){let a=!1;const r={value:t};t<0&&(a=!0,r.value=-r.value),r.sign=a?"-":"",r.value=Number(r.value).toFixed(e.fraction&&e.fraction.length),r.value=Number(r.value).toString();const s=e.fraction&&e.fraction.lastIndexOf("0");let[n="0",d=""]=r.value.split(".");return(!d||d&&d.length<=s)&&(d=s<0?"":Number("0."+d).toFixed(s+1).replace("0.","")),r.integer=n,r.fraction=d,function(t,e){t.result="";const i=e.integer.split(e.separator),a=i.join(""),r=a&&a.indexOf("0");if(r>-1)for(;t.integer.length<a.length-r;)t.integer="0"+t.integer;else 0===Number(t.integer)&&(t.integer="");const s=i[1]&&i[i.length-1].length;if(s){const i=t.integer.length,a=i%s;for(let r=0;r<i;r++)t.result+=t.integer.charAt(r),!((r-a+1)%s)&&r<i-s&&(t.result+=e.separator)}else t.result=t.integer;t.result+=e.fraction&&t.fraction?e.decimal+t.fraction:""}(r,e),"0"!==r.result&&""!==r.result||(a=!1,r.sign=""),!a&&e.maskHasPositiveSign?r.sign="+":a&&e.maskHasPositiveSign?r.sign="-":a&&(r.sign=i&&i.enforceMaskSign&&!e.maskHasNegativeSign?"":"-"),r}(a,s,r);return s.prefix+n.sign+n.result+s.suffix}}))},9054:function(t,e,i){"use strict";var a=i(655),r=i(6921),s=i(7432),n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.id="",e.itemId="",e.startDate="",e.startTimeStamp="",e.endDate="",e.endTimeStamp="",e.amount="",e.paymentMethod="",e.transCode="",e.status="",e.addedDate="",e.addedUserId="",e.updatedDate="",e.updatedUserId="",e.updatedFlag="",e.addedDateStr="",e.paidStatus="",e.item=new s.Z,e}return(0,a.ZT)(e,t),e.prototype.init=function(t,e,i,a,r,s,n,d,l,o,u,m,c,p,f,g,h,x){return this.id=t,this.itemId=e,this.startDate=i,this.startTimeStamp=a,this.endTimeStamp=s,this.endDate=r,this.amount=n,this.paymentMethod=d,this.transCode=l,this.status=o,this.addedDate=u,this.addedUserId=m,this.updatedDate=c,this.updatedUserId=p,this.updatedFlag=f,this.addedDateStr=g,this.paidStatus=h,this.item=x,this},e.prototype.getPrimaryKey=function(){return this.id},e.prototype.toMap=function(t){var e={};return e["id"]=t.id,e["item_id"]=t.itemId,e["start_date"]=t.startDate,e["start_timestamp"]=t.startTimeStamp,e["end_timestamp"]=t.endTimeStamp,e["end_date"]=t.endDate,e["amount"]=t.amount,e["payment_method"]=t.paymentMethod,e["trans_code"]=t.transCode,e["status"]=t.status,e["added_date"]=t.addedDate,e["added_user_id"]=t.addedUserId,e["updated_date"]=t.updatedDate,e["updated_user_id"]=t.updatedUserId,e["updated_flag"]=t.updatedFlag,e["added_date_str"]=t.addedDateStr,e["paid_status"]=t.paidStatus,e["item"]=(new s.Z).toMap(t.item),e},e.prototype.toMapList=function(t){for(var e=[],i=0;i<t.length;i++)null!=t[i]&&e.push(this.toMap(t[i]));return e},e.prototype.fromMap=function(t){return(new e).init(t.id,t.item_id,t.start_date,t.start_timestamp,t.end_date,t.end_timestamp,t.amount,t.payment_method,t.trans_code,t.status,t.added_date,t.added_user_id,t.updated_date,t.updated_user_id,t.updated_flag,t.added_date_str,t.paid_status,(new s.Z).fromMap(t.item))},e.prototype.fromMapList=function(t){var e=[];for(var i in t)null!=i&&e.push(this.fromMap(i));return e},e}(r.L);e["Z"]=n},71:function(t,e,i){"use strict";i.d(e,{xU:function(){return m}});var a=i(655),r=i(2262),s=i(4578),n=i(2255),d=i(1597),l=i(9054),o=i(9070),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isNoMoreRecord=(0,r.qj)(!1),e.paidAdItemList=(0,r.qj)(new d.Z),e.loading=(0,r.qj)({value:!1}),e.limit=30,e.offset=0,e.id="",e}return(0,a.ZT)(e,t),e.prototype.updatePaidAdItemList=function(t){var e;null!=this.paidAdItemList&&null!=this.paidAdItemList.data&&this.paidAdItemList.data.length>0&&0!=this.offset?(null!=t.data&&t.data.length>0?(e=this.paidAdItemList.data).push.apply(e,t.data):this.isNoMoreRecord=!0,this.paidAdItemList.code=t.code,this.paidAdItemList.status=t.status,this.paidAdItemList.message=t.message):this.paidAdItemList=t,null!=this.paidAdItemList&&null!=this.paidAdItemList.data&&(this.offset=this.paidAdItemList.data.length)},e.prototype.loadPaidAdItemList=function(t){return(0,a.mG)(this,void 0,void 0,(function(){var e;return(0,a.Jh)(this,(function(i){switch(i.label){case 0:return this.loading.value=!0,[4,n.Z.getPaidAdItemList(new l.Z,t,this.limit,this.offset)];case 1:return e=i.sent(),o.Z.log("paid ad"),o.Z.log(e),this.updatePaidAdItemList(e),this.loading.value=!1,[2]}}))}))},e.prototype.resetPaidAdItemList=function(t){return(0,a.mG)(this,void 0,void 0,(function(){var e;return(0,a.Jh)(this,(function(i){switch(i.label){case 0:return this.offset=0,this.loading.value=!0,[4,n.Z.getPaidAdItemList(new l.Z,t,this.limit,this.offset)];case 1:return e=i.sent(),this.updatePaidAdItemList(e),this.loading.value=!1,[2]}}))}))},e}(s.n),m=(Symbol("PaidAdItemProvider"),function(){return(0,r.qj)(new u)})},2257:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var a=i(6252),r=i(3577);function s(t,e,i,s,n,d){return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["overflow-hidden lg:rounded-2xl rounded-xl bg-primary-000 dark:bg-gray-900 dark:border-black",i.enabledHover?"hover:shadow-lg":""]),key:""},[(0,a.WI)(t.$slots,"default",{class:""})],2)}var n={name:"PsCard",props:{enabledHover:{type:Boolean,default:!1}}},d=i(3744);const l=(0,d.Z)(n,[["render",s]]);var o=l},6157:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var a=i(6252);function r(t,e,i,r,s,n){var d=(0,a.up)("ps-label");return(0,a.wg)(),(0,a.j4)(d,{class:"lg:text-3xl sm:text-2xl text-xl font-medium",textColor:t.textColor},{default:(0,a.w5)((function(){return[(0,a.WI)(t.$slots,"default")]})),_:3},8,["textColor"])}var s=i(9576),n=(0,a.aZ)({name:"PsLabelHeader4",components:{PsLabel:s.Z},props:{textColor:{type:String,default:"text-secondary-500 dark:text-secondaryDark-white"}}}),d=i(3744);const l=(0,d.Z)(n,[["render",r]]);var o=l},3938:function(t,e,i){"use strict";i.d(e,{Z:function(){return f}});var a=i(6252),r={class:"w-full"},s={class:"flex items-center justify-between leading-none p-3"},n={class:"w-full rounded-md mx-4 mt-1"},d={class:"rounded-md mt-2"};function l(t,e,i,l,o,u){var m=(0,a.up)("Skeletor"),c=(0,a.up)("ps-card");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(c,{class:"flex flex-col my-2 bg-primary-0000 dark:bg-primaryDark-black"},{default:(0,a.w5)((function(){return[(0,a._)("div",s,[(0,a._)("div",null,[(0,a.Wm)(m,{circle:"",size:"3rem"})]),(0,a._)("div",n,[(0,a.Wm)(m,{height:"14",class:"rounded-md"}),(0,a.Wm)(m,{height:"14",class:"rounded-md mt-2"})])]),(0,a.Wm)(m,{height:"10rem",class:"w-full mt-2"}),(0,a._)("div",d,[(0,a.Wm)(m,{height:"16",class:"w-40 rounded-md ms-2"}),(0,a.Wm)(m,{height:"16",class:"w-20 rounded-md m-2"}),(0,a.Wm)(m,{height:"16",class:"rounded-md m-2"}),(0,a.Wm)(m,{height:"1",class:"rounded-md"}),(0,a.Wm)(m,{height:"10",class:"w-32 rounded-md mx-2 mt-2"}),(0,a.Wm)(m,{height:"10",class:"w-10 rounded-md mx-2 my-4"})])]})),_:1})])}var o=i(5856),u=i(2257),m=(0,a.aZ)({name:"ItemHorizontalSkeletorItem",props:{},components:{Skeletor:o.SJ,PsCard:u.Z},setup:function(){}}),c=i(3744);const p=(0,c.Z)(m,[["render",l]]);var f=p},8739:function(t,e,i){"use strict";i.d(e,{Z:function(){return ot}});var a=i(6252),r=i(3577),s=i(7687),n={key:0,class:"flex items-center justify-between leading-none lg:px-2 px-1 py-1 bg-primary-000 dark:bg-primaryDark-black rounded-t-xl lg:rounded-t-2xl"},d={class:"flex flex-row items-center no-underline text-black"},l={class:""},o=["src"],u={class:"ms-2 mt-1 text-sm flex-grow"},m={class:"flex"},c={key:0,alt:"Placeholder",class:"mx-1 w-4 h-4 object-fill",width:"15",height:"10",src:s},p={class:"relative lg:h-56 h-36"},f={class:"relative lg:h-56 h-36"},g={class:"absolute"},h=(0,a._)("div",{class:"relative lg:pt-48 pt-28"},null,-1),x={class:"relative opacity-80 bg-primary-500 dark:bg-primaryDark-accent rounded-b-lg"},_={class:"flex flex-row pt-2 px-3"},v={class:"pt-1 px-3 flex justify-between"},w={class:"flex mt-1"},y={class:"flex content-center items-center"},k={class:"pt-2 lg:px-3 px-2 flex content-centerjustify-between"},b={class:"flex flex-row mt-1"},A={class:"pt-2 lg:px-3 px-2 flex content-center justify-between"},P={class:"flex flex-row mt-1"},I={class:"pt-2 lg:px-3 px-2 flex content-center justify-between"},S={class:"flex flex-row mt-1"},D=(0,a._)("div",{class:"mb-4"},null,-1);function C(t,e,i,s,C,z){var W=(0,a.up)("ps-label"),L=(0,a.up)("paid-ad-item-paid-status"),Z=(0,a.up)("ps-icon"),N=(0,a.up)("ps-line"),U=(0,a.up)("ps-card"),j=(0,a.Q2)("lazy");return(0,a.wg)(),(0,a.iD)("div",{class:"cursor-pointer sm:w-full md:w-full",onClick:e[3]||(e[3]=function(t){return null!=i.onClick?i.onClick(i.paiditem):null})},[(0,a.Wm)(U,{class:"flex flex-col my-2",enabledHover:!0},{default:(0,a.w5)((function(){return["show"==s.psValueHolder.showProfile?((0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",d,[(0,a._)("div",l,[(0,a._)("img",{alt:"Placeholder",width:"15px",height:"10px",class:"rounded-full bg-transparent lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center object-cover",src:s.itempaidProvider.imageUrl(i.paiditem?i.paiditem.item.user.userProfilePhoto:"",1),onError:e[0]||(e[0]=function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return s.itempaidProvider.defaultProfileImage&&(t=s.itempaidProvider).defaultProfileImage.apply(t,e)})},null,40,o)]),(0,a._)("p",u,[(0,a._)("span",m,[(0,a.Wm)(W,{class:"truncate lg:text-sm text-xs font-medium"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.item.user.userName:""),1)]})),_:1}),i.paiditem&&"1"==i.paiditem.item.user.isVerifybluemark?((0,a.wg)(),(0,a.iD)("img",c)):(0,a.kq)("",!0)]),(0,a.Wm)(W,{class:"font-medium text-xxs lg:text-xs",textColor:"text-secondary-400 dark:text-secondaryDark-grey"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.addedDateStr:""),1)]})),_:1})])])])):(0,a.kq)("",!0),(0,a._)("div",{class:(0,r.C_)(["lg:px-2 lg:py-2 px-1 py-1 bg-primary-000 dark:bg-primaryDark-black","show"==s.psValueHolder.showProfile?"rounded-b-xl lg:rounded-b-2xl pt-0":"rounded-xl lg:rounded-2xl"])},[(0,a._)("div",p,[(0,a._)("div",f,[(0,a._)("div",g,[(0,a.wy)((0,a._)("img",{alt:"Placeholder",class:"rounded-lg block lg:hidden object-cover w-screen lg:h-56 h-36",width:"640px",height:"360px",onError:e[1]||(e[1]=function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return s.itempaidProvider.defaultCarImage&&(t=s.itempaidProvider).defaultCarImage.apply(t,e)})},null,544),[[j,s.itempaidProvider.imageUrl(i.paiditem?i.paiditem.item.defaultPhoto.imgPath:"",2)]]),(0,a.wy)((0,a._)("img",{alt:"Placeholder",class:"rounded-lg lg:block hidden object-cover w-screen lg:h-56 h-36",width:"640px",height:"360px",onError:e[2]||(e[2]=function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return s.itempaidProvider.defaultCarImage&&(t=s.itempaidProvider).defaultCarImage.apply(t,e)})},null,544),[[j,s.itempaidProvider.imageUrl(i.paiditem?i.paiditem.item.defaultPhoto.imgPath:"",3)]])]),h,(0,a._)("div",x,[i.paiditem&&"1"==i.paiditem.item.isSoldOut?((0,a.wg)(),(0,a.j4)(W,{key:0,class:"font-medium text-sm lg:text-base lg:py-1.5 py-2 rounded-b-lg text-center",textColor:"text-textLight dark:text-textDark"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.$t("paid_item_horizontal_item__sold_out")),1)]})),_:1})):(0,a.kq)("",!0)])]),(0,a.Wm)(L,{status:i.paiditem?i.paiditem.paidStatus:""},null,8,["status"])]),(0,a._)("div",_,[(0,a.Wm)(W,{class:"truncate font-medium text-sm lg:text-base"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.item.title:""),1)]})),_:1}),(0,a.Wm)(W,{class:"ms-2 flex-grow font-light text-xxs lg:text-xs",textColor:"text-primary-500 dark:text-primaryDark-accent"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.item.conditionOfItem.name:""),1)]})),_:1})]),(0,a.Wm)(W,{class:"pt-1 px-3 font-medium text-xs lg:text-base",textColor:"text-primary-500 dark:text-primaryDark-accent"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.item.itemCurrency.currencySymbol:"")+" "+(0,r.zw)(s.formatPrice(i.paiditem?i.paiditem.item.price:"")),1)]})),_:1}),(0,a._)("div",v,[(0,a._)("div",w,[(0,a.Wm)(Z,{textColor:"text-secondary-400 dark:text-secondaryDark-grey",name:"location",h:"14",w:"14",class:"text-secondary-400 dark:text-textdark-100 me-1"}),(0,a.Wm)(W,{class:"truncate font-light text-xxs lg:text-sm",textColor:"text-secondary-400 dark:text-secondaryDark-grey"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.item.itemLocation.name:""),1)]})),_:1})]),(0,a._)("div",y,[(0,a.Wm)(W,{class:"truncate font-light text-xxs lg:text-sm",textColor:"text-secondary-400 dark:text-secondaryDark-grey"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.item.itemType.name:""),1)]})),_:1})])]),(0,a.Wm)(N,{class:"mt-2 mx-3"}),(0,a._)("div",k,[(0,a._)("div",b,[(0,a.Wm)(W,{class:"font-light text-xxs lg:text-xs",textColor:"text-secondary-400 dark:text-secondaryDark-grey"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.$t("paid_item_horizontal_item__start"))+": ",1)]})),_:1}),(0,a.Wm)(W,{class:"ms-1 font-medium text-xxs lg:text-sm"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.startDate:""),1)]})),_:1})])]),(0,a._)("div",A,[(0,a._)("div",P,[(0,a.Wm)(W,{class:"font-light text-xxs lg:text-xs",textColor:"text-secondary-400 dark:text-secondaryDark-grey"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.$t("paid_item_horizontal_item__end"))+": ",1)]})),_:1}),(0,a.Wm)(W,{class:"ms-1 font-medium text-xxs lg:text-sm"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.endDate:""),1)]})),_:1})])]),(0,a._)("div",I,[(0,a._)("div",S,[(0,a.Wm)(W,{class:"font-light text-xxs lg:text-xs",textColor:"text-secondary-400 dark:text-secondaryDark-grey"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(t.$t("paid_item_horizontal_item__total_spending"))+": ",1)]})),_:1}),(0,a.Wm)(W,{class:"ms-1 font-medium text-xxs lg:text-sm"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(i.paiditem?i.paiditem.item.itemCurrency.currencySymbol:"")+" "+(0,r.zw)(i.paiditem?i.paiditem.amount:""),1)]})),_:1})])]),D],2)]})),_:1})])}var z=i(9576),W={class:""},L={key:0},Z={class:"absolute py-2 px-4 right-2 top-2 bg-green-500 text-textLight text-center leading-4 rounded-md"},N={key:1},U={class:"absolute py-2 px-4 right-2 top-2 bg-green-500 text-textLight text-center leading-4 rounded-md"},j={key:2},O={class:"absolute py-2 px-4 right-2 top-2 bg-yellow-500 text-textLight text-center leading-4 rounded-md"},M={key:3},F={class:"absolute py-2 px-4 right-2 top-2 bg-gray-500 text-textLight text-center leading-4 rounded-md"},H={key:4},J={class:"absolute py-2 px-4 right-2 top-2 bg-yellow-500 text-textLight text-center rounded-md"},K={key:5},$={class:"absolute py-2 px-4 right-2 top-2 bg-red-600 text-textLight text-center leading-4 rounded-md"};function T(t,e,i,s,n,d){var l=(0,a.up)("ps-label-caption");return(0,a.wg)(),(0,a.iD)("div",W,["Progress"==i.status?((0,a.wg)(),(0,a.iD)("div",L,[(0,a.Wm)(l,null,{default:(0,a.w5)((function(){return[(0,a._)("div",Z,(0,r.zw)(t.$t("paidad_item__progress")),1)]})),_:1})])):"Finished"==i.status?((0,a.wg)(),(0,a.iD)("div",N,[(0,a.Wm)(l,null,{default:(0,a.w5)((function(){return[(0,a._)("div",U,(0,r.zw)(t.$t("paidad_item__completed")),1)]})),_:1})])):"Not yet start"==i.status?((0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(l,null,{default:(0,a.w5)((function(){return[(0,a._)("div",O,(0,r.zw)(t.$t("paidad_item__not_reached")),1)]})),_:1})])):"not_available"==i.status?((0,a.wg)(),(0,a.iD)("div",M,[(0,a.Wm)(l,null,{default:(0,a.w5)((function(){return[(0,a._)("div",F,(0,r.zw)(t.$t("paidad_item__no_action")),1)]})),_:1})])):"Waiting For Approval"==i.status?((0,a.wg)(),(0,a.iD)("div",H,[(0,a.Wm)(l,null,{default:(0,a.w5)((function(){return[(0,a._)("div",J,(0,r.zw)(t.$t("paidad_item__wait_approval")),1)]})),_:1})])):"Reject"==i.status?((0,a.wg)(),(0,a.iD)("div",K,[(0,a.Wm)(l,null,{default:(0,a.w5)((function(){return[(0,a._)("div",$,(0,r.zw)(t.$t("paidad_item__wait_rejected")),1)]})),_:1})])):(0,a.kq)("",!0)])}var q=i(9756),B={name:"PaidAdItemPaidStatus",components:{PsLabelCaption:q.Z},props:{status:{type:String},onClick:Function}},V=i(3744);const R=(0,V.Z)(B,[["render",T]]);var E=R,Q=i(2257),G=i(6037),Y=i(7696),X=i(679),tt=i(4252),et=i(7966),it=i.n(et),at=i(9054),rt=i(71),st=i(9399),nt=i(7558),dt={name:"PaidAdItemHorizontalItem",components:{PsLabel:z.Z,PsCard:Q.Z,PsIcon:G.Z,PsLine:Y.Z,PaidAdItemPaidStatus:E},props:{paiditem:{type:at.Z},onClick:Function},setup:function(){st.$.psValueHolder=(0,nt.$E)();var t=(0,rt.xU)(),e=st.$.psValueHolder;function i(t){return"0"==t.toString()?X.a.global.t("item_price__free"):it()(tt.Z.priceFormat,t)}return{itempaidProvider:t,formatPrice:i,psValueHolder:e}}};const lt=(0,V.Z)(dt,[["render",C]]);var ot=lt},5856:function(t,e,i){"use strict";i.d(e,{SJ:function(){return o}});var a=i(6252),r=i(2262);function s(t,e="px"){return null==t||""===t?void 0:isNaN(t)?String(t):`${Number(t)}${e}`}const n=Symbol(),d={shimmer:!0};function l(){const t=(0,a.f3)(n,d);return t||(0,a.ZK)("Skeletor is not installed on this Vue application."),t}const o=(0,a.aZ)({name:"Skeletor",props:{as:{type:String,default:"span"},circle:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},size:{type:[String,Number],default:null},width:{type:[String,Number],default:null},height:{type:[String,Number],default:null},shimmer:{type:Boolean,default:void 0}},setup(t){const e=l(),i=(0,r.Fl)((()=>!t.circle&&(t.size||t.height))),n=(0,r.Fl)((()=>!t.circle&&!t.size&&!t.height)),d=(0,r.Fl)((()=>void 0!==t.shimmer?!t.shimmer:!e.shimmer)),o=(0,r.Fl)((()=>({"vue-skeletor":!0,"vue-skeletor--rect":i.value,"vue-skeletor--text":n.value,"vue-skeletor--shimmerless":d.value,"vue-skeletor--circle":t.circle,"vue-skeletor--pill":t.pill}))),u=(0,r.Fl)((()=>{const e={};if(t.size){const i=s(t.size);e.width=i,e.height=i}return!t.size&&t.width&&(e.width=s(t.width)),!t.size&&t.height&&(e.height=s(t.height)),e})),m=n.value?"‌":null;return()=>(0,a.h)(t.as,{class:o.value,style:u.value},[m])}})},7687:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAQlBMVEUAAABKkONKkOJKkOJKkeRKkeJKkONJkONJkOFKkOJKkeJLkOJJkeRKkOJKkONLkONKkOJLkeNMj+NKkOJLj+JKkOIGNyNQAAAAFXRSTlMA4+orOPCqSYHdu2od9L28g1JAM4K5jZ1YAAAAlklEQVQoz73SWw6EIAwF0FYpBRxf43T/Wx0lGKho+PN+QU4g0BZeC09EMz/pIjHuhoxFlBREa7QOcsmgzkqV8ryt2RaMNeMjd5tRvGjtYSv/x1ftu2PBiadblZCY4m5dR6VCij/wHZNqnuPO7+6TqstZToes+WnwO71UV5XFu6zYKGqjJY2GNsahPUw6Tv2oDgeiwPBW/s++HPOjp2e/AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=3555-legacy.dc19b6e4.js.map