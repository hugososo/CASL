import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableHighlight } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Content, Card, CardItem, H2, Button, } from 'native-base';

const AccountInfo = (props) => {
    const [isInput1, setIsInput1] = useState('purple');
    const [isInput2, setIsInput2] = useState('purple');
    const [isInput3, setIsInput3] = useState('purple');

    const showAlert = () =>{
        Alert.alert(
           'Change password',
           'The password: xxxxx\n\n'
           +'New password: xxxxx\n\n'
           +'Confirm password: xxxxx\n\n',
           [
            {text: 'Cancel', onPress: () => console.log('cancel Pressed'),
            style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
     }

    return (
        <Container>
            <View style={styles.container}>
                <Header transparent>
                    <Left style={{ flex: 1 }}>
                        <Icon type="Entypo" name="back" onPress={() => props.navigation.navigate('Setting')} />
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Icon type="MaterialCommunityIcons" name="account-edit" style={{ alignSelf: 'center', color: "orange" }} />
                    </Body>
                    <Right style={{ flex: 1 }}></Right>
                </Header>

                <Content contentContainerStyle={{ flex: 1, alginItem: 'center', }}>
                    <Card style={styles.cardContainer}>

                        <CardItem header >
                            <H2>Profile</H2>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <TextInput
                                    onBlur={() => setIsInput1('purple')}
                                    onFocus={() => setIsInput1('red')}
                                    style={[styles.txtInput, { borderColor: isInput1 }]}
                                    placeholder={'Tai Man Chan'} />

                                <TextInput
                                    onBlur={() => setIsInput2('purple')}
                                    onFocus={() => setIsInput2('red')}
                                    style={[styles.txtInput, { borderColor: isInput2 }]}
                                    placeholder={'123@123.com'} />

                                <TextInput
                                    onBlur={() => setIsInput3('purple')}
                                    onFocus={() => setIsInput3('red')}
                                    style={[styles.txtInput, { borderColor: isInput3 }]}
                                    placeholder={'1111 0000'} />

                                <TextInput
                                    style={[styles.txtInput, { borderColor: 'grey' }]}
                                    placeholder={'*****'}
                                    editable={false} />
                                <Button
                                    rounded
                                    style={[styles.profileButton, { backgroundColor: '#F5C25D' }]}
                                    onPress={showAlert}>
                                    <Text style={styles.btText}>Change Password</Text>
                                </Button>

                                <TextInput
                                    style={[styles.txtInput, { borderColor: 'grey' }]}
                                    placeholder={'KS 1234'}
                                    editable={false} />
                                <Button
                                    rounded
                                    style={[styles.profileButton, { backgroundColor: '#F5C25D' }]}
                                    onPress={() => props.navigation.navigate('CarPark')}>
                                    <Text style={styles.btText}>Change Car Plate</Text>
                                </Button>

                                <View style={styles.buttonContainer}>
                                    <Button
                                        rounded
                                        style={styles.profileButton}
                                        onPress={() => resetState}>
                                        <Text style={styles.btText}>Reset</Text>
                                    </Button>
                                    <Button
                                        rounded
                                        style={styles.profileButton}
                                        onPress={() => resetState}>
                                        <Text style={styles.btText}>Update</Text>
                                    </Button>
                                </View>


                                
  


                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </View>
        </Container>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    cardContainer: {
        width: '80%',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 50,
    },

    txtInput: {
        // borderBottomColor: "purple",
        // borderColor: {isInput},
        fontSize: 20,
        width: '80%',
        alignSelf: 'center',
        borderWidth: 2.0,
        marginVertical: 10,
        textAlign: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    profileButton: {
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#3F9E7B',
    },

    btText: {
        color: 'white',
        fontWeight: "bold",
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginVertical: 20,
    },

}

export default AccountInfo;