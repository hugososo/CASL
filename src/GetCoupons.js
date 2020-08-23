import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { Header, Text, Icon, Left, Body, Right, View} from 'native-base';
import Card from '../components/Card';

export default class GetCoupons extends React.Component{

  constructor(){
    super();
    this.state = {
      items:[]
    }
  }

  componentDidMount(){
    this._get('https://jsonplaceholder.typicode.com/posts').then(
      data => {
        this.setState({items: data})
      }
    )
  }
  render() {
    if(this.state.items.length==0){
      return(
        <View style={styles.loader}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      )
    }
    return(
      <View>
      <Header transparent>
      <Left style={{flex:1}}>
        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
      </Left>
      <Body style={{flex:1}}>
        <Text style={{alignSelf:'center', color: "orange"}}>Coupons</Text>
      </Body>
      <Right style={{flex:1}}></Right>
    </Header>
      <FlatList style={styles.container} 
        data={this.state.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Card item={item}/>}>
        </FlatList>
        </View>
    );
  }
  _get = async (endpoint) => {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  }
}


const styles = StyleSheet.create({
  header:{
    marginTop:-20
  },
  container:{
    marginTop:20,
    backgroundColor: '#F5FCFF'
  },
  loader:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  }
})