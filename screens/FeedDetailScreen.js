import React from 'react';
import { View, Text, Button } from 'react-native';


const FeedDetailScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feeds Details Screen</Text>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
    </View>
  );
}


export default FeedDetailScreen;