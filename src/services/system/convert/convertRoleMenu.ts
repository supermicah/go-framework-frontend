import {parseInt} from "lodash";

export function convertRoleMenusGoResp2JS(roleMenus: GoAPI.RoleMenu[]): API.RoleMenu[] {
    let jsRoleMenus: API.RoleMenu[] = [];
    for (let i = 0; i < roleMenus.length; i++) {
        jsRoleMenus.push(convertRoleMenuGoResp2JS(roleMenus[i]));
    }
    return jsRoleMenus;
}

export function convertRoleMenuGoResp2JS(roleMenu: GoAPI.RoleMenu): API.RoleMenu {
    let jsRoleMenu: API.RoleMenu = {}
    Object.assign(jsRoleMenu, roleMenu);
    if (roleMenu.id) {
        jsRoleMenu.id = `${roleMenu.id}`;
    }
    if (roleMenu.menu_id) {
        jsRoleMenu.menu_id = `${roleMenu.menu_id}`;
    }
    if (roleMenu.role_id) {
        jsRoleMenu.role_id = `${roleMenu.role_id}`;
    }
    return jsRoleMenu;
}

export function convertRoleMenusJSReq2Go(roleMenus: API.RoleMenu[]): GoAPI.RoleMenu[] {
    let goRoleMenus: GoAPI.RoleMenu[] = [];
    for (let i = 0; i < roleMenus.length; i++) {
        goRoleMenus.push(convertRoleMenuJSReq2Go(roleMenus[i]));
    }
    return goRoleMenus;
}

export function convertRoleMenuJSReq2Go(roleMenu: API.RoleMenu): GoAPI.RoleMenu {
    let goRoleMenu: GoAPI.RoleMenu = {}
    Object.assign(goRoleMenu, roleMenu);

    if (roleMenu.id) {
        goRoleMenu.id = parseInt(roleMenu.id);
    }
    if (roleMenu.menu_id) {
        goRoleMenu.menu_id = parseInt(roleMenu.menu_id);
    }
    if (roleMenu.role_id) {
        goRoleMenu.role_id = parseInt(roleMenu.role_id);
    }

    return goRoleMenu;
}