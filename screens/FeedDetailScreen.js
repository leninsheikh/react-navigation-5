import React, { useEffect } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const FeedDetailScreen = ({ navigation, route }) => {
  const name = route.params?.name;

  const Header = () => (
    <View style={{ flexDirection: "row", alignItems: 'center' }}>
      <Ionicons name="ios-warning" size={24} color={Platform.OS === "android" ? 'white' : 'red'} />
      <Text style={{ marginLeft: 5, color: Platform.OS === "android" ? 'white' : 'red' }}>Empty</Text>
    </View>
  );

  useEffect(() => {
    if (!name) {
      navigation.setOptions({
        // title: 'Feeds Details: Empty', -> for text only
        headerTitle: props => <Header {...props} />,
        headerStyle: { backgroundColor: Platform.OS === "android" ? 'red' : '' },
        headerTintColor: Platform.OS === "android" ? 'white' : 'red',
      });
    }
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feeds Details Screen</Text>
      {name ? <Text>{name}</Text> : null}
      <Button title='Go Back' onPress={() => navigation.goBack()} />
      {
        name
          ? <Button
            title='Change Title'
            onPress={() => navigation.setOptions({ title: 'Updated!' })}
          />
          : null
      }
    </View>
  );
}


export default FeedDetailScreen;