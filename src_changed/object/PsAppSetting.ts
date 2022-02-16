import { PsObject } from "./core/PsObject";

export default class PsAppSetting extends PsObject<PsAppSetting>{

    latitude : string = '';
    longitude : string = '';
    isSubLocation : string = '';
    isThumbnailGenerate : string = '';
   
    init(
        latitude : string,
        longitude : string,
        isSubLocation : string,
        isThumbnailGenerate :string

       

    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.isSubLocation = isSubLocation;
        this.isThumbnailGenerate = isThumbnailGenerate;

        return this;

    }

    getPrimaryKey(): string {
        return this.latitude;
    }

    toMap(object: PsAppSetting): any {
        const map = {};
        map['lat'] = object.latitude;
        map['lng'] = object.longitude;
        map['is_sub_location'] = object.isSubLocation;
        map['is_thumb2x_3x_generate'] = object.isThumbnailGenerate;
        
        return map;
    }

    toMapList(objectList: PsAppSetting[]) : any[] {
        const mapList : any[] = [];
        for(let i = 0; i < objectList.length; i++) {
            if(objectList[i] != null) {
                mapList.push(this.toMap(objectList[i]));
            }
        }

        return mapList;
    }

    fromMap(obj: any) {
        return new PsAppSetting().init(


            obj.lat,
            obj.lng,
            obj.is_sub_location,
            obj.is_thumb2x_3x_generate

       );
    }   
    fromMapList(objList : any[] ) : PsAppSetting[] {
        const psAppSettingList : PsAppSetting[] = [];
        for(const obj in objList) {
            if(obj != null) {
                psAppSettingList.push(this.fromMap(obj));
            }
        }

        return psAppSettingList;
    }
    

}