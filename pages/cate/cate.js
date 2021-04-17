import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

class Cate extends Component {

    render() {
        return (
            <View>
                <View>
                    <Button style={style.btn} title="实时语音识别" color={'#f194ff'}
                        //进行栈导航栏页面转换
                            onPress={() => this.props.navigation.navigate('\u5b9e\u65f6\u8bed\u97f3\u8bc6\u522b')}/>

                    <Button style={style.btn} title="进制转换" color={'#7dc290'}
                            onPress={() => this.props.navigation.navigate('\u8fdb\u5236\u8f6c\u6362')}/>

                    <Button style={style.btn} title="随机生成" color={'#ffb17a'}
                            onPress={() => this.props.navigation.navigate('\u968f\u673a\u751f\u6210\u000d\u000a')}/>
                </View>
                <View>
                    <Text style={{textAlign: 'center'}}>
                        后续功能敬请期待
                    </Text>
                </View>
            </View>
        );
    }
}

export default Cate;

const style = StyleSheet.create({
    btn: {
        textAlign: 'center',
    },
});
