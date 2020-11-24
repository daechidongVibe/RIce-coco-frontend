import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as TaskManager from 'expo-task-manager';

import HomeStackScreen from './src/screens/HomeStackScreen';
import MyPageStackScreen from './src/screens/MyPageStackScreen';
import { setUserLocation } from './src/actions/index';
import store from './src/store/';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'md-home';
          } else if (route.name === 'MyPage') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ff914d',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="MyPage" component={MyPageStackScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

TaskManager.defineTask("background-location-task", ({ data, error }) => {
  if (error) {
    console.log(error);
    return;
  }

  const { latitude, longitude } = data.locations[0].coords;

  store.dispatch(setUserLocation({ latitude, longitude }));
});
