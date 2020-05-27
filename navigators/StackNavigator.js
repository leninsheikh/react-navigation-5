import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedsScreen from '../screens/FeedsScreen';
import FeedDetailScreen from '../screens/FeedDetailScreen';
import { Platform } from 'react-native';
import ProfileHeaderButton from '../components/header-buttons/ProfileHeaderButton';
import NotificationsScreen from '../screens/NotificationsScreen';


const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? 'green' : '',
  },
  headerTintColor: Platform.OS === "android" ? '#fff' : 'green',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ProfileHeaderButton />
};

function StackNavigator() {
  return (
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
  );
}

const NotificationStack = createStackNavigator();

export const NotificationStackNavigator = () => (
  <NotificationStack.Navigator  screenOptions={screenOptions}>
    <NotificationStack.Screen  name="Notifications" component={NotificationsScreen} options={{
        title: 'Notifications'
      }}>
    </NotificationStack.Screen>
  </NotificationStack.Navigator>
)

export default StackNavigator;
