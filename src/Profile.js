import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Left,Body, Right, Icon} from 'native-base';

const Profile = (props) => {
    return(
    <View style={styles.container}>
        <Header transparent>
          <Left style={{flex:1}}>
            <Icon name="menu" onPress={() => props.navigation.openDrawer()}/>
          </Left>
          <Body style={{flex:1}}>
            <Icon name="ios-person" style={{alignSelf:'center', color: "orange"}}/>
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

export default Profile;
