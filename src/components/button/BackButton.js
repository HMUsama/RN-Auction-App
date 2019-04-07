import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class BackButton extends React.Component {
  constructor(){
    super()
    this.state={
    }
  }
  render() {
    return (
        // <View>
     <Ionicons
     name="md-arrow-round-back"
    //  color="#0000"
     size={32}
     onPress={()=>this.props.navigation.toggleDrawer()}
     style={styles.menuIcon}
     />
    //  </View>
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
