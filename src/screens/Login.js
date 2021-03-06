import React from 'react'
import { connect } from 'react-redux'
import {userLogin} from '../store/actions/authAction'
import { StyleSheet, Text, View ,Button,AsyncStorage,TouchableOpacity} from 'react-native'
import { Tile } from 'react-native-elements'
import firestore from '../config/FbConfig'
import firebase from 'firebase'

class Login extends React.Component {
  constructor(){
    super()
    this.state={
      userInfo:'',
      ID:"",
      Name:'',
      Picture:'',
    }
  }

upload(){
  const { ID,Name,Picture} = this.state;
  let userINFO={
    ID:ID,
    Name:Name,
    Picture:Picture,
  }
  AsyncStorage.setItem('userINFO',
  JSON.stringify(userINFO))
  this.props.userLogin(this.state)
  this.props.navigation.navigate("Drawer")
}
componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=> {
    console.log("user",user)
    // if (user) {
    //  this.props.navigation.navigate("Drawer");
    // } else {
    //   // No user is signed in.
    //   this.props.navigation.navigate("Login");
    // }
  });
}

async componentWillMount(){
//  componentWillMount(){
  let userINFO = await AsyncStorage.getItem('userINFO');
  let U = JSON.parse(userINFO);
  this.setState({
      id:U.ID,
  })
  const {ID} = this.state;
  console.log("ID===========",ID)
  if(ID){
    this.props.navigation.navigate("Drawer")
  }
}

Login=async()=> {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1996325183779367', {
      permissions: ['public_profile'],
    });

  if (type === 'success') { 
    // const credential = firebase.auth.FacebookAuthProvider.credential(token)
    // console.log(success.additionalUserInfo.profile.name, 'success******');
    // var currentUID = success.user.uid
    // var obj = {
    //     name: success.additionalUserInfo.profile.name,
    //     UID: success.user.uid,
    //     photo: success.user.photoURL,
    //     Token: token,
    //     status: 'unblock'

    // }
    // firebase.auth().signInAndRetrieveDataWithCredential(credential).then((success) => {
    //   console.log(success.additionalUserInfo.profile.name, 'success******');
    //   var currentUID = success.user.uid
    //   var obj = {
    //       name: success.additionalUserInfo.profile.name,
    //       UID: success.user.uid,
    //       photo: success.user.photoURL,
    //       Token: token,
    //       status: 'unblock'

    //   }
    //   firebase.database().ref('/Users/' + currentUID).update(obj);
    // }) .catch((error) => {console.log('error',error)
    // })
  
    // Get the user's name using Facebook's Graph API
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`)
    const userInfo = await response.json()
  
    this.setState({
      userInfo,
      ID:userInfo.id,
      Name:userInfo.name,
      Picture:userInfo.picture.data.url
    });
    this.upload()     
      }else{
        alert("Try Again")
      }
}

  render() {
    return (
      <View style={styles.container}>
      <Tile
      style={styles.image}
        imageSrc={require('../../assets/auction.png')}
      />
  
         <TouchableOpacity style={styles.btn}  onPress={this.Login} >
              <Text style={styles.btn_text}>Log In with Facebook</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    userLogin:(UserData) => dispatch(userLogin(UserData))
  }
}

export default connect(null,mapDispatchToProps)(Login);
// export default Login;

const styles = StyleSheet.create({
  image:{
    
  },
  Button:{
    width:100,
  },
  container: {
    flex: 1,
    backgroundColor: '#16171f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '500',
        alignSelf: 'center'
    },
   btn: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 50,
        width: 320,
        color: '#fff',
        fontSize: 24,
        borderRadius: 50,
        fontWeight: '600',
        backgroundColor: '#14629D',
    }
});


















