import {convertTypeLogger, convertTypeMenu, convertTypeRole, convertTypeUser} from "@/services/system/convert";

export async function ConvertJS(type: string, promise: Promise<API.ResponseResult<any>>): Promise<API.ResponseResult<any>> {
    const result = await promise;
    let response: API.ResponseResult<any> = {};
    if (result && result.total) {
        response.total = result.total;
    }
    if (result && result.error) {
        response.error = result.error;
    }
    if (result && result.success) {
        response.success = result.success;
    }
    if (result.data) {
        if (Array.isArray(result.data)) {
            switch (type) {
                case convertTypeUser:
                    if (result.data) {
                        response.data = ConvertUsersGo2JS(result.data);
                    }
                    break;
                case convertTypeMenu:
                    if (result.data) {
                        response.data = ConvertMenusGo2JS(result.data);
                    }
                    break;
                case convertTypeRole:
                    if (result.data) {
                        response.data = ConvertRolesGo2JS(result.data);
                    }
                    break;
                case convertTypeLogger:
                    if (result.data) {
                        response.data = ConvertLoggersGo2JS(result.data);
                    }
                    break;
                default:
            }
        } else {
            switch (type) {
                case convertTypeUser:
                    if (result.data) {
                        response.data = ConvertUserGo2JS(result.data);
                    }
                    break;
                case convertTypeMenu:
                    if (result.data) {
                        response.data = ConvertUserGo2JS(result.data);
                    }
                    break;
                case convertTypeRole:
                    if (result.data) {
                        response.data = ConvertRoleGo2JS(result.data);
                    }
                    break;
                case convertTypeLogger:
                    if (result.data) {
                        response.data = ConvertLoggerGo2JS(result.data);
                    }
                    break;
                default:
            }
        }
    }
    return response;
}

export function ConvertUsersGo2JS(users: GoAPI.User[]): API.User[] {
    let jsUsers: API.User[] = [];
    for (let i = 0; i < users.length; i++) {
        jsUsers.push(ConvertUserGo2JS(users[i]));
    }
    return jsUsers;
}

export function ConvertUserGo2JS(user: GoAPI.User): API.User {
    let jsUser: API.User = {}
    Object.assign(jsUser, user);
    if (user.id) {
        jsUser.id = `${user.id}`;
    }
    return jsUser;
}

export function ConvertMenusGo2JS(menus: GoAPI.Menu[]): API.Menu[] {
    let jsMenus: API.Menu[] = [];
    for (let i = 0; i < menus.length; i++) {
        jsMenus.push(ConvertMenuGo2JS(menus[i]));
    }
    return jsMenus;
}

export function ConvertMenuGo2JS(menu: GoAPI.Menu): API.Menu {
    let jsMenu: API.Menu = {}
    Object.assign(jsMenu, menu);
    if (menu.id) {
        jsMenu.id = `${menu.id}`;
    }
    if (menu.parent_id) {
        jsMenu.parent_id = `${menu.parent_id}`;
    }
    if (menu.children) {
        jsMenu.children = ConvertMenusGo2JS(menu.children);
    }
    if (menu.resources) {
        jsMenu.resources = ConvertMenuResourcesGo2JS(menu.resources)
    }
    return jsMenu;
}

export function ConvertMenuResourcesGo2JS(menuResources: GoAPI.MenuResource[]): API.MenuResource[] {
    let jsMenuResources: API.MenuResource[] = [];
    for (let i = 0; i < menuResources.length; i++) {
        jsMenuResources.push(ConvertMenuResourceGo2JS(menuResources[i]));
    }
    return jsMenuResources;
}

export function ConvertMenuResourceGo2JS(resource: GoAPI.MenuResource): API.MenuResource {
    let jsResource: API.MenuResource = {}
    Object.assign(jsResource, resource);
    if (resource.id) {
        jsResource.id = `${resource.id}`;
    }
    if (resource.menu_id) {
        jsResource.menu_id = `${resource.menu_id}`;
    }
    return jsResource;
}

export function ConvertRolesGo2JS(roles: GoAPI.Role[]): API.Role[] {
    let jsRoles: API.Role[] = [];
    for (let i = 0; i < roles.length; i++) {
        jsRoles.push(ConvertRoleGo2JS(roles[i]));
    }
    return jsRoles;
}

export function ConvertRoleGo2JS(role: GoAPI.Role): API.Role {
    let jsRole: API.Role = {}
    Object.assign(jsRole, role);
    if (role.id) {
        jsRole.id = `${role.id}`;
    }
    if (role.menus) {
        jsRole.menus = ConvertRoleMenusGo2JS(role.menus);
    }
    return jsRole;
}

export function ConvertRoleMenusGo2JS(roleMenus: GoAPI.RoleMenu[]): API.RoleMenu[] {
    let jsRoleMenus: API.RoleMenu[] = [];
    for (let i = 0; i < roleMenus.length; i++) {
        jsRoleMenus.push(ConvertRoleMenuGo2JS(roleMenus[i]));
    }
    return jsRoleMenus;
}

export function ConvertRoleMenuGo2JS(roleMenu: GoAPI.RoleMenu): API.RoleMenu {
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

export function ConvertLoggersGo2JS(loggers: GoAPI.Logger[]): API.Logger[] {
    let jsLoggers: API.Logger[] = [];
    for (let i = 0; i < loggers.length; i++) {
        jsLoggers.push(ConvertLoggerGo2JS(loggers[i]));
    }
    return jsLoggers;
}

export function ConvertLoggerGo2JS(logger: GoAPI.Logger): API.Logger {
    let jsLogger: API.Logger = {}
    Object.assign(jsLogger, logger);
    if (logger.id) {
        jsLogger.id = `${logger.id}`;
    }
    if (logger.user_id) {
        jsLogger.user_id = `${logger.user_id}`;
    }

    return jsLogger;
}