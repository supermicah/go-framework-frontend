// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {ConvertJS} from "@/services/system/convert2js";
import {convertTypeMenu} from '@/services/system/convert';
import {ConvertGo} from "@/services/system/convert2go";

/** Query menu list GET /api/v1/menus */
export async function fetchMenu(params: API.PaginationParam, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Menu[]>>('/api/v1/menus', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
    return ConvertJS(convertTypeMenu, response)
}

/** Create menu record POST /api/v1/menus */
export async function addMenu(body: API.Menu, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Menu>>('/api/v1/menus', {
        method: 'POST',
        data: ConvertGo(convertTypeMenu, body),
        ...(options || {}),
    });
    return ConvertJS(convertTypeMenu, response)
}

/** Get menu record by ID GET /api/v1/menus/${id} */
export async function getMenu(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.Menu>>(`/api/v1/menus/${id}`, {
        method: 'GET',
        ...(options || {}),
    });
    return ConvertJS(convertTypeMenu, response)
}

/** Update menu record by ID PUT /api/v1/menus/${id} */
export async function updateMenu(id: string, body: API.Menu, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/menus/${id}`, {
        method: 'PUT',
        data: ConvertGo(convertTypeMenu, body),
        ...(options || {}),
    });
    return ConvertJS(convertTypeMenu, response)
}

/** Delete menu record by ID DELETE /api/v1/menus/${id} */
export async function delMenu(id: string, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<any>>(`/api/v1/menus/${id}`, {
        method: 'DELETE',
        ...(options || {}),
    });
    return ConvertJS(convertTypeMenu, response)
}
