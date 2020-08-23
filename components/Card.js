import React from 'react';
import {StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
import { Header, Text, Icon, Left, Body, Right, View} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class Card extends React.PureComponent{
  render() {
    return(
        <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImages} source={{uri:'https://i.ibb.co/rFrvdvk/coupons.png'}} />
          <Text>End on 22/8/2021</Text>
          <View style={styles.between}>
            <Text>{this.props.item.id}</Text>
            <Text style={{color:"red"}}>Get It Now!</Text>
          </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#616D7E',
    marginBottom:10,
    marginLeft:'2%',
    width:'96%',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
      width:3,
      height:3
    },
    borderColor:'#F44336',
    borderRadius:4
  },
  cardImages:{
    width:'100%',
    height:200,
    resizeMode:'cover'
  },
  between:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  }
})