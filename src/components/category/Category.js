import React, {Component} from "react";
import {View, Text, ScrollView, StyleSheet, Image} from "react-native";

class Category extends Component {


    render() {
        return (
                <View style={{height:150,width:150,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
                    <View style={{flex:2}}>
                        {/* <Image 
                        // source={this.props.imageUri} 
                        source={this.props.imageUri} 
                            style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                        /> */}
                          <Image 
                            source={{uri:this.props.imageUri}}
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


export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

