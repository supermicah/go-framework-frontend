import {parseInt} from "lodash";

export function convertMenuResourcesJSReq2Go(items: API.MenuResource[]): GoAPI.MenuResource[] {
    let goItems: GoAPI.MenuResource[] = [];
    for (let i = 0; i < items.length; i++) {
        goItems.push(convertMenuResourceJSReq2Go(items[i]));
    }
    return goItems;
}

export function convertMenuResourceJSReq2Go(item: API.MenuResource): GoAPI.MenuResource {
    let goItem: GoAPI.MenuResource = {}
    Object.assign(goItem, item);
    if (item.id) {
        goItem.id = parseInt(item.id);
    }
    if (item.menu_id) {
        goItem.menu_id = parseInt(item.menu_id);
    }
    return goItem;
}

export function convertMenuResourcesGoResp2JS(items: GoAPI.MenuResource[]): API.MenuResource[] {
    let jsItems: API.MenuResource[] = [];
    for (let i = 0; i < items.length; i++) {
        jsItems.push(convertMenuResourceGoResp2JS(items[i]));
    }
    return jsItems;
}

export function convertMenuResourceGoResp2JS(item: GoAPI.MenuResource): API.MenuResource {
    let jsItem: API.MenuResource = {}
    Object.assign(jsItem, item);
    if (item.id) {
        jsItem.id = `${item.id}`;
    }
    if (item.menu_id) {
        jsItem.menu_id = `${item.menu_id}`;
    }
    return jsItem;
}