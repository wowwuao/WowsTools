import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StatusBar, useColorScheme, View,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import List from './List';
import Title from './Title';
const HomePage: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Title />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <List />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomePage;
