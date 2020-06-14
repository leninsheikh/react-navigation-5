import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Platform } from 'react-native';


export default props => {
   const backButton = props.previous
      ? <Button transparent onPress={() => props.goBack()}>
         <Icon name='arrow-back' />
      </Button>
      : null

   const fixIosHeaderStyle = Platform.OS === "android"
      ? {}
      : { marginTop: -20 }

   return (
      <Header noLeft={!backButton} style={fixIosHeaderStyle}>
         <Left>{backButton}</Left>
         <Body>
            <Title>{props.title}</Title>
         </Body>
         <Right />
      </Header>
   );
}
