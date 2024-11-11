// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {ConvertJS} from "@/services/system/convert2js";
import {convertTypeLogger} from "@/services/system/convert";

/** Query user list GET /api/v1/loggers */
export async function fetchLogger(params: API.PaginationParam, options?: { [key: string]: any }) {
    let response = request<API.ResponseResult<API.User[]>>('/api/v1/loggers', {
        method: 'GET',
        params: {
            current: '1',
            pageSize: '10',
            ...params,
        },
        ...(options || {}),
    });
    console.log(response);
    return ConvertJS(convertTypeLogger, response);
}
