import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedsScreen from '../screens/FeedsScreen';
import FeedDetailScreen from '../screens/FeedDetailScreen';
import { Platform } from 'react-native';
import ProfileHeaderButton from '../components/header-buttons/ProfileHeaderButton';
import NotificationsScreen from '../screens/NotificationsScreen';
import GroupsScreen from '../screens/GroupsScreen';
import PaperAppbar from '../components/PaperAppbar';

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


/**
 * Home Navigator
 */
export default () => {
  return (
    <Stack.Navigator  initialRouteName='Feeds' screenOptions={screenOptions}>
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

/**
 * Notifications Navigator
 */
const NotificationStack = createStackNavigator();

export const NotificationStackNavigator = () => (
  <NotificationStack.Navigator screenOptions={screenOptions}>
    <NotificationStack.Screen name="Notifications" component={NotificationsScreen} options={{
      title: 'Notifications'
    }}>
    </NotificationStack.Screen>
  </NotificationStack.Navigator>
)

/**
 * Groups Navigator
 */
const GroupStack = createStackNavigator();

export const GroupStackNavigator = () => (
  <NotificationStack.Navigator screenOptions={screenOptions}>
    <NotificationStack.Screen name="Groups" component={GroupsScreen} options={{
      title: 'Groups',
      headerStyle: {height: 95},
      headerMode: 'screen',
      header: customAppBar
    }}>
    </NotificationStack.Screen>
  </NotificationStack.Navigator>
)

const customAppBar = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
        ? options.title
        : scene.route.name;

        console.log(options)
  return (
    <PaperAppbar
      title={title}
      leftButton={
        previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
      }
      style={options.headerStyle}
    />
  );
};