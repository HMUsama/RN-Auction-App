import React from 'react';
import {StyleSheet, View ,ScrollView, Image, Text,AsyncStorage,
  TouchableOpacity, RefreshControl, Button} from 'react-native'
import { Header } from 'react-native-elements'
import MenuButton from '../components/button/MenuButton'
import Modal from 'react-native-modal'
// import {  MapView, Permissions, Location,Constants,IntentLauncherAndroid} from 'expo'
// import { connect } from 'react-redux'
// import {compose} from 'redux'
// import { firestoreConnect } from 'react-redux-firebase'
import * as firebase from 'firebase';
import 'firebase/firestore';
import Category from '../components/category/Category'
import { List, ListItem } from 'react-native-elements'

 class ViewAuction extends React.Component {
  constructor(){
    super()  
    this.state={
      ID:'',
      Users:[],
      image:"",
    }
  }
  getAccountFromFirestore = async () => {
    try {
      const accounts = await firebase.firestore().collection('Auction').get();
      const data = accounts.docs.map( a => a.data());
      console.log("----------------------------------------CCCC----------------------------------------",data);
      console.log("----------------------------------------CCCC----------------------------------------",data.Image);
      this.setState({ Users: data,image:data.Image });
    } catch (err) {
      console.error(err);
    }
  };
  storage = async ()=>{
    let userINFO = await AsyncStorage.getItem('userINFO');
    let U = JSON.parse(userINFO);
    this.setState({
        ID:U.ID,
    });
  }
 componentWillMount (){
      this.storage();
      this.getAccountFromFirestore();
  }
  
  Button = async () =>{  
    this.props.navigation.navigate("Home")
  }
  render() {
    return (
      <View style={styles.container}>
       <Header
        centerComponent={{ text: 'View Auction', style: { color: '#fff'  } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <MenuButton navigation={this.props.navigation}/>
            <View>
                <Text style={{ alignItems: 'center', fontSize: 25, 
                               fontWeight: "bold", color: '#072134', 
                               paddingLeft: 50 }}>My Auction's</Text>

                <ScrollView  horizontal={false}  showsHorizontalScrollIndicator={false}>
                <Image source={{ uri:this.state.image }} style={{ width: 270, height: 230 }} />
                            {/* {
                            this.state.Users.map((i,index)=>{
                                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>key",index);
                              return   <Category 
                                      key={index}
                                      imageUri={i.Image}
                                      name={i.Name}/>
                              })
                            } */}
                            {/* <List containerStyle={{marginBottom: 20}}>
                            <ListItem
                                   
                                  />
                            </List> */}
                </ScrollView>
            </View>
      </View>
    );
  }
}
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     Location:(CurrentLocation) => dispatch(Location(CurrentLocation))
//   }
// }

// const mapStateToProps=(state,ownProps)=>{
//   return {
//       User:users
//   }
// }
// export default compose(connect(mapStateToProps),
//                         firestoreConnect([
//                             {collection:"circle"}
//                         ])
//                         )
//                         (CreatePost);
export default ViewAuction;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#33865d',
    // width:420,
    // height:520,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92C9EB',
  },
  Button:{
    marginTop:120,
    color:'white',
  },
});
