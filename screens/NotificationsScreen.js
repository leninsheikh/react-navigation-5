import React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const NotificationsScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
          StatusBar.setBarStyle('dark-content');
          Platform.OS === 'android' && StatusBar.setBackgroundColor('green');
        }, [])
      );

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notifications  Screen</Text>
        </SafeAreaView>
    );
}


export default NotificationsScreen;