import { PsObject } from "./core/PsObject";
import DeleteObject from "./DeleteObject";
import PsAppVersion from "./PsAppVersion";
import PsAppSetting from "./PsAppSetting";
import UserInfo from "./UserInfo";

export default class PsAppInfo extends PsObject<PsAppInfo>{

    psAppVersion: PsAppVersion = new PsAppVersion();
    psAppSetting: PsAppSetting = new PsAppSetting();
    userInfo: UserInfo = new UserInfo();
    deleteObject: DeleteObject[] =[];
    oneDay : string ='';
    currencySymbol : string ='';
    currencyShortForm : string ='';
    stripePublishableKey : string ='';
    paypalEnable : string ='';
    stripeEnable : string ='';
    razorEnable : string ='';
    razorKey : string ='';
    offlineEnabled : string = '';
    depositPercent : string ='';
    cooldownPeriod : string ='';
    membershipDuration : string ='';
    membershipAmount : string ='';
    bidFee : string = '';
    uploadFee : string = '';
    payStackEnabled : string ='';
    payStackKey : string ='';
    inAppPurchasedEnabled : string ='';
    inAppPurchasedPrdIdAndroid : string ='';
    inAppPurchasedPrdIdIOS : string ='';

    init(
        psAppVersion : PsAppVersion,
        psAppSetting : PsAppSetting,
        userInfo : UserInfo,
        deleteObject : DeleteObject [],
        oneDay : string,
        currencySymbol : string,
        currencyShortForm : string,
        stripePublishableKey : string,
        paypalEnable : string,
        stripeEnable : string,
        razorEnable : string,
        razorKey : string,
        offlineEnabled : string,
        depositPercent : string,
        cooldownPeriod : string,
        membershipDuration : string,
        membershipAmount : string,
        bidFee : string,
        uploadFee : string,
        payStackEnabled : string,
        payStackKey : string,
        inAppPurchasedEnabled : string,
        inAppPurchasedPrdIdAndroid : string,
        inAppPurchasedPrdIdIOS : string,

    ) {
        this.psAppVersion = psAppVersion;
        this.psAppSetting = psAppSetting,
        this.userInfo = userInfo;
        this.deleteObject =deleteObject;
        this.oneDay =oneDay;
        this.currencySymbol =currencySymbol;
        this.currencyShortForm =currencyShortForm;
        this.stripePublishableKey =stripePublishableKey;
        this.paypalEnable =paypalEnable;
        this.razorEnable =razorEnable;
        this.razorKey =razorKey;
        this.depositPercent =depositPercent;
        this.cooldownPeriod =cooldownPeriod;
        this.membershipDuration =membershipDuration;
        this.membershipAmount =membershipAmount;
        this.bidFee = bidFee;
        this.uploadFee = uploadFee;
        this.stripeEnable =stripeEnable;
        this.offlineEnabled =offlineEnabled;
        this.payStackEnabled =payStackEnabled;
        this.payStackKey =payStackKey;
        this.inAppPurchasedEnabled =inAppPurchasedEnabled;
        this.inAppPurchasedPrdIdAndroid =inAppPurchasedPrdIdAndroid;
        this.inAppPurchasedPrdIdIOS =inAppPurchasedPrdIdIOS;

        return this;

    }

    getPrimaryKey(): string {
        return this.oneDay;
    }

    toMap(object: PsAppInfo): any {
        const map = {};
        map['version'] = new PsAppVersion().toMap(object.psAppVersion);
        map['app_setting'] = new PsAppSetting().toMap(object.psAppSetting);
        map['user_info'] = new UserInfo().toMap(object.userInfo);
        map['delete_history'] = new DeleteObject().toMapList(object.deleteObject);
        map['oneday'] = object.oneDay;
        map['currency_symbol'] = object.currencySymbol;
        map['currency_short_form'] = object.currencyShortForm;
        map['stripe_publishable_key'] = object.stripePublishableKey;
        map['paypal_enabled'] = object.paypalEnable;
        map['razor_enabled'] = object.stripeEnable;
        map['razor_enabled'] = object.razorEnable;
        map['razor_key'] = object.razorKey;
        map['deposit_percent'] = object.depositPercent;
        map['cooldown_period'] = object.cooldownPeriod;
        map['membership_duration'] = object.membershipDuration;
        map['membership_amount'] = object.membershipAmount;
        map['bid_fee'] = object.bidFee;
        map['upload_fee'] = object.uploadFee;
        map['stripe_enabled'] = object.stripeEnable;
        map['offline_enabled'] = object.offlineEnabled;
        map['paystack_enabled'] = object.payStackEnabled;
        map['paystack_key'] = object.payStackKey;
        map['in_app_purchased_enabled'] = object.inAppPurchasedEnabled;
        map['in_app_purchased_prd_id_android'] = object.inAppPurchasedPrdIdAndroid;
        map['in_app_purchased_prd_id_ios'] = object.inAppPurchasedPrdIdIOS;

        return map;
    }

    toMapList(objectList: PsAppInfo[]) : any[] {
        const mapList : any[] = [];
        for(let i = 0; i < objectList.length; i++) {
            if(objectList[i] != null) {
                mapList.push(this.toMap(objectList[i]));
            }
        }

        return mapList;
    }

    fromMap(obj: any) {
        return new PsAppInfo().init(

            new PsAppVersion().fromMap(obj.version),
            new PsAppSetting().fromMap(obj.app_setting),
            new UserInfo().fromMap(obj.user_info),
            new DeleteObject().fromMapList(obj.delete_history),
            obj.oneday,
            obj.currency_symbol,
            obj.currency_short_form,
            obj.stripe_publishable_key,
            obj.paypal_enabled,
            obj.stripe_enabled,
            obj.razor_enabled,
            obj.razor_key,
            obj.offline_enabled,
            obj.deposit_percent,
            obj.cooldown_period,
            obj.membership_duration,
            obj.membership_amount,
            obj.bid_fee,
            obj.upload_fee,
            obj.paystack_enabled,
            obj.paystack_key,
            obj.in_app_purchased_enabled,
            obj.in_app_purchased_prd_id_android,
            obj.in_app_purchased_prd_id_ios

       );
    }   
    fromMapList(objList : any[] ) : PsAppInfo[] {
        const psAppInfoList : PsAppInfo[] = [];
        for(const obj in objList) {
            if(obj != null) {
                psAppInfoList.push(this.fromMap(obj));
            }
        }

        return psAppInfoList;
    }
    

}