import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const FeedDetailScreen = ({ navigation, route }) => {
  const name = route.params?.name;

  const Header = () => (
    <View style={{flexDirection: "row", alignItems: 'center'}}>
      <Ionicons name="ios-warning" size={24} color="black" />
      <Text style={{marginLeft: 5}}>Empty</Text>
    </View>
  );

  useEffect(() => {
    if (!name) {
      navigation.setOptions({
        // title: 'Feeds Details: Empty', -> for text only
        headerTitle: props => <Header {...props} />,
        headerStyle: { backgroundColor: 'red' }
      });
    }
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feeds Details Screen</Text>
      {name ? <Text>{name}</Text> : null}
      <Button title='Go Back' onPress={() => navigation.goBack()} />
      <Button title='Change Title' onPress={() => navigation.setOptions({ title: 'Updated!' })} />
    </View>
  );
}


export default FeedDetailScreen;