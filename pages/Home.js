import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { Button, View, Text, TouchableOpacity,TextInput,StyleSheet,Image, PermissionsAndroid } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';
import { Alert } from 'react-native';


class Home extends React.Component {

  constructor(props){
    super()
    this.state={organisation:""}
    this.state={name:""}
    this.state={event:""}
  }

  render() {
    return (
      <>
      <View style={{
        position:'relative',
        backgroundColor:'#6ABC56',
        justifyContent: 'center',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"}}>
        <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/new-project-aa84e.appspot.com/o/icon.png?alt=media&token=d77b35fe-c813-4bd7-8c12-813d6e3ca9a3" }} 
        style={{ width: '50%', height: '70%',padding:30,position:'absolute' }} />
        
      </View>
      <View style={{backgroundColor:'#6ABC56'}}><Text style={{padding:25,textAlign:'center',fontSize:45}}>Details</Text></View>
      <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputView}
              placeholder="Organisation"
              placeholderTextColor="#003f5c"
              onChangeText={(org) => this.setState({ organisation: org })} />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputView}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={(name) => this.setState({ name: name })} />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputView}
              placeholder="Event Name"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(event) => this.setState({ event: event })} />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.props.navigation.replace('ExportPDF');}}>
            <Text style={styles.loginText}>SUBMIT</Text>
          </TouchableOpacity>
        </View></>
  );
}
}




// const askPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       {
//         title: "Certify Allow Storage Access",
//         message:
//           "Certify Needs Storage Permmision " +
//           "so you can save Generated PDF.",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK"
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can use the camera");
//     } else {
//       console.log("Camera permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: "#6ABC56",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "skyblue",
  },
});



// const data = ()=>{
//   const [name, setName] = useState("aksh")
// }

// const Home = () => {
  
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, padding: 16 }}>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               fontSize: 25,
//               textAlign: 'center',
//               marginBottom: 16
//             }}>
//             This is The Home Page.
//           </Text>
//           <TextInput placeholder='enter school name '>

//           </TextInput>
          
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }



export default Home;