import React from 'react';
import {StyleSheet, View ,ScrollView, Image, Text,AsyncStorage,  TouchableHighlight,YellowBox,
  TouchableOpacity, RefreshControl, Button} from 'react-native'
import { Header } from 'react-native-elements'
import MenuButton from '../components/button/MenuButton'
import Modal from 'react-native-modal'
import * as firebase from 'firebase';
import 'firebase/firestore'
import moment from 'moment'
import AnimatedLoader from "react-native-animated-loader"
import Category from '../components/category/Category'
YellowBox.ignoreWarnings(['Warning: ...']);

import { List, ListItem } from 'react-native-elements'

 class MyAuction extends React.Component {
    state={
      id:'',
      Users:'',
      image:null,
      visible: false, 
    }

  async componentWillMount(){
    let userINFO = await AsyncStorage.getItem('userINFO');
    let U = JSON.parse(userINFO);
    this.setState({
        id:U.ID,
    })
    this.id()
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 30000);
  }
  id= async () =>{
    console.log(">>>>>>>>>>>>>>",this.state.id)
    // const db = firebase.firestore(),

    const allAuctions = await firebase.firestore().collection('Auction').where('ID','==',this.state.id).get();
    const data = allAuctions.docs.map( a => a.data());
    console.log("----------------------------------------My Auction>>>",data);
    this.setState({ Users: data });
  }
  _onRefresh = () => {
    const { Users } = this.state;
    if (Users) {
        setTimeout(() => {
            this.id();
        }, 10)
    }
    this.setState({ refreshing: false });
  }

  Button = async () =>{  
    this.props.navigation.navigate("Home")
  }
  render() {
   const {Users,visible} = this.state;
   console.log(">>>>>>>>>>>>>>render",Users)
    return (
      <View style={styles.container}>
       <Header
        centerComponent={{ text: 'My Auction', style: { color: '#fff'  } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <MenuButton navigation={this.props.navigation}/>
              <View style={{marginTop:15}}>
                        <Text style={{ fontSize: 25, fontWeight: "bold",
                              color: '#072134', marginTop:5,marginLeft:'33%' }}> My Auctions</Text>
                            <ScrollView  horizontal={false}
                             refreshControl={
                              <RefreshControl
                                  refreshing={this.state.refreshing}
                                  onRefresh={this._onRefresh}
                              />}
                              showsHorizontalScrollIndicator={false}>
                            {

                            Users ?  Users.map((i,index)=>{
                              return   <ScrollView style={styles.scrollContainer}>
                              <View style={styles.container}>
                                <View style={styles.box}>
                                  <Image style={styles.profileImage} source={{uri: i.Image}}/>
                                  <Text style={styles.name}>{i.Name}</Text>
                                </View>
                                <ScrollView  horizontal={true}
                              showsHorizontalScrollIndicator={false}>
                                <View style={styles.buttonContainer}>
                                  <TouchableHighlight style={[styles.button, styles.buttonMessage]}>
                                  <Text>{i.Category}</Text>
                                  </TouchableHighlight>
                      
                                  <TouchableHighlight style={[styles.button, styles.buttonLike]}>
                                  <Text>{i.Discription}</Text>
                                  </TouchableHighlight>
                      
                                  <TouchableHighlight style={[styles.button, styles.buttonLove]}>
                                  <Text>
                                  {/* {i.StartTime} */}
                                  {`Start Time: ${moment(new Date(i.StartTime)).fromNow()}`}
                                  </Text>
                                  </TouchableHighlight>
                      
                                  <TouchableHighlight style={[styles.button, styles.buttonCall]}>
                                  <Text>
                                  {/* {i.EndTime} */}
                                  {`Time Left: ${moment(new Date(i.EndTime)).fromNow()}`}
                                  </Text>
                                  </TouchableHighlight>
                                  
                                </View>
                                </ScrollView>
                              </View>
                            </ScrollView>
                                    }) :<View><AnimatedLoader
                                    visible={visible}
                                    overlayColor="rgba(163, 37, 0)"
                                    source={require("../../assets/4680-loader.json")}
                                    animationStyle={styles.lottie}
                                    speed={1}
                                  /></View>
                            }
                            </ScrollView>
            </View>
      </View>
    );
  }
}
export default MyAuction;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#33865d',
    // width:420,
    // height:520,
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#92C9EB',
  },
  Button:{
    marginTop:120,
    color:'white',
  },
  scrollContainer:{
    // flex: 1,
  },
  // container:{
  //   padding:20,
  // },
  box: {
    marginTop:10,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2,
    paddingTop:10
  },
  profileImage:{
    width:200,
    height:200,
    marginBottom:20,
  },
  name:{
    fontSize:35,
    marginBottom:20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:20,
  },

  button: {
    width:160,
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:5,
    margin:10,
    shadowColor: 'black',
    shadowOpacity: .8,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  buttonMessage: {
    backgroundColor: "#cce6ff",
  },
  buttonLike: {
    backgroundColor: "#80bfff",
  },
  buttonLove: {
    backgroundColor: "#3399ff",
  },
  buttonCall: {
    backgroundColor: "#0080ff",
  },
  lottie: {
    width: 30,
    height: 20
  },
});
