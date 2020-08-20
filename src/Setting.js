import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Content, Button, ListItem, Badge, Picker, Form } from 'native-base';
// import { color } from 'react-native-reanimated';
import {nightChange} from './NightMode';

const Setting = (props) => {
  const [noticeMode, setNoticeMode] = useState('default');
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [isDisturb, setIsDisturb] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [bgc, setBgc] = useState('white');

  const changeNight = () => {
    setIsNight(!isNight);
    // let night = (isNight)?'darkblue':'white';
    // nightChange(night);
    // setBgc(night);
  }

  return (
    <View style={[styles.container, {backgroundColor: {bgc}}]}>
      <Container>
        <Header transparent>
          <Left style={{ flex: 1 }}>
            <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
          </Left>
          <Body style={{ flex: 1 }}>
            <Icon name="ios-settings" style={{ alignSelf: 'center', color: "orange" }} />
          </Body>
          <Right style={{ flex: 1 }}></Right>
        </Header>

        <Content contentContainerStyle={styles.contentStyle}>

          <ListItem>
          </ListItem>

          <ListItem icon onPress={() => props.navigation.navigate('AccountInfo')} >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active type="MaterialCommunityIcons" name="account-edit" />
              </Button>
            </Left>
            <Body>
              <Text>Account Info</Text>
            </Body>
            <Right>
              <Icon active type="AntDesign" name="right" />
            </Right>
          </ListItem>

          <ListItem>

          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "darkblue" }}>
                <Icon active type="Fontisto" name="night-clear" />
              </Button>
            </Left>
            <Body>
              <Text>Night Mode</Text>
            </Body>
            <Right>
              <Switch value={isNight} onValueChange={changeNight}/>
            </Right>
          </ListItem>


          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#E5816B" }}>
                <Icon active type="Fontisto" name="font" />
              </Button>
            </Left>
            <Body>
              <Text>Text Size</Text>
            </Body>
            <Right>
              <Icon active type="AntDesign" name="right" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "silver" }}>
                <Icon active type="MaterialCommunityIcons" name="update" />
              </Button>
            </Left>
            <Body>
              <Text>Auto Update</Text>
            </Body>
            <Right>
              <Switch value={autoUpdate} onValueChange={() => setAutoUpdate(!autoUpdate)} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#DEDC9B" }}>
                <Icon active type="Entypo" name="documents" />
              </Button>
            </Left>
            <Body>
              <Text>Terms of Use</Text>
            </Body>
            <Right>
              <Icon active type="AntDesign" name="right" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "grey" }}>
                <Icon active type="AntDesign" name="exclamationcircleo" />
              </Button>
            </Left>
            <Body>
              <Text>About</Text>
            </Body>
            <Right>
              <Icon active type="AntDesign" name="right" />
            </Right>
          </ListItem>

          <ListItem>

          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#F1C4E8" }}>
                <Icon active type="AntDesign" name="message1" />
              </Button>
            </Left>
            <Body>
              <Text>Message</Text>
            </Body>
            <Right>
              <Badge width={29} >
                <Text style={styles.badgeText}>2</Text>
              </Badge>
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#3F9E7B" }}>
                <Icon active type="MaterialIcons" name="notifications-off" />
              </Button>
            </Left>
            <Body>
              <Text>Do Not Disturb</Text>
            </Body>
            <Right>
              <Switch value={isDisturb} onValueChange={() => setIsDisturb(!isDisturb)} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#B5CC98" }}>
                <Icon active type="AntDesign" name="sound" />
              </Button>
            </Left>
            <Body>
              <Text>Notice Mode</Text>
            </Body>
            <Right>
              <Form>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your SIM"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: 120 }}
                  selectedValue={noticeMode}
                  onValueChange={setNoticeMode.bind(this)}
                >
                  <Picker.Item label="Default" value="default" />
                  <Picker.Item label="Vibrate" value="vibrate" />
                  <Picker.Item label="Silent" value="silent" />
                </Picker>
              </Form>
            </Right>
          </ListItem>



        </Content>
      </Container>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    // backgroundColor: {bgc},
  },
  contentStyle: {
    width: '95%',
    // backgroundColor: 'blue',
    alignSelf: 'center'
  },
  badgeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }
}

export default Setting;
