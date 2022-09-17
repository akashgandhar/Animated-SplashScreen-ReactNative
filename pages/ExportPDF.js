import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';


export default function Home({ navigation, route }) {

    const [org, setOrg] = useState('');
    const [name, setName] = useState('');
    const [event, setEvent] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setOrg(user.Org);
                        setName(user.Name);
                        setEvent(user.Event)
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    // const updateData = async () => {
    //     if (name.length == 0) {
    //         Alert.alert('Warning!', 'Please write your data.')
    //     } else {
    //         try {
    //             var user = {
    //                 Name: name
    //             }
    //             await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
    //             Alert.alert('Success!', 'Your data has been updated.');
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }

    // const removeData = async () => {
    //     try {
    //         await AsyncStorage.clear();
    //         navigation.navigate('Login');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const html = `
  <html>
    <head>
        <style type='text/css'>
            body, html {
                margin: 0;
                padding: 0;
            }
            body {
                color: black;
                display: table;
                font-family: Georgia, serif;
                font-size: 24px;
                text-align: center;
            }
            .container {
                border: 20px solid tan;
                width: 750px;
                height: 563px;
                display: table-cell;
                vertical-align: middle;
            }
            .logo {
                color: tan;
            }
  
            .marquee {
                color: tan;
                font-size: 48px;
                margin: 20px;
            }
            .assignment {
                margin: 20px;
            }
            .person {
                border-bottom: 2px solid black;
                font-size: 32px;
                font-style: italic;
                margin: 20px auto;
                width: 400px;
            }
            .reason {
                margin: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo">
                ${org}  
            </div>
  
            <div class="marquee">
                Certificate of Completion
            </div>
  
            <div class="assignment">
                This certificate is presented to
            </div>
  
            <div class="person">
                ${name}
            </div>
  
            <div class="reason">
                For ${event}
            </div>
        </div>
    </body>
  </html>
  `;

  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    await Print.printAsync({
      html: html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({
      html
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

    return (
        // 
        
        <View style={styles.MainContainer}>
          <TouchableOpacity onPress={print}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={styles.ImageStyle}
            />
            <Text style={styles.text}>Create PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={printToFile}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={styles.ImageStyle}
            />
            <Text style={styles.text}>download PDF</Text>
          </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    resizeMode: 'center',
  },
});