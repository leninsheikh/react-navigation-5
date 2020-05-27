import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedsScreen from '../screens/FeedsScreen';
import FeedDetailScreen from '../screens/FeedDetailScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Feeds'>
        <Stack.Screen name="FeedDetails" component={FeedDetailScreen} options={{
          title: 'Feed Details'
        }} />
        <Stack.Screen name="Feeds" component={FeedsScreen} options={{
          title: 'Home'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
