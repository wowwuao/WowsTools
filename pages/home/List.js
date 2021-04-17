import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import React, {Fragment} from 'react';

const links = [
    {
        id: 1,
        title: '技术栈',
        description: 'React Native',
    },
    {
        id: 2,
        title: '开发难度',
        description:
            '就挺让人窒息的...\n还容易掉头发',
    },
    {
        id: 3,
        title: '开发周期',
        description: '刚好7天',
    },
    {
        id: 4,
        title: '感想',
        description: '7天时间，四天都在配环境,配环境一生之敌...',
    },
    {
        id: 5,
        title: '开发者期望',
        description:
            '您多给点分吧，俺快拿不到学位证了...',
    },
    {
        id: 6,
        title: '开发所需主要环境及第三方库',
        description: ' React 17.0.1 \n React Native 0.64.0 \n Java 1.8.0_281 \n Node 14.16.0\n Android 10 \n Android SDK 29.0.2',
    },
];

const List = (): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            {links.map(({id, title, link, description}) => (
                <Fragment key={id}>
                    <View
                        style={styles.separator}
                    />
                    <TouchableOpacity
                        accessibilityRole="button"
                        style={styles.linkContainer}>
                        <Text style={styles.link}>{title}</Text>
                        <Text
                            style={styles.description}>
                            {description}
                        </Text>
                    </TouchableOpacity>
                </Fragment>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    linkContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    link: {
        flex: 2,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.primary,
    },
    description: {
        flex: 3,
        paddingVertical: 16,
        fontWeight: '400',
        fontSize: 18,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
    },
});

export default List;
