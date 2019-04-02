import React from 'react';
import { StyleSheet, Text, View,Button,Platform ,Linking,Dimensions,AppState,AsyncStorage} from 'react-native'
import { Header } from 'react-native-elements'
import MenuButton from '../components/button/MenuButton'
import Modal from 'react-native-modal'
// import {  MapView, Permissions, Location,Constants,IntentLauncherAndroid} from 'expo'
// import { connect } from 'react-redux'
// import {compose} from 'redux'
// import { firestoreConnect } from 'react-redux-firebase'

 class ViewAuction extends React.Component {
  constructor(){
    super()
    this.state={
    }
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
 
      <Text>View Auction</Text>
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
