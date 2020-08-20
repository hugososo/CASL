import React from 'react';
import { StyleSheet,ScrollView,Text,TouchableOpacity,View,Dimensions,ImageBackground } from 'react-native';
import {Container, Header, Left,Body, Right, Icon} from 'native-base';
import Carousel from 'react-native-snap-carousel'; 
import MySearchBar from '../components/MySearchBar';
import ShopList from '../components/ShopList'
import Mall from './Mall'
import { createStackNavigator } from '@react-navigation/stack';
import { useState }from "react";
import { SearchBar } from 'react-native-elements';

const { width } = Dimensions.get('window');

const Index =(props) => {

    const [search, changeSearch] = useState("");

        return (
        <View style={styles.container}>
        <Header transparent>
            <Left style={{flex:1}}>
            <Icon name="menu" onPress={() => props.navigation.openDrawer()}/>
            </Left>
            <Body style={{flex:10}}>
            <SearchBar
            placeholder="Type Here..."
            onChangeText={(search)=>{changeSearch(search)}}
            value={search}
            containerStyle={{
              padding: 0,
              borderRadius: 20,
              borderTopWidth:0,
              borderBottomWidth:0,
              width:width/2*1.65,
            }}
            inputContainerStyle={{
              backgroundColor: "white",
              borderRadius: 20,
              height: 35,
            }}
            inputStyle={{
              color: 'black',
              outline: 'transparent'
            }}
          />
            </Body>
        </Header>
        {
            search === ""
            ?
            <Mall />
            :
            <ShopList search={search}/>
        }
        </View>
  )
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#D5E2E2'
    }
}

export default Index;