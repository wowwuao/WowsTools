import React from 'react';

//导入底部导航栏组件
import HomePage from '../home/homePage';
import MinePage from '../mine/minePage';
import CatePage from '../cate/catePage';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomNavigator = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            title: '首页',
            tabBarLabel: '首页',
            //根据是否处于获取焦点的状态显示不同的图标，以下同理
            tabBarIcon: ({tintColor, focused}) => {
                if (focused) {
                    return (<MaterialIcons name={'home'} size={26} color={tintColor}/>);
                }
                return (<MaterialIcons name={'home-filled'} size={26} color="#918597"/>);
            },
        },
    },
    Cate: {
        screen: CatePage,
        navigationOptions: {
            title: '分类',
            tabBarLabel: '分类',
            tabBarIcon: ({tintColor, focused}) => {
                if (focused) {
                    return (<MaterialIcons name={'storage'} size={26} color={tintColor}/>);
                }
                return (<MaterialIcons name={'reorder'} size={26} color="#918597"/>);
            },
        },
    },
    Me: {
        screen: MinePage,
        navigationOptions: {
            title: '开发者介绍',
            tabBarLabel: '开发者介绍',
            tabBarIcon: ({tintColor, focused}) => {
                if (focused) {
                    return (<MaterialIcons name={'sentiment-very-satisfied'} size={26} color={tintColor}/>);
                }
                return (<MaterialIcons name={'sentiment-satisfied'} size={26} color="#918597"/>);
            },
        },
    },
}, {
    tabBarOptions: {
        showIcon: true,
    },
});
export default BottomNavigator;
