import React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native';
import PaperAppbar from '../components/PaperAppbar';
import { useFocusEffect } from '@react-navigation/native';


const GroupsScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
          StatusBar.setBarStyle('dark-content');
          Platform.OS === 'android' && StatusBar.setBackgroundColor('red');
        }, [])
      );

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Groups  Screen</Text>
            <Button title='Feeds Details: Rus' onPress={() => navigation.navigate('FeedDetails', {
                    'name': 'Rus'
                })} />
                <Button
                    title='Feeds Details'
                    onPress={() => navigation.navigate('FeedDetails')}
                />
        </View>
    );
}


export default GroupsScreen;