import {parseInt} from "lodash";
import {convertRoleMenusGoResp2JS, convertRoleMenusJSReq2Go} from "@/services/system/convert/convertRoleMenu";

export function convertRoleJSRequest2Go(role: API.Role): GoAPI.Role {
    let goRole: GoAPI.Role = {}
    Object.assign(goRole, role);
    if (role.id) {
        goRole.id = parseInt(role.id);
    }
    if (role.menus) {
        goRole.menus = convertRoleMenusJSReq2Go(role.menus)
    }
    return goRole;
}

export function convertRoleGoResponse2JS(item: any): any {
    if (Array.isArray(item)) {
        return convertRolesGoResp2JS(item);
    } else {
        return convertRoleGoResp2JS(item);
    }
}

export function convertRolesGoResp2JS(roles: GoAPI.Role[]): API.Role[] {
    let jsRoles: API.Role[] = [];
    for (let i = 0; i < roles.length; i++) {
        jsRoles.push(convertRoleGoResp2JS(roles[i]));
    }
    return jsRoles;
}

export function convertRoleGoResp2JS(role: GoAPI.Role): API.Role {
    let jsRole: API.Role = {}
    Object.assign(jsRole, role);
    if (role.id) {
        jsRole.id = `${role.id}`;
    }
    if (role.menus) {
        jsRole.menus = convertRoleMenusGoResp2JS(role.menus);
    }
    return jsRole;
}