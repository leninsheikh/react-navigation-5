import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, View } from 'native-base';
import { Platform } from 'react-native';


export default props => {
   const backButton = props.previous
      ? <Button transparent onPress={() => props.goBack()}>
         <Icon name='arrow-back' />
      </Button>
      : <Button transparent onPress={() => { }}>
         <Icon name='ios-menu' />
      </Button>

   const fixIosHeaderStyle = Platform.OS === "android"
      ? { backgroundColor: 'green' }
      : { marginTop: -15, paddingBottom: 10 }

   const AppBar = <Header
      searchBar
      rounded
      noLeft={!backButton}
      style={{ ...fixIosHeaderStyle }}
   >
      <Left style={{flex: null}}>{backButton}</Left>
      <Item style={{paddingVertical: 20}}>
         <Icon name="ios-search" />
         <Input placeholder="Search" />
         <Icon name="ios-people" />
      </Item>

   </Header>

   return Platform.OS === "android"
      ? AppBar
      : <Container style={{ height: 90 }}>{AppBar}</Container>
}
