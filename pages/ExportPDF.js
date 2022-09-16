import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text, TouchableOpacity, Image } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const createHtml = () => {

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
                An Organization  
            </div>
  
            <div class="marquee">
                Certificate of Completion
            </div>
  
            <div class="assignment">
                This certificate is presented to
            </div>
  
            <div class="person">
                Joe Nathan
            </div>
  
            <div class="reason">
                For deftly defying the laws of gravity<br/>
                and flying high
            </div>
        </div>
    </body>
  </html>
  `;
  return html;
   }


export default function PrintPdf({navigation}) {
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: createHtml(),
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }

  

  return (
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
      
    
    // <View style={{flex:1,alignContent:'center'}}>
      
    //   <View style={styles.spacer} />
    //   <Button title='Print' onPress={print} /><Button title='Print' onPress={print} />
    //   <Button title='Print to PDF file' onPress={printToFile} />
    //   <Button title='Print' onPress={print} />
    //   {/* {Platform.OS === 'android' &&
    //     <>
    //       <View style={styles.spacer} />
    //       <Button title='Select printer' onPress={selectPrinter} />
    //       <View style={styles.spacer} />
    //       {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
    //     </>
    //   } */}
    // </View>
  );
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
// const styles = StyleSheet.create({
//   spacer: {
//     margin: 5,
//   },
// })