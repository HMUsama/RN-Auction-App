import React from 'react'
import { 
        createMaterialTopTabNavigator, 
        createDrawerNavigator, 
        createStackNavigator, 
        createAppContainer } from "react-navigation"
import {Platform,Dimensions} from 'react-native' 
import MenuDrawer from '../components/menuDrawer/MenuDrawer'
import LogOut from '../screens/Logout'
import Dashboard from '../screens/Dashboard'
import CreatePost from '../screens/CreatePost'
import ViewAuction from '../screens/ViewAuction'


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.85,
    contentComponent:({navigation})=>{
        return(<MenuDrawer navigation={navigation}/>)
    }
}

const StackNavigator = createStackNavigator({
    Dashboard: {
        screen: Dashboard
    },
    CreatePost: {
        screen: CreatePost
    },
    ViewAuction: {
        screen: ViewAuction
    },
})
const DrawerNavigator = createDrawerNavigator(
    {   
        Dashboard: {
            screen: Dashboard
        },
        CreatePost: {
            screen: CreatePost
        },
        ViewAuction: {
            screen: ViewAuction
        },
        LogOut: {
            screen: LogOut
        },
    },
    DrawerConfig
)

const Drawer = createAppContainer(DrawerNavigator)

export default Drawer
