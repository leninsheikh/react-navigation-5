import React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';



const FeedsScreen = ({ navigation }) => {
    const name = "Vas"

    useFocusEffect(
        React.useCallback(() => {
          StatusBar.setBarStyle('dark-content');
          Platform.OS === 'android' && StatusBar.setBackgroundColor('green');
        }, [])
      );


    return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Feeds Screen</Text>
                <Button title='Feeds Details: Vas' onPress={() => navigation.navigate('FeedDetails', {
                    'name': name
                })} />
                <Button
                    title='Feeds Details'
                    onPress={() => navigation.navigate('FeedDetails')}
                />
            </SafeAreaView>

    );
}


export default FeedsScreen;