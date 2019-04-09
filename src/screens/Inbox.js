import React from 'react';
import { StyleSheet, Text, View,Picker,Image,TextInput,YellowBox } from 'react-native';
// import { SocialIcon,Icon} from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import { Header ,Button} from 'react-native-elements'
import BackButton from '../components/button/BackButton'
YellowBox.ignoreWarnings(['Warning: ...']);

export default class Inbox extends React.Component {
  constructor(){
    super()
    this.state={
     
    }
  }



  render() {
    return (
        <View style={styles.container}>
            <Header centerComponent={{ text: ' LogOut ', style: { color: '#fff' } }}/>
            <BackButton navigation={this.props.navigation}/>
          {/* <View style={{ flex:1,flexDirection: 'column',backgroundColor:'#F7F7F7',marginTop:50,height: 150,borderColor: '#080b09', }}>
              <View style={styles.TextBox}>
                <Text style={styles.text}>   </Text>              
              </View>
          </View> */}
     
            <View style={{ flexDirection: 'row',backgroundColor:'#F7F7F7',marginBottom:0,}}>
                  <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder=' Type a message'
                    placeholderTextColor="#080b09"
                  >
                  </TextInput>
                  <View style={{ flexDirection: 'row',backgroundColor:'#F7F7F7',marginBottom:0,marginTop:5,marginLeft:10}}>
                    <Icon name="send" size={30} style={styles.Icon}/>
                  </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#80bfff',
    justifyContent: 'space-between',
  },
  TextBox:{
    width: '100%',
     height: 50,
     backgroundColor:'#F7F7F7',
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 5,
     },
     shadowOpacity: 0.36,
     shadowRadius: 6.68,
     
     elevation: 11,
  },
  text:{
    // textAlign:'left',
    marginTop:10,
    marginLeft:'25%',  
    fontSize:15,  
  },
  TextInput:{
    width:420,
    height: 50, 
    borderColor: '#F7F7F7', 
    borderWidth: 1,
    // backgroundColor:'#F7F7F7',
    backgroundColor:'#E9EDEB',
  },
  Icon:{
    marginRight:15,
    marginBottom:12,
  },
  button:{
    width: 250, height: 50,
    marginLeft:20,
    alignItems: 'center',
  },

 
});
