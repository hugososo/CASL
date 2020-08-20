import React from 'react';
import { StyleSheet,Text,TouchableOpacity,View,Dimensions,ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState }from "react";

const { width } = Dimensions.get('window');

const MySearchBar = (props) => {
const [search, changeSearch] = useState("");
    
    return(
        <View>
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
          </View>
    );
}

export default MySearchBar;