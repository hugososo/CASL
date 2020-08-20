import React from 'react';
import { StyleSheet,SafeAreaView,FlatList,Text,TouchableOpacity,View,Dimensions,StatusBar,Image, SnapshotViewIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SearchBar } from 'react-native-elements';
import { useState }from "react";

const DATA = [
    {
      id: '1',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQex0BrcitYx7Yrh-TwxTsbMN6gpXwYFtZUbw&usqp=CAU",
      title: '一芳水果茶',
      location: '2樓204室, 2/F Room 204',
      info: 'A tea for good day'
    },
    {
        id: '2',
        url: "https://s.hdnux.com/photos/01/00/04/13/16794366/3/920x920.jpg",
        title: 'Five Guys',
        location: '3樓313室, 3/F Room 313',
        info: 'The Best Hurburger'
    },
    {
        id: '3',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQex0BrcitYx7Yrh-TwxTsbMN6gpXwYFtZUbw&usqp=CAU",
        title: 'Sun Tea',
        location: '2/F 203',
        info: 'A tea for good day'
    },
    {
        id: '4',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQex0BrcitYx7Yrh-TwxTsbMN6gpXwYFtZUbw&usqp=CAU",
        title: 'Sun Tea',
        location: '2/F 203',
        info: 'A tea for good day'
    },
    {
        id: '5',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQex0BrcitYx7Yrh-TwxTsbMN6gpXwYFtZUbw&usqp=CAU",
        title: 'Sun Tea',
        location: '2/F 203',
        info: 'A tea for good day'
    },
    {
        id: '6',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQex0BrcitYx7Yrh-TwxTsbMN6gpXwYFtZUbw&usqp=CAU",
        title: 'Sun Tea',
        location: '2/F 203',
        info: 'A tea for good day'
    },
    {
        id: '7',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQex0BrcitYx7Yrh-TwxTsbMN6gpXwYFtZUbw&usqp=CAU",
        title: 'Sun Tea',
        location: '2/F 203',
        info: 'A tea for good day'
    },
      
]

const FlatListItem = (props) => {
    return(
    <TouchableOpacity>
    <View style={{flex:1,flexDirection:'row',backgroundColor:'white',marginLeft:10,marginRight:10,marginBottom:7,marginTop:7,borderRadius:10,shadowColor:"#000",shadowOffset:{width:0, height:3},shadowOpacity:0.3,shadowRadius:4.65,elevation:7}}>
        <View style={{borderRightWidth:1,borderColor:"#9b9b9b"}}>
        <Image source={{uri: props.item.url}} style={{borderBottomLeftRadius:10, borderTopLeftRadius:10,width:120, height: 120}}></Image>
        </View>
        <View style={{flex:1,flexDirection:'column'}}>
        <Text style={styles.title}>{props.item.title}</Text>
        <View style={{marginBottom:5,flexDirection:'row'}}>
        <Icon name="map-marker-alt" size={20} color="orange" style={styles.locationIcon}/>
        <Text style={styles.location}>{props.item.location}</Text>
        </View>
        <Text style={styles.info}>{props.item.info}</Text>
        </View>
    </View>
    </TouchableOpacity>
    )
}

const ShopList = (props) => {

    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.resultText}>搜尋結果：{props.search}</Text>
        <FlatList
        data={DATA}
        renderItem={({item, index})=>{
            return (<FlatListItem item={item} index={index}></FlatListItem>)
        }}
        keyExtractor={item => item.id}
        ></FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    resultText: {
        marginLeft:10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
        

    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        marginTop:5,
        padding: 10,
        fontSize: 20,
    },
    locationIcon: {
        marginLeft: 5,
        padding: 2.5,
        fontSize: 14
    },
    location: {
        color: 'black',
        padding: 2.5,
        fontSize: 14
    },
    info: {
        color: 'black',
        marginLeft: 5,
        padding: 5,
        fontSize: 14,
    },
});

export default ShopList;