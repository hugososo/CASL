import React,{Component} from 'react';
import {StyleSheet, Text, View, ImageBackground,Image,TextInput,Dimensions} from 'react-native';
import bgImage from '../assets/sky.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window')
export default class App extends Component{
  render(){
    return(
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Sign Up</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            underlineColorAndroid='transparent'
            />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Password Confirm'}
            underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            underlineColorAndroid='transparent'
            />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer:{
    flex:1,
    width:null,
    height:null,
    justifyContent:'center',
    alignItems:'center',
  },
  logoContainer:{
    alignItems:'center',
    marginBottom:15
  },
  logoText:{
    color:'red',
    fontSize:40,
    fontWeight:'500',
    opacity:0.5
  },
  inputContainer:{
    marginTop:10
  },
  input:{
    width: WIDTH - 55,
    height: 45 ,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft : 45,
    backgroundColor: 'rgba(0,0,0,0.55)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  btn:{
    width: WIDTH - 55,
    height: 45 ,
    borderRadius: 25,
    backgroundColor:'pink',
    justifyContent:'center',
    marginTop:20
  },
  text:{
    color:'white',
    fontSize:16,
    textAlign:'center'
  }
});