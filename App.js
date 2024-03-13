import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen'
import AnnouncementScreen from './AnnouncementScreen'
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component ={HomeScreen} />
        <Stack.Screen name="Calendar" component ={CalendarScreen} />
        <Stack.Screen name="Announcements" component ={AnnouncementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

