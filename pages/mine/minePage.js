import React from 'react';
import {StyleSheet, View, Text, Image, Alert, Linking} from 'react-native';

class MinePage extends React.Component {
    handleClick = () => {
        Alert.alert('', '这个没做超链接...');
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewUser}>
                    <View style={styles.viewUserTop}>
                        <Image style={styles.imgUserTitle} source={require('./wowlogo.jpg')}/>
                    </View>
                    <Text style={styles.txtName}>
                        日光倾城。幻念
                    </Text>
                </View>

                <View style={[styles.viewLove, {height: 130}]}>
                    <View style={styles.viewLoveTop}>
                        <Text style={styles.txtCommon}>个人介绍</Text>
                    </View>

                    <View style={styles.viewContent}>
                        <Text>&emsp;&emsp;欢迎使用我的App！</Text>
                        <Text>&emsp;&emsp;本人来自中国石油大学（华东）计算机科学与技术专业1902班。 一个非著名苦逼大学生，目前的梦想就是毕业前学分绩能上到80...
                            <Text style={{color: '#f2eada'}}
                                  onPress={() => Alert.alert('', '多少给点分吧~')}
                                  onLongPress={() => Alert.alert('', '给您拜年了！')}>
                                （暗示给分）
                            </Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.viewLove}>
                    <View style={styles.viewLoveTop}>
                        <Text style={styles.txtCommon}>
                            联系方式
                        </Text>
                    </View>

                    <View style={styles.viewContent}>
                        <Text>&emsp;&emsp;&emsp;&emsp;ＱＱ:
                            <Text onPress={this.handleClick}
                                  style={styles.connectMe}>
                                &emsp;1622073760
                            </Text>
                        </Text>

                        <Text>&emsp;&emsp;个人主页:
                            <Text onPress={() => Linking.openURL('http://47.100.94.10')}
                                  style={styles.connectMe}>
                                &emsp;http://47.100.94.10
                            </Text>
                        </Text>

                        <Text>&emsp;&emsp;&emsp;Github:
                            <Text onPress={() => Linking.openURL('https://github.com/wowwuao')}
                                  style={styles.connectMe}>
                                &emsp;https://github.com/wowwuao
                            </Text>
                        </Text>

                        <Text>&emsp;&emsp;欢迎大家来联系我，虽然我不一定会看，</Text>
                        <Text>&emsp;&emsp;看了也不一定会回....</Text>
                    </View>
                </View>
                <View style={styles.viewLove}>
                    <View style={styles.viewLoveTop}>
                        <Text style={styles.txtCommon}>开发感想</Text>
                    </View>
                    <View style={[styles.viewContent, {flexDirection: 'row', height: 200}]}>
                        <View style={{flex: 0.25}}>
                            <Image style={styles.imgLove}
                                   source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>

                        <View style={{flex: 0.7, marginTop: -20}}>
                            <Text>&emsp;&emsp;
                                <Text style={{color: '#009ad6'}}>React Native </Text>
                                永远滴神！自从用它开发app之后，我配置环境的能力直线上升，各种坑也都体验过了一遍，好多东西都是直接看的英文文档，还扩充了词汇量，能力得到了极大的提高，连头上都开始感觉变得凉飕飕了呢~
                            </Text>
                        </View>
                    </View>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewUser: {
        minHeight: 150,
        backgroundColor: '#dbf7fd',
        paddingTop: 20,
    },
    viewUserTop: {
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgUserTitle: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    txtName: {
        alignSelf: 'center',
    },
    viewLove: {
        minHeight: 150,
        borderBottomWidth: 10,
        borderBottomColor: '#ffffff',
        backgroundColor: '#ffffff',
    },
    viewLoveTop: {
        minHeight: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtCommon: {
        marginLeft: 15,
        flex: 1,
    },
    imgLove: {
        minHeight: 50,
        width: 50,
        margin: 10,
        marginTop: 0,
    },
    viewContent: {
        marginLeft: 10,
        marginRight: 10,
    },
    connectMe: {
        color: '#009ad6',
    },
});

export default MinePage;
