import React from 'react';
import { StyleSheet, Text, View ,Platform,StatusBar,ScrollView} from 'react-native'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import MenuButton from '../components/button/MenuButton'




export default class Dashboard extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header
        centerComponent={{ text: 'Family', style: { color: '#fff'  } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <MenuButton navigation={this.props.navigation}/> 
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#2D8631',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
