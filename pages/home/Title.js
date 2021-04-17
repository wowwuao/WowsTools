import type {Node} from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import React from 'react';
import {HermesBadge} from 'react-native/Libraries/NewAppScreen';

const Title = (): Node => {
    return (
        <ImageBackground
            accessibilityRole="image"
            source={require('./bg.jpg')}
            style={[styles.background]}
            imageStyle={styles.logo}>
            <HermesBadge/>
            <Text style={styles.text}>
                欢迎来到
                {'\n'}
                Wow's App
            </Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        paddingBottom: 40,
        paddingTop: 96,
        paddingHorizontal: 32,
    },
    logo: {
        opacity: 0.9,
        overflow: 'visible',
        resizeMode: 'cover',
        marginLeft: -128,
        marginBottom: -192,
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        color: '#b99bf8',
    },
});

export default Title;
