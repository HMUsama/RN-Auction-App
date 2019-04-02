import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class MenuButton extends React.Component {
  constructor(){
    super()
    this.state={
    }
  }
  render() {
    return (
     <Ionicons
     name="md-menu"
    //  color="#0000"
     size={32}
     onPress={()=>this.props.navigation.toggleDrawer()}
     style={styles.menuIcon}
     />
    );
  }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex:9,
        position:'absolute',
        top:40,
        left:20
  }
});
