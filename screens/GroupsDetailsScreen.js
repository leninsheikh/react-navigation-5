import React from 'react';
import { View, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Container, Grid, Col, Content, Card, CardItem, Body, Text } from 'native-base';


const GroupsDetailsScreen = ({ navigation }) => {
    // useFocusEffect(
    //     React.useCallback(() => {
    //       StatusBar.setBarStyle('dark-content');
    //       Platform.OS === 'android' && StatusBar.setBackgroundColor('red');
    //     }, [])
    //   );

    return (
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                            //Your text here
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
    );
}


export default GroupsDetailsScreen;