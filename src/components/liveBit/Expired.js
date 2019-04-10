import React, {Component} from "react";
import {View, Text, ScrollView, StyleSheet, Image,Button,AsyncStorage,YellowBox} from "react-native";
import { LinearGradient } from 'expo';
import * as firebase from 'firebase';
import 'firebase/firestore';
import moment from 'moment'
// import Prompt from 'react-native-prompt';
import Prompt from 'react-native-elements-prompt';
YellowBox.ignoreWarnings(['Warning: ...']);

class Expired extends Component {
                state = {
                    promptValue: '',
                    showPrompt: false,
                    currentIndex:this.props.index,
                    id:this.props.id,
                    ID:'',
                }

    async componentWillMount(){

      let userINFO = await AsyncStorage.getItem('userINFO');
      let U = JSON.parse(userINFO);
      this.setState({
          ID:U.ID,
      })
    }
     
    _onPromptSubmit = ( inputValue ) => {
        const {id,currentIndex,promptValue,ID} = this.state
        console.log("id  user >>",id)
        console.log("ID current user ",ID)
        console.log("inputValue",inputValue)
        console.log("currentIndex",currentIndex)
        const db = firebase.firestore();
        // db.collection("Auction").doc(id).update(
          if(id != ID){
            db.collection("Auction").doc(id).update(
              "Bid", inputValue
              );
              alert("Your Bid submit.......  :) ")
          }else{
            alert("You are admin ........  ")
          }
           
        
        this.setState({
          promptValue: inputValue,
          showPrompt: false
        })
      }
      _showPrompt = () => {
       

        this.setState({
          showPrompt: true
        })
      }
      _hidePrompt = () => {
        this.setState({
          showPrompt: false
        })
      }

    render() {
        const { currentIndex } =this.state
        return (
            <View 
            // key={i.key} 
            style={{ flexDirection: 'column', borderWidth: 2, borderRadius: 8,
            borderColor: '#34b7f1', height: 350, margin: 5, alignItems: 'center', overflow: "hidden" }} >
            <LinearGradient
                colors={['#235566', 'transparent']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 150,
                }}
            />

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.titleName}>
                {this.props.name}
                </Text>
                <Text style={styles.BidAuc}>
                Bid={this.props.bid}
                </Text> 
            </View>
            <View style={{ alignItems: 'center' }}>
                 <Image source={{uri:this.props.imageUri}} style={{width: 200, height: 210}}
                 />
            </View>
            <View style={{}}>
                {/* <Text>{`Start Time: ${moment(new Date(this.props.S_Time)).fromNow()}`}</Text> */}
            </View>
            {/* <View style={{}}><Text>{`Start Time: ${moment(new Date(this.props.S_Time)).fromNow()}`}</Text>
            </View> */}
            <View style={{}}><Text>{`Time Left: ${moment(new Date(this.props.E_Time)).fromNow()}`}</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 2, marginBottom: 42, paddingTop: 10 }}>
            </View>
        </View>
        );
    }
}


export default Expired;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleName:{
        fontSize:30,
        color:'#f5f5f5',
    },
    BidAuc:{
        fontSize:20,
        color:'#f5f5f5',
    }
});

