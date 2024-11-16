import {parseInt} from "lodash";

export function convertUserRolesJSReq2Go(userRoles: API.UserRole[]): GoAPI.UserRole[] {
    let goUserRoles: GoAPI.UserRole[] = [];
    for (let i = 0; i < userRoles.length; i++) {
        goUserRoles.push(convertUserRoleJSReq2Go(userRoles[i]));
    }
    return goUserRoles;
}

export function convertUserRoleJSReq2Go(userRole: API.UserRole): GoAPI.UserRole {
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

export function convertUserRolesGoResp2JS(userRoles: GoAPI.UserRole[]): API.UserRole[] {
    let jsUserRoles: API.UserRole[] = [];
    for (let i = 0; i < userRoles.length; i++) {
        jsUserRoles.push(convertUserRoleGoResp2JS(userRoles[i]));
    }
    return jsUserRoles;
}

export function convertUserRoleGoResp2JS(userRole: GoAPI.UserRole): API.UserRole {
    let jsUserRole: API.UserRole = {}
    Object.assign(jsUserRole, userRole);
    if (userRole.id) {
        jsUserRole.id = `${userRole.id}`;
    }
    if (userRole.role_id) {
        jsUserRole.role_id = `${userRole.role_id}`;
    }
    if (userRole.user_id) {
        jsUserRole.user_id = `${userRole.user_id}`;
    }
    return jsUserRole;
}
