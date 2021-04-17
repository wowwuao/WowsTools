import React  from 'react';
import {WebView} from 'react-native-webview';
import {PermissionsAndroid,Alert} from 'react-native';

const requestRecordAudioPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: "权限请求",
                message:
                    "实时语音需要获取麦克风权限",
                buttonNeutral: "稍后询问",
                buttonNegative: "取消",
                buttonPositive: "同意"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        } else {
            Alert.alert("权限获取失败");
        }
    } catch (err) {
        console.warn(err);
    }
};


class XFiat extends React.Component {
    checkNet=()=>{
        alert("网络连接失败，请检查网络")
    }
    render() {
        return (
                <WebView
                    source={{uri: 'https://ssl.weixin.upcwuao.top/view/'}}
                    style={{marginTop: 20}}
                    allowUniversalAccessFromFileURLs={true}
                    allowFileAccess={true}
                    onError={this.checkNet}
                    startInLoadingState={true}
                    onLoadStart={requestRecordAudioPermission}
                />
        );
    }
}

export default XFiat;
