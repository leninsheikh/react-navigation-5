import React, { useEffect } from 'react';
import { TextInput, Card, Title, Button, Text } from 'react-native-paper';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default props => {
    useEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('light-content');
        }, [])
    );
    return (
        <View style={styles.screen}>
            <View style={styles.logoArea}>
                <View style={styles.logoBorder}>
                    <Ionicons name='ios-chatbubbles' color='#3679E0' size={80} />
                </View>
            </View>
            <View style={styles.loginCardContainer}>
                <Card elevation={3} style={styles.loginCard}>
                    <View style={styles.loginCardHeader}>
                        <Title style={styles.headerText}>LOGIN</Title>
                    </View>
                    <Card.Content style={styles.loginForm}>
                        <TextInput
                            mode='flat'
                            style={styles.textInput}
                            label='Email'
                            placeholder="example@example.com"
                        />
                        <TextInput
                            secureTextEntry={true}
                            mode='flat'
                            style={styles.textInput}
                            label='Password'
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                mode="contained"
                                style={styles.loginButton}
                                onPress={() => alert('Signing in...')}
                            >
                                Login
                            </Button>
                        </View>
                    </Card.Content>
                </Card>
                <View style={styles.helpText}>
                    <Text style={{fontFamily: 'Roboto_medium'}} >FORGOT PASSWORD?</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    logoArea: {
        height: 450,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3679E0'
    },
    logoBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 130,
        backgroundColor: 'white',
        borderRadius: 65
    },
    loginCardContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: -40
    },
    loginCard: {
        width: '85%',
        borderRadius: 10,
        height: 320,
        backgroundColor: 'white'
    },
    loginCardHeader: {
        alignItems: "center",
        marginTop: 15
    },
    headerText: {
        fontSize: 25,
        color: '#464646',
        fontFamily: 'Roboto_medium',
    },
    loginForm: {
        marginTop: 20
    },
    textInput: {
        backgroundColor: 'white',
        marginBottom: 20
    },
    buttonContainer: {
        alignItems: "center"
    },
    loginButton: {
        borderRadius: 30,
        width: '90%',
        paddingVertical: 15,
        justifyContent: 'center',
        marginTop: 48,
        backgroundColor: '#3679E0'
    },
    helpText: {
        marginTop: 50,
        fontFamily: 'Roboto_medium'
    }

});