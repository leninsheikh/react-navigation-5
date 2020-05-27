import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import StackNavigator, { NotificationStackNavigator } from './StackNavigator';
import GroupsScreen from '../screens/GroupsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import IconWithBadge from '../components/IconWithBadge';




const Tab = createBottomTabNavigator();

const tabBarOptions = {
    // tabStyle: { alignItems: 'center', justifyContent: 'center' },
    labelStyle: { fontSize: 12 },
    // activeTintColor: Platform.OS === 'android' ? 'white' : 'green',
    // activeBackgroundColor: Platform.OS === 'android' ? 'green' : '',
    activeTintColor: 'green',

};

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'NotificationsStack') {
            return (
                <NotificationIconWithBadge
                    name={
                        focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                    }
                    size={size}
                    color={color}
                />
            );
        }
    }
})

export default function App() {
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <Tab.Screen name="Feeds" component={StackNavigator} options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='ios-home' size={size} color={color} />
            }} />
            <Tab.Screen name="Groups" component={GroupsScreen} options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='ios-contacts' size={size} color={color} />
            }} />
            <Tab.Screen
                name='NotificationsStack'
                component={NotificationStackNavigator}
                options={{ title: 'Notifications' }}
            />
        </Tab.Navigator>
    );
}


function NotificationIconWithBadge(props) {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={31} />;
}