import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Dimensions ,Image,ScrollView,AsyncStorage} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'



const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

 class MenuDrawer extends React.Component {
constructor(){
    super()
    this.state={
        ID:'',
        Name:'',
        Picture:'',
    }
}
 
navlink(nav,text){
        return(
        <TouchableOpacity style={{flex:1,height:20}} onPress={()=>this.props.navigation.navigate(nav)} >
            <Text style={styles.link}>
            {text}
            </Text>
        </TouchableOpacity>
    )
}
async componentWillMount(){
    let userINFO = await AsyncStorage.getItem('userINFO');
    let U = JSON.parse(userINFO);
    this.setState({
        ID:U.ID,
        Name:U.Name,
        Picture:U.Picture,
    })
}
// menu(){
//     this.props.navigation.navigate("Home")
// }
  render() {
    return (
     <View style={styles.container}>
      {/* <ScrollView style={styles.scroller}> */}
            <View style={styles.topLinks}>
                <View style={styles.profile}>
                    <View style={styles.imageView}>
                        <Image style={styles.img} source={{uri:this.state.Picture}}/>
                    </View>
                 </View>
                <View style={styles.profileText}>
                   <Text style={styles.profileName}>{this.state.Name}</Text>
                </View>
            </View>
             <View style={styles.bottomLinks}>
                {this.navlink('Dashboard','Home')}
                {this.navlink('CreatePost','Create Auction')}
                {this.navlink('ViewAuction','My Auction')}
                {this.navlink('LogOut','LogOut')}
             </View>
      {/* </ScrollView> */}
            <View style={styles.footer}>
                <Text style={styles.disription}>This Product by Panacloud </Text>
                <Text style={styles.version}>1.0</Text>
            </View>
     </View>
    );
  }
}

  const mapStateToProps=(state,ownProps)=>{
      const id = ownProps.navigation.state.key;
      const users = state.firestore.data.Users;
      const user = users ? users : null
    return {
        User:user
    }
  }
export default compose(connect(mapStateToProps),
                        firestoreConnect([
                            {collection:"Users"}
                        ]))
                        (MenuDrawer);
// export default MenuDrawer;


const styles = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor:'lightgray',
    },
    // scroller:{
    //     flex:1,
    // },
    profile: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        // justifyContent:'center',
        paddingTop:10,
        borderBottomWidth:0,
        borderBottomColor:'#777777',
    },
    profileText: {
        flex:3,
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:10,
        marginTop:25,
    },
    profileName: {
        fontSize:20,
        textAlign:'left', 
        paddingBottom:5,
        marginRight:2,
        // marginLeft:1,
        marginTop:50,
        color:'white',
    },
    imageView: {
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        // flexDirection:'column',
        // justifyContent:'center',
    },
    img: {
        height:80,
        width:80,
        marginTop:20,
        borderRadius:45,
        // marginLeft:5,
        // marginBottom:50,
    },
    topLinks:{
        height:150,
        backgroundColor:'black'
    },
    bottomLinks:{
        flex:1,
        // marginRight:50,
        backgroundColor:'#1C8FAB',
        paddingTop:5,
        paddingBottom:200,
        paddingLeft:10,
    },
    link:{
        flex:1,
        fontSize:20,
        padding:10,
        paddingLeft:25,
        // margin:5,
        textAlign:'left',
        marginLeft:50,
    },
    footer:{
        // flex:1,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderTopWidth:1,
    }, 
    version:{
    //    flex:1,
       textAlign:'center',
       marginRight:30,
       color:'black',
    }, 
    disription:{
       flex:1,
       marginLeft:30,
       fontSize:16,

    }, 
});
