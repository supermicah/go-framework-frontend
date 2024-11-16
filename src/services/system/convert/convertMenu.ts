import {parseInt} from "lodash";
import {
    convertMenuResourcesJSReq2Go,
    convertMenuResourcesGoResp2JS
} from "@/services/system/convert/convertMenuResource";

export function convertMenuJSRequest2Go(item: API.Menu): GoAPI.Menu {
    let goItem: GoAPI.Menu = {}
    Object.assign(goItem, item);
    if (item.id) {
        goItem.id = parseInt(item.id);
    }
    if (item.children) {
        goItem.children = convertMenusJSReq2Go(item.children);
    }
    if (item.parent_id) {
        goItem.parent_id = parseInt(item.parent_id);
    }
    if (item.resources) {
        goItem.resources = convertMenuResourcesJSReq2Go(item.resources)
    }
    return goItem;
}

export function convertMenusJSReq2Go(menus: API.Menu[]): GoAPI.Menu[] {
    let goMenus: GoAPI.Menu[] = [];
    for (let i = 0; i < menus.length; i++) {
        goMenus.push(convertMenuJSReq2Go(menus[i]));
    }
    return goMenus;
}

export function convertMenuJSReq2Go(menu: API.Menu): GoAPI.Menu {
    let goMenu: GoAPI.Menu = {}
    Object.assign(goMenu, menu);
    if (menu.children) {
        goMenu.children = convertMenusJSReq2Go(menu.children);
    }
    if (menu.id) {
        goMenu.id = parseInt(menu.id);
    }
    if (menu.parent_id) {
        goMenu.parent_id = parseInt(menu.parent_id);
    }
    if (menu.resources) {
        goMenu.resources = convertMenuResourcesJSReq2Go(menu.resources)
    }
    return goMenu;
}

export function convertMenuGoResponse2JS(item: any): any {
    if (Array.isArray(item)) {
        return convertMenusGoResp2JS(item);
    } else {
        return convertMenuGoResp2JS(item);
    }
}

export function convertMenusGoResp2JS(items: GoAPI.Menu[]): API.Menu[] {
    let jsItems: API.Menu[] = [];
    for (let i = 0; i < items.length; i++) {
        jsItems.push(convertMenuGoResp2JS(items[i]));
    }
    return jsItems;
}

export function convertMenuGoResp2JS(item: GoAPI.Menu): API.Menu {
    let jsItem: API.Menu = {}
    Object.assign(jsItem, item);
    if (item.id) {
        jsItem.id = `${item.id}`;
    }
    if (item.parent_id) {
        jsItem.parent_id = `${item.parent_id}`;
    }
    if (item.children) {
        jsItem.children = convertMenusGoResp2JS(item.children);
    }
    if (item.resources) {
        jsItem.resources = convertMenuResourcesGoResp2JS(item.resources)
    }
    return jsItem;
}