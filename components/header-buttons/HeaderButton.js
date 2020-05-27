import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'

const CustomHeaderButtons = props => (
    <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={30}
        color={Platform.OS === "android" ? 'white' : 'green'}
        // color='green'
    />
)

export default CustomHeaderButtons;