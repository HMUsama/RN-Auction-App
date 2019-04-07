import React, {Component} from "react";
import {View, Text, ScrollView, StyleSheet, Image,Button} from "react-native";
import { LinearGradient } from 'expo';
import * as firebase from 'firebase';
import 'firebase/firestore';
import moment from 'moment'
// import Prompt from 'react-native-prompt';
import Prompt from 'react-native-elements-prompt';

class LiveBit extends Component {
                state = {
                    promptValue: '',
                    showPrompt: false,
                    currentIndex:this.props.index,
                    id:this.props.id
                }
     
    _onPromptSubmit = ( inputValue ) => {
        const {id,currentIndex,promptValue} = this.state
        console.log("ID",id)
        console.log("inputValue",inputValue)
        console.log("currentIndex",currentIndex)
        const db = firebase.firestore();
        db.collection("Auction").doc(id).update(
            "Bid", inputValue
        );
        alert("Your Bid submit")
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
                 <Image source={this.props.imageUri} style={{width: 200, height: 110}}
                 />
            </View>
            <View style={{}}>
                {/* <Text>{`Start Time: ${moment(new Date(this.props.S_Time)).fromNow()}`}</Text> */}
            </View>
            <View style={{}}><Text>{`Time Left: ${moment(new Date(this.props.E_Time)).fromNow()}`}</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 2, marginBottom: 42, paddingTop: 10 }}>
 
            <Prompt
            visible={this.state.showPrompt}
            animationType='slide'
            title={{
              text:'Input something',
              style: {
                color:'grey'
              }
            }}
            input={{
              keyboardType:'numeric',
              placeholder:'some text',
              maxLength: 10,
              style: {
                fontSize: 48
              }
            }}
            submitButton={{
              text:'OK',
              color:'orange'
            }}
            cancelButton={{
              text:'Cancel',
              color:'red'
            }}
            onSubmit={ this._onPromptSubmit  }
            onCancel={ this._hidePrompt }
          />
          <Button
            title='Your Bid'
            onPress={ this._showPrompt.bind(this,currentIndex) }
          />
            </View>
        </View>
        );
    }
}


export default LiveBit;

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

