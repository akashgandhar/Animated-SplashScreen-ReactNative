import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
} from 'react-native';
import CustomButton from './utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

    const [name, setName] = useState('');
    const [org, setOrg] = useState('');
    const [event, setEvent] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('Home');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || org.length == 0 || event.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name,
                    Org: org,
                    Event: event
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('ExportPDF');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../assets/icon.png')}
            />
            <Text style={styles.text}>
                Details
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Organisation'
                onChangeText={(value) => setOrg(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter name'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter Event'
                onChangeText={(value) => setEvent(value)}
            />
            <CustomButton
                title='Submit'
                color='#1eb900'
                onPressFunction={setData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#6ABC56',
    },
    logo: {
        width: 120,
        height: 120,
        margin: 60,
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
        marginBottom: 80,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
    }
})