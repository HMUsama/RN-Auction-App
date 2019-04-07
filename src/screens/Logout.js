import React from 'react';
import { StyleSheet, Text, View ,AsyncStorage} from 'react-native'
import { Header ,Button} from 'react-native-elements'
import BackButton from '../components/button/BackButton'

export default class LogOut extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  Logout=()=>{
    AsyncStorage.clear();
    this.props.navigation.navigate("Login")  
  }
  render() {
    return (
      <View >
          <Header centerComponent={{ text: ' LogOut ', style: { color: '#fff' } }}/>
            <BackButton navigation={this.props.navigation}/>
            {/* <Button title="LogOut"/> */}
            <Text style={styles.container}></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Button
                onPress={this.Logout}
                style={styles.Button}
                title="LogOut"
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1, 
    backgroundColor: '#194D33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
    alignItems: 'center',
    justifyContent: 'center',
    // color:'#f47373',
    marginTop:40,
    fontSize:45,
    },
});
