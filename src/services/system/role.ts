// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {responseConvert} from "@/services/response-convert";
import {convertRoleJSRequest2Go, convertRoleGoResponse2JS} from "@/services/system/convert/convertRole";

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
    return responseConvert(response, convertRoleGoResponse2JS);
}

/** Create role record POST /api/v1/roles */
export async function addRole(body: API.Role, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Role>>('/api/v1/roles', {
        method: 'POST',
        data: convertRoleJSRequest2Go(body),
        ...(options || {}),
    });
    return responseConvert(response, convertRoleGoResponse2JS);
}

/** Get role record by ID GET /api/v1/roles/${id} */
export async function getRole(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Role>>(`/api/v1/roles/${id}`, {
        method: 'GET',
        ...(options || {}),
    });
    return responseConvert(response, convertRoleGoResponse2JS);
}

/** Update role record by ID PUT /api/v1/roles/${id} */
export async function updateRole(id: string, body: API.Role, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/roles/${id}`, {
        method: 'PUT',
        data: convertRoleJSRequest2Go(body),
        ...(options || {}),
    });
    return responseConvert(response, convertRoleGoResponse2JS);
}

/** Delete role record by ID DELETE /api/v1/roles/${id} */
export async function delRole(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/roles/${id}`, {
        method: 'DELETE',
        ...(options || {}),
    });
    return responseConvert(response, convertRoleGoResponse2JS);
}
