import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import firebase from 'firebase';

import MenuListScreen from './src/screens/MenuListScreen';
import MenuDetailScreen from './src/screens/MenuDetailScreen';
import MenuEditScreen from './src/screens/MenuEditScreen';
import MenuCreateScreen from './src/screens/MenuCreateScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PolicyScreen from './src/screens/PolicyScreen';
import WellcomeScreen from './src/screens/WellcomeScreen';
import AppDoorScreen from './src/screens/AppDoorScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppDoor"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F0AC19', borderBottomWidth: 3, borderBottomColor: '#C38D18', height: 70,
          },
          headerTitleStyle: {
            color: '#ffffff', fontWeight: 'bold', fontSize: 23,
          },
          headerTitle: '今日のトレメニュー',
          headerTintColor: '#ffffff',
          headerBackTitle: '戻る',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MenuList" component={MenuListScreen} />
        <Stack.Screen name="MenuDetail" component={MenuDetailScreen} />
        <Stack.Screen name="MenuEdit" component={MenuEditScreen} />
        <Stack.Screen name="MenuCreate" component={MenuCreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="Policy" component={PolicyScreen} />
        <Stack.Screen
          name="Wellcome"
          options={{
            headerShown: false,
          }}
          component={WellcomeScreen}
        />
        <Stack.Screen
          name="AppDoor"
          options={{
            headerShown: false,
          }}
          component={AppDoorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
