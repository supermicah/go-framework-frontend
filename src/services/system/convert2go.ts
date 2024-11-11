import {convertTypeLogger, convertTypeMenu, convertTypeRole, convertTypeUser} from "@/services/system/convert";
import {
    ConvertLoggerGo2JS,
} from "@/services/system/convert2js";
import {parseInt} from "lodash";

export function ConvertGo(type: string, c: any): any {
    let response: any = {}
    if (c) {
        switch (type) {
            case convertTypeUser:
                response = ConvertUserJS2Go(c);
                break;
            case convertTypeMenu:
                response = ConvertMenuJS2Go(c);
                break;
            case convertTypeRole:
                response = ConvertRoleJS2Go(c);
                break;
            case convertTypeLogger:
                response = ConvertLoggerGo2JS(c);
                break;
            default:
        }
    }
    return response;
}

export function ConvertUserJS2Go(user: API.User): GoAPI.User {
    let goUser: GoAPI.User = {}
    Object.assign(goUser, user);
    if (user.id) {
        goUser.id = parseInt(user.id);
    }
    if (user.roles) {
        goUser.roles = ConvertUserRolesJS2Go(user.roles)
    }
    return goUser;
}


export function ConvertUserRolesJS2Go(userRoles: API.UserRole[]): GoAPI.UserRole[] {
    let goUserRoles: GoAPI.UserRole[] = [];
    for (let i = 0; i < userRoles.length; i++) {
        goUserRoles.push(ConvertUserRoleJS2Go(userRoles[i]));
    }
    return goUserRoles;
}

export function ConvertUserRoleJS2Go(userRole: API.UserRole): GoAPI.UserRole {
    let goUserRole: GoAPI.UserRole = {}
    Object.assign(goUserRole, userRole);
    if (userRole.id) {
        goUserRole.id = parseInt(userRole.id);
    }
    if (userRole.role_id) {
        goUserRole.role_id = parseInt(userRole.role_id);
    }
    if (userRole.user_id) {
        goUserRole.user_id = parseInt(userRole.user_id);
    }

    return goUserRole;
}

export function ConvertMenusJS2Go(menus: API.Menu[]): GoAPI.Menu[] {
    let goMenus: GoAPI.Menu[] = [];
    for (let i = 0; i < menus.length; i++) {
        goMenus.push(ConvertMenuJS2Go(menus[i]));
    }
    return goMenus;
}

export function ConvertMenuJS2Go(menu: API.Menu): GoAPI.Menu {
    let goMenu: GoAPI.Menu = {}
    Object.assign(goMenu, menu);
    if (menu.children) {
        goMenu.children = ConvertMenusJS2Go(menu.children);
    }
    if (menu.id) {
        goMenu.id = parseInt(menu.id);
    }
    if (menu.parent_id) {
        goMenu.parent_id = parseInt(menu.parent_id);
    }
    if (menu.resources) {
        goMenu.resources = ConvertMenuResourcesJS2Go(menu.resources)
    }
    return goMenu;
}

export function ConvertMenuResourcesJS2Go(menuResources: API.MenuResource[]): GoAPI.MenuResource[] {
    let goMenuResources: GoAPI.MenuResource[] = [];
    for (let i = 0; i < menuResources.length; i++) {
        goMenuResources.push(ConvertMenuResourceJS2Go(menuResources[i]));
    }
    return goMenuResources;
}

export function ConvertMenuResourceJS2Go(menuResource: API.MenuResource): GoAPI.MenuResource {
    let goMenuResource: GoAPI.MenuResource = {}
    Object.assign(goMenuResource, menuResource);
    if (menuResource.id) {
        goMenuResource.id = parseInt(menuResource.id);
    }
    return goMenuResource;
}

export function ConvertRoleMenusJS2Go(roleMenus: API.RoleMenu[]): GoAPI.RoleMenu[] {
    let goRoleMenus: GoAPI.RoleMenu[] = [];
    for (let i = 0; i < roleMenus.length; i++) {
        goRoleMenus.push(ConvertRoleMenuJS2Go(roleMenus[i]));
    }
    return goRoleMenus;
}

export function ConvertRoleMenuJS2Go(roleMenu: API.RoleMenu): GoAPI.RoleMenu {
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

export function ConvertRoleJS2Go(role: API.Role): GoAPI.Role {
    let goRole: GoAPI.Role = {}
    Object.assign(goRole, role);
    if (role.id) {
        goRole.id = parseInt(role.id);
    }
    if (role.menus) {
        goRole.menus = ConvertRoleMenusJS2Go(role.menus)
    }
    return goRole;
}