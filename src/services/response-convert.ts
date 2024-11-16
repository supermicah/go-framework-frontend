export async function responseConvert(promise: Promise<API.ResponseResult<any>>, customConvertFunc: (c: any) => any): Promise<API.ResponseResult<any>> {
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
        response.data = customConvertFunc(result.data);
    }
    return response
}