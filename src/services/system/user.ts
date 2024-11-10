// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {ConvertJS} from "@/services/system/convert2js";
import {convertTypeUser} from '@/services/system/convert';
import {ConvertGo} from "@/services/system/convert2go";

/** Query user list GET /api/v1/users */
export async function fetchUser(params: API.PaginationParam, options?: { [key: string]: any }) {
    let response: Promise<API.ResponseResult<GoAPI.User[]>> = request<API.ResponseResult<GoAPI.User[]>>('/api/v1/users', {
        method: 'GET',
        params: {
            current: '1',
            pageSize: '10',
            ...params,
        },
        ...(options || {}),
    })
    return ConvertJS(convertTypeUser, response);
}

/** Create user record POST /api/v1/users */
export async function addUser(body: API.User, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.User>>('/api/v1/users', {
        method: 'POST',
        data: ConvertGo(convertTypeUser, body),
        ...(options || {}),
    });
    return ConvertJS(convertTypeUser, response);
}

/** Get user record by ID GET /api/v1/users/${id} */
export async function getUser(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.User>>(`/api/v1/users/${id}`, {
        method: 'GET',
        ...(options || {}),
    });
    return ConvertJS(convertTypeUser, response);
}

/** Update user record by ID PUT /api/v1/users/${id} */
export async function updateUser(id: string, body: API.User, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/users/${id}`, {
        method: 'PUT',
        data: ConvertGo(convertTypeUser, body),
        ...(options || {}),
    });
    return ConvertJS(convertTypeUser, response);
}

/** Delete user record by ID DELETE /api/v1/users/${id} */
export async function delUser(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/users/${id}`, {
        method: 'DELETE',
        ...(options || {}),
    });
    return ConvertJS(convertTypeUser, response);
}

/** Reset user password by ID PATCH /api/v1/users/${id}/reset-pwd */
export async function resetUserPassword(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/users/${id}/reset-pwd`, {
        method: 'PATCH',
        ...(options || {}),
    });
    return ConvertJS(convertTypeUser, response);
}
