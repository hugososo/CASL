import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { Header, Left, Body, Right, Icon, Content, Button } from 'native-base';


const QRScanner = (props) => {
  const showAlert = () => {
    Alert.alert(
      'The integration',
      'The integration: 800\n\n'
      + 'Date: 1st Jan 2020\n\n'
      + 'Shop: DragonDoor\n\n'
      + 'Amount: $1231\n\n',
      [
        {
          text: 'Close',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Header transparent>
        <Left style={{ flex: 1 }}>
          <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
        </Left>
        <Body style={{ flex: 1 }}>
          <Icon name="qrcode" type="AntDesign" style={{ alignSelf: 'center', color: "orange" }} />
        </Body>
        <Right style={{ flex: 1 }}></Right>
      </Header>

      <Content>
        <View style={styles.topTabBar}>
          {/* <View style={styles.topTabSubBar}>
            <Icon name="camera" type="AntDesign" style={{ alignSelf: 'center', color: "orange" }} />
          </View> */}

          <Button iconLeft style={styles.topTabSubBar}>
            <Icon name="camera" type="AntDesign" style={{ alignSelf: 'center', color: "orange" }} />
            <Text>Camera</Text>
          </Button>

          {/* <View style={styles.topTabSubBar}>
            <Icon name="folder" type="Foundation" style={{ alignSelf: 'center', color: "orange" }} />
          </View> */}
          <Button iconLeft style={styles.topTabSubBar}>
            <Icon name="folder" type="Foundation" style={{ alignSelf: 'center', color: "orange" }} />
            <Text>Gallery</Text>
          </Button>
        </View>

        <View style={styles.mainArea}>
          <Text>The camera</Text>
        </View>

        <View>
          <TouchableHighlight onPress={showAlert} style={[styles.button, { alignSelf: 'center' }]}>
            <Text style={{ fontSize: 30 }}>Modal, Just for ref</Text>
          </TouchableHighlight>
        </View>
      </Content>

    </View>
  );

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  topTabBar: {
    height: 80,
    maxHeight: '20%',
    // backgroundColor: 'red',
    marginTop: 20,
    flexDirection: 'row',
  },

  topTabSubBar: {
    width: '50%',
    borderWidth: 2.0,
    borderColor: '#6BF0C8',
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  mainArea: {
    borderWidth: 2.0,
    borderColor: 'red',
    height: 500,
    maxHeight: '60%',
  },

  button: {
    backgroundColor: '#4ba37b',
    width: 300,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20
  },
}

export default QRScanner;