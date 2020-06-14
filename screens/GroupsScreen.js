import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {
    Container,
    Header,
    Left,
    Content,
    Button,
    Icon,
    Title,
    Text,
    Item,
    Input,
    Right,
    H3
} from 'native-base';
import Colors from '../data/constants/Colors';
import TripCard from '../components/TripCard';




const GroupsScreen = props => {
    const { navigation } = props;

    const MenuButton = (
        <Button transparent onPress={() => { }}>
            <Icon style={{ color: Colors.primary }} name='menu' />
        </Button>
    )

    const fixIosHeaderStyle = Platform.OS === "android"
        ? { backgroundColor: 'white' }
        : { marginTop: 0, paddingBottom: 10, backgroundColor: 'white', borderBottomWidth: 0 }

    return (
        <Container style={{ height: 140 }} style={{ backgroundColor: Colors.darkWhite }}>
            <Header
                searchBar
                rounded
                style={{ ...fixIosHeaderStyle, ...{} }}
            >
                <Left style={{ flex: null }}>{MenuButton}</Left>
                <Item style={styles.searchBar}>
                    <Icon style={{ color: Colors.primary }} name="ios-search" />
                    <Input placeholder="Search" />
                </Item>
                <Right style={{ flex: null }}>
                    <Button transparent onPress={() => { }}>
                        <Icon style={{ color: Colors.gray }} name='settings' />
                    </Button>
                </Right>
            </Header>
            <Content>
                <View style={styles.headerBottomArea}>
                    <Button
                        rounded
                        style={styles.button}
                        small
                        iconLeft
                        onPress={() => navigation.navigate('GroupDetails')}
                    >
                        <Icon name='car' style={{ color: Colors.primary }} active></Icon>
                        <Text>Tips</Text>
                    </Button>
                    <Button
                        rounded
                        iconLeft
                        style={styles.button}
                        small
                        onPress={() => navigation.navigate('GroupDetails')}
                    >
                        <Icon name='ios-navigate' style={{ color: Colors.primary }} active></Icon>
                        <Text>Locals</Text>
                    </Button>
                    <Button
                        iconLeft
                        rounded
                        style={styles.button}
                        small
                        onPress={() => navigation.navigate('GroupDetails')}
                    >
                        <Icon name='ios-funnel' style={{ color: Colors.primary }} active></Icon>
                        <Text>Filter</Text>
                    </Button>
                </View>
                <View style={styles.contentArea}>
                    <H3>Trips to Bangladesh</H3>
                    <TripCard></TripCard>
                </View>
            </Content>
        </Container>

    );
}

const styles = StyleSheet.create({
    headerBottomArea: {
        paddingTop: 6,
        paddingHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 43,
        justifyContent: "flex-start",
        alignItems: 'flex-start'
    },
    searchBar: {
        paddingVertical: 20,
        backgroundColor: Colors.lightGray
    },
    button: {
        maxWidth: 110,
        backgroundColor: Colors.lightGray,
        marginHorizontal: 5,
        padding: 10
    },
    contentArea: {
        margin: 12
    }
})

export default GroupsScreen;