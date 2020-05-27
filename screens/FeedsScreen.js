import React from 'react';
import { View, Text, Button } from 'react-native';


const FeedsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feeds Screen</Text>
      <Button title='Feeds' onPress={() => navigation.navigate('FeedDetails')}/>
    </View>
  );
}


export default FeedsScreen;