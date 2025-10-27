import 'react-native-gesture-handler';
import 'react-native-reanimated';
import "react-native-get-random-values";
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import ContactScreen from './screens/ContactScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "undefined"}
              style={{ flex:1 }}
            >
              <Stack.Navigator>
                <Stack.Screen
                  name="SplashScreen"
                  component={SplashScreen}
                  options={{headerShown: false,}}
                />
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{headerShown: false,}}
                />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{headerShown: false,}}
                />
                <Stack.Screen
                  name="ContactScreen"
                  component={ContactScreen}
                  options={{headerShown: false,}}
                />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}