import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View
                style={{
                    flex: 1,
                    backgroundColor: '#6ABC56',
                    
                }}
            >
                <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        navigation.navigate('Home');
                    }}
                />
            </View>
  );
}

export default SplashScreen;