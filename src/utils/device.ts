const userAgent = window.navigator.userAgent;

/**
 * 设备类型判断
 * 使用：UA.isIOS()
 */
export const UA = {
    isIOS: function () {
        return userAgent.includes('iPhone');
    },
    isAndroid: function () {
        return userAgent.includes('Android');
    },
    isMiniProgram: function () {
        return userAgent.includes('MicroMessenger') && userAgent.includes('miniProgram');
    },
    isWechatWeb: function () {
        return userAgent.includes('MicroMessenger') && !userAgent.includes('miniProgram');
    },
    isDingTalk: function () {
        console.log(userAgent.match(/DingTalk/i) == 'dingtalk');
        return userAgent.match(/DingTalk/i) == 'dingtalk';
    },
};
