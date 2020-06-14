import React from 'react';
import { StyleSheet, Image } from 'react-native'
import {
    View,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Button,
    Right,
    Icon
} from 'native-base';

export default props => {
    return (
        <View style={styles.cardArea}>
            <Card  cardBorderRadius={20}>
                {/* <CardItem>
                <Left>
                    <Thumbnail source={{ uri: 'https://groundviews.org/wp-content/uploads/2015/11/3CjBFlN.jpg' }} />
                    <Body>
                        <Text>NativeBase</Text>
                        <Text note>GeekyAnts</Text>
                    </Body>
                </Left>
            </CardItem> */}
                <CardItem cardBody>
                    <Image source={{ uri: 'https://scipy-lectures.org/_images/face.png' }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardArea: {
        borderRadius: 20,
        overflow: "hidden"
    }
})
