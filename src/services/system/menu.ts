// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {responseConvert} from "@/services/response-convert";
import {convertMenuGoResponse2JS, convertMenuJSRequest2Go} from "@/services/system/convert/menu";

/** Query menu list GET /api/v1/menus */
export async function fetchMenu(params: API.PaginationParam, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Menu[]>>('/api/v1/menus', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
    return responseConvert(response, convertMenuGoResponse2JS)
}

/** Create menu record POST /api/v1/menus */
export async function addMenu(body: API.Menu, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Menu>>('/api/v1/menus', {
        method: 'POST',
        data: convertMenuJSRequest2Go(body),
        ...(options || {}),
    });
    return responseConvert(response, convertMenuGoResponse2JS)
}

/** Get menu record by ID GET /api/v1/menus/${id} */
export async function getMenu(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Menu>>(`/api/v1/menus/${id}`, {
        method: 'GET',
        ...(options || {}),
    });
    return responseConvert(response, convertMenuGoResponse2JS)
}

/** Update menu record by ID PUT /api/v1/menus/${id} */
export async function updateMenu(id: string, body: API.Menu, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/menus/${id}`, {
        method: 'PUT',
        data: convertMenuJSRequest2Go(body),
        ...(options || {}),
    });
    return responseConvert(response, convertMenuGoResponse2JS)
}

/** Delete menu record by ID DELETE /api/v1/menus/${id} */
export async function delMenu(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/menus/${id}`, {
        method: 'DELETE',
        ...(options || {}),
    });
    return responseConvert(response, convertMenuGoResponse2JS)
}
