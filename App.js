import React from 'react';
import Navigator from './navigators/NavigatorContainer';
import { Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  return <Provider><Navigator /></Provider> ;
}
