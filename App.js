/* eslint-disable */
import React from 'react';
import {createAppContainer} from "react-navigation";

import {createStackNavigator} from "react-navigation-stack";
import BottomNavigator from './pages/root/RootPage'
const AppStack = createStackNavigator({
      BottomNavigator:{
        screen:BottomNavigator,
        navigationOptions:{
          headerShown:false
        }
      }},
    {
      mode: 'modal',
      headerMode: 'none',
    })



export default createAppContainer(AppStack);
