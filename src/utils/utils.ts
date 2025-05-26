
/* 设备类型转换 num -> str */

/** 转换设备的类别为可读字串
 * @param num 输入的设备类别，数字格式
 */
function slaveClss2Str( num:number ) {
    switch( num ) {
        case 0x10: return "空调控制器2P";
        case 0x11: return "空调控制器4P";
        case 0x12: return "人体感应传感器";
        case 0x13: return "温度采集器器";
        case 0x14: return "扩展温度采集器器";
        default:    return "未知"
    }
}

/** 转换设备的型号为可读字串
 * @param num 输入的设备型号，数字格式
 */
function slaveType2Str( num:number ) {
    return "Undefined";
    // switch( num ) {
    //     case 0x0: return "";
    //     case 0x1: return "";
    //     case 0x2: return "";
    //     default:    return "未知"
    // }
}

/** 转换设备的驱动类型为可读字串
 * @param num 输入的设备型号，数字格式
 */
function slaveDriv2Str( num:number ) {
    switch( num ) {
        case 0x10: return "BLE";
        case 0x11: return "1-Wire";
        case 0x12: return "485";
        default:    return "Undefined"
    }
}

/** 解码中文B64串 */
function b64DecodeCN( b64Str:string ) {
        return decodeURIComponent(atob(b64Str).split('').map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
}

/** B64编码中文 */
function b64EncodeCN( str:string ) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode(Number('0x' + p1));
            }));
}

export {
    slaveClss2Str,
    slaveType2Str,
    slaveDriv2Str,
    b64DecodeCN,
    b64EncodeCN
}