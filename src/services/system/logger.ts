// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {responseConvert} from "@/services/response-convert";
import {convertLoggerGoResponse2JS} from "@/services/system/convert/convertLogger";

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
    return responseConvert(response, convertLoggerGoResponse2JS);
}
