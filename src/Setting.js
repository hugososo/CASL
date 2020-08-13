import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Left,Body, Right, Icon} from 'native-base';

const Setting = () => {
    return(
    <View style={styles.container}>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Setting</Text>
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

export default Setting;
