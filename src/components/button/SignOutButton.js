import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class SignOutButton extends React.Component {
  constructor(){
    super()
    this.state={
    }
  }
  render() {
    return (
     <Ionicons
     name="logout"
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
        right:20
  }
});
