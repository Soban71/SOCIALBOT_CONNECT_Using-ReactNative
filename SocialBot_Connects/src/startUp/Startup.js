
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const Navigation = useNavigation();
    const MainScreen = () => {
        Navigation.navigate('Home');
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                source={require('../../assets/BotWallpaper2.jpg')}
                style={styles.HomeBackground}
            >
                {/* Black overlay */}
                <View style={styles.overlay} />

                <View style={styles.details}>
                <Text style={styles.textStyling}>Welcome to SOCIALBOT</Text>
<Text style={styles.textStyling}>Your Ultimate Social Companion</Text>

                    <Text style={styles.quotes}>
                    Ask me anything about your favorite social platforms, and I'll provide you with the latest insights and trends.

                    </Text>

                    <TouchableOpacity activeOpacity={0} onPress={MainScreen} >
                        <View style={styles.btn}>
                            <Text style={{ fontWeight: 'bold' }} >Get Started</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject, // Cover the entire container
        backgroundColor: 'rgba(0,0,0,0.7)', // Semi-transparent black color
    },
    details: {
        height: '38%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    },
    textStyling: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:10,
        opacity: 0.8,
        letterSpacing:1,
        
    },
    quotes: {
        color: 'white',
        lineHeight: 25,
        marginTop: 15,
        opacity: 0.7,
        letterSpacing:1
    },
    btn: {
        height: 50,
        width: 120,
        backgroundColor: 'white',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.7,
        elevation:60,
        borderWidth:1
    },
    HomeBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
    }
});

export default HomeScreen;