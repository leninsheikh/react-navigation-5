import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedsScreen from '../screens/FeedsScreen';
import FeedDetailScreen from '../screens/FeedDetailScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: 'green',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Feeds' screenOptions={screenOptions}>
        <Stack.Screen name="Feeds" component={FeedsScreen} options={{
          title: 'Feeds'
        }} />
        <Stack.Screen
          name="FeedDetails"
          component={FeedDetailScreen}
          options={({ route }) => ({
            title: route.params?.name
              ? `Feed Details: ${route.params?.name}`
              : 'Feed Details'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
