import React from 'react';
import { StyleSheet,Text,TouchableOpacity,View,Dimensions,ImageBackground } from 'react-native';
import {Container, Header, Left,Body, Right, Icon} from 'native-base';
import Carousel from 'react-native-snap-carousel'; 

const { width } = Dimensions.get('window');

const data = [
  {
    uri: require('../assets/sample.jpg'),
    title: 'Trend 1',
    content: 'One of the popular restaurant is coming soon!'
  },
  {
    uri: require('../assets/sample.jpg'),
    title: 'Trend 2',
    content: 'One of the popular Toy Shop is coming soon!'
  },
  {
    uri: require('../assets/sample.jpg'),
    title: 'Trend 3',
    content: '20% off! Only Today!'
  },
  {
    uri: require('../assets/sample.jpg'),
    title: 'Trend 4',
    content: 'Buy 1 Get 1 Free!!'
  },
  {
    uri: require('../assets/sample.jpg'),
    title: 'Trend 5',
    content: 'Buy over $500 have 48 hours free car parking quota!!'
  }
];


class Mall extends React.Component {

  _renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
        //   move to that page
        }}
      >
        <ImageBackground
          source={uri}
          style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Hot!</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render(){
    return(
      <View style={styles.container}>
        <Header transparent>
          <Left style={{flex:1}}>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
          <Body style={{flex:1}}>
            <Icon name="ios-home" style={{alignSelf:'center', color: "orange"}}/>
          </Body>
          <Right style={{flex:1}}></Right>
        </Header>
        <View style={styles.carousel_container}>
          <Carousel
            layout={'default'}
            data={data}
            renderItem={this._renderItem}
            itemWidth={width}
            sliderWidth={width}
            containerWidth={width}
            ref={(ref) => {this.carousel = ref;}}
            onSnapToItem = { index => this.setState({activeIndex:index}) }
          />
        </View>
        <View style={{flex: 1, flexWrap: 'wrap', flexDirection:'row',justifyContent:'space-around',alignItems:'stretch'}}>
          <View style={styles.shop}>
            <Icon name="restaurant" style={{color: 'orange', fontSize: 50}}/>
            <Text>Food</Text>
          </View>
          <View style={styles.shop}>
            <Icon type="MaterialCommunityIcons" name="popcorn" style={{color: 'orange', fontSize: 44}}/>
            <Text style={{marginTop:10}}>Play</Text>
          </View>
          <View style={styles.shop}>
            <Icon type="MaterialCommunityIcons" name="popcorn" style={{color: 'orange', fontSize: 44}}/>
            <Text style={{marginTop:10}}>Play</Text>
          </View>
          <View style={styles.shop}>
            <Icon type="MaterialCommunityIcons" name="popcorn" style={{color: 'orange', fontSize: 44}}/>
            <Text style={{marginTop:10}}>Play</Text>
          </View>
          <View style={styles.shop}>
            <Icon type="MaterialCommunityIcons" name="popcorn" style={{color: 'orange', fontSize: 44}}/>
            <Text style={{marginTop:10}}>Play</Text>
          </View>
          <View style={styles.shop}>
            <Icon type="MaterialCommunityIcons" name="popcorn" style={{color: 'orange', fontSize: 44}}/>
            <Text style={{marginTop:10}}>Play</Text>
          </View>
        </View>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>HomePage</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#D5E2E2'
  },
  carousel_container:{
    flex: 1.5
  },
  shop: {
    flexBasis: '25%',
    margin: 15,
    padding: 10,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    margin: 5,
    backgroundColor: '#B0E4CD',
    flex: 1,
    borderRadius: 10,
    elevation: 3
  },
  imageBackground: {
    flex: 4,
    backgroundColor: '#EBEBEB',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  rightText: { color: 'white' },
  lowerContainer: {
    flex: 1,
    margin: 5
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3F9E7B'
  },
  contentText: { 
    fontSize:14,
    color: '#3F9E7B'
  }
}

export default Mall;
