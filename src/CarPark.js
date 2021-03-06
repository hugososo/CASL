import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Left,Body, Right, Icon} from 'native-base';

const CarPark = (props) => {
    return(
    <View style={styles.container}>
        <Header transparent>
          <Left>
            <Icon name="menu" onPress={() => props.navigation.openDrawer()}/>
          </Left>
          <Body>
            <Icon name="car" style={{color: "orange"}}/>
          </Body>
          <Right>
          </Right>
        </Header>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>CarPark</Text>
        </View>
      </View>
    );
  }

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
}

export default CarPark;
