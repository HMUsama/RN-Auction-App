import { createDrawerNavigator, 
    createMaterialTopTabNavigator, 
    createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../screens/Login' 
import Drawer from '../../src/navigation/Drawer'

// import { Avatar } from 'react-native-elements';

const StackNavigator = createStackNavigator({
        // Login: {
        //     screen: Login
        // },
        Drawer:{
            screen:Drawer
        },
},
    {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Navigator = createAppContainer(StackNavigator)

export default Navigator
