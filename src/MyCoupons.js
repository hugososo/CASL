import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import {Header, Left,Body, Right, Icon} from 'native-base';

const MyCoupons = (props) => {
  return(
  <View style={styles.container}>
      <Header transparent>
        <Left style={{flex:1}}>
          <Icon name="menu" onPress={() => props.navigation.openDrawer()}/>
        </Left>
        <Body style={{flex:1}}>
          <Text style={{alignSelf:'center', color: "orange"}}>My Coupons</Text>
        </Body>
        <Right style={{flex:1}}></Right>
      </Header>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
}

export default MyCoupons;