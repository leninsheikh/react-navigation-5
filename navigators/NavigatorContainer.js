import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

export default () =>  {
  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  );
}