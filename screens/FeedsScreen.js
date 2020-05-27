import React from 'react';
import { View, Text, Button } from 'react-native';


const FeedsScreen = ({ navigation }) => {
    const name = "Vas"

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Feeds Screen</Text>
            <Button title='Feeds Details: Vas' onPress={() => navigation.navigate('FeedDetails', {
                'name': name
            })} />
            <Button
                title='Feeds Details'
                onPress={() => navigation.navigate('FeedDetails')}
            />
        </View>
    );
}


export default FeedsScreen;