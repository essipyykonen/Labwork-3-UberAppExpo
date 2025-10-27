import React, { useEffect, useRef } from 'react';
import tw from 'twrnc';
import { View, Animated, Easing } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Image
        source={{ uri: 'https://links.papareact.com/gzs' }}
        style={{ width: 100, height: 100 }}
        contentFit="contain"
        transition={1000}
      />
    </View>
  );
};

export default SplashScreen;