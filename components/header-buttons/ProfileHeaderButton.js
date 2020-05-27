import React from 'react';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import CustomHeaderButtons from './HeaderButton';


export default () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
            title='optional profile title'
            iconName='ios-contact'
            onPress={() => console.log("Profile")}
        />
    </HeaderButtons>
)