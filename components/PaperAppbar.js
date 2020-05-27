import * as React from 'react';
import { Appbar, Provider } from 'react-native-paper';
import { Platform, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const PaperAppbar = props => {
   return (
      <Appbar.Header statusBarHeight={25} style={{  backgroundColor: 'red' }} dark={true}>
      {/* <Appbar.BackAction onPress={() => { }} /> */}
      <Appbar.Content title={props.title} subtitle={''} />
      <Appbar.Action icon="magnify" onPress={() => { }} />
      <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
   </Appbar.Header>
   )
};

export default PaperAppbar;