import React, {Component} from "react";
import {View, Text, ScrollView, Image, Text, StyleSheet, TouchableOpacity, TextInput, Button, KeyboardAvoidingView,} from "react-native";
import { Constants, Location, Permissions, Contacts ,ImagePicker} from 'expo';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';

class AuctionList extends Component {


    render() {
        return (
                <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
                    <View style={{flex:2}}>
                        <Image source={this.props.imageUri} 
                            style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                        />
                    </View>
                    <View style={{flex:1 ,paddingLeft:10,paddingTop:10}}>
                        <Text>{this.props.name}</Text>
                    </View>
                </View>
        );
    }
}


export default AuctionList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

