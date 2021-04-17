import React from 'react';
import {
    createStackNavigator,
} from 'react-navigation-stack';

import {
    createAppContainer,
} from 'react-navigation';


import Cate from './cate'
import XF_iat from './XFiat'
import Conversion from '../../components/conversion';
import Randomize from "../../components/randomize"
const AppNavigator = createStackNavigator({
    //这里注册了每个独立的页面。
    //分类
    '\u5206\u7c7b': {screen: Cate},
    //实时语音识别
    "\u5b9e\u65f6\u8bed\u97f3\u8bc6\u522b": {screen: XF_iat},
    //进制转换
    "\u8fdb\u5236\u8f6c\u6362":{screen:Conversion},
    //随机生成
    "\u968f\u673a\u751f\u6210\u000d\u000a":{screen:Randomize}
}, {
    //默认页面
    initialRouteName: "\u5206\u7c7b",
});

export default createAppContainer(AppNavigator);
