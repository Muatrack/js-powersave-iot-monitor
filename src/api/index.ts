import request from '../utils/request';

export const fetchData = ( url:string ) => {
    return request({
        url,
        method: 'get'
    });
};


/** 提交新建子设备信息到服务 */
export function pushData( url:string, data:Object={} )  {
    return request({
        url,
        method: 'post',
        data: data,
    });
}

/** 提交新建子设备信息到服务 */
export function pushOta( url:string, data:Object, timeout_ms:number=5000, uploadProgress:(evt:any)=>void )  {
    return request(
        {
            url,
            method: 'post',
            data: data,
            timeout:timeout_ms,
            onUploadProgress: uploadProgress
        }
    );
}
