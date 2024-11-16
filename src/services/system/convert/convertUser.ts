import {parseInt} from "lodash";
import {convertUserRolesJSReq2Go, convertUserRolesGoResp2JS} from "@/services/system/convert/convertUserRole";

export function convertUserJSRequest2Go(item: API.User): GoAPI.User {
    let goItem: GoAPI.User = {}
    Object.assign(goItem, item);
    if (item.id) {
        goItem.id = parseInt(item.id);
    }
    if (item.roles) {
        goItem.roles = convertUserRolesJSReq2Go(item.roles)
    }
    return goItem;
}

export function convertUserGoResponse2JS(item:any):any{
    if (Array.isArray(item)){
        return convertUsersGo2JS(item);
    }else{
        return convertUserGo2JS(item);
    }
}

export function convertUsersGo2JS(items: GoAPI.User[]): API.User[] {
    let jsItems: API.User[] = [];
    for (let i = 0; i < items.length; i++) {
        jsItems.push(convertUserGo2JS(items[i]));
    }
    return jsItems;
}

export function convertUserGo2JS(item: GoAPI.User): API.User {
    let jsItem: API.User = {}
    Object.assign(jsItem, item);
    if (item.id) {
        jsItem.id = `${item.id}`;
    }
    if (item.roles) {
        jsItem.roles = convertUserRolesGoResp2JS(item.roles)
    }
    return jsItem;
}