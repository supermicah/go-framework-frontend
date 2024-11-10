// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {ConvertJS} from "@/services/system/convert2js";
import {convertTypeRole} from '@/services/system/convert';
import {ConvertGo} from "@/services/system/convert2go";

/** Query role list GET /api/v1/roles */
export async function fetchRole(params: API.PaginationParam, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Role[]>>('/api/v1/roles', {
        method: 'GET',
        params: {
            current: '1',
            pageSize: '10',
            ...params,
        },
        ...(options || {}),
    });
    return ConvertJS(convertTypeRole, response);
}

/** Create role record POST /api/v1/roles */
export async function addRole(body: API.Role, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Role>>('/api/v1/roles', {
        method: 'POST',
        data: ConvertGo(convertTypeRole, body),
        ...(options || {}),
    });
    return ConvertJS(convertTypeRole, response);
}

/** Get role record by ID GET /api/v1/roles/${id} */
export async function getRole(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Role>>(`/api/v1/roles/${id}`, {
        method: 'GET',
        ...(options || {}),
    });
    return ConvertJS(convertTypeRole, response);
}

/** Update role record by ID PUT /api/v1/roles/${id} */
export async function updateRole(id: string, body: API.Role, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/roles/${id}`, {
        method: 'PUT',
        data: ConvertGo(convertTypeRole, body),
        ...(options || {}),
    });
    return ConvertJS(convertTypeRole, response);
}

/** Delete role record by ID DELETE /api/v1/roles/${id} */
export async function delRole(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/roles/${id}`, {
        method: 'DELETE',
        ...(options || {}),
    });
    return ConvertJS(convertTypeRole, response);
}
