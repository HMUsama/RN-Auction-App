import React from 'react';
import { StyleSheet, View ,ScrollView, Image, Text,
   TouchableOpacity, ActivityIndicator, RefreshControl, Button,YellowBox,
   SafeAreaView,
   TextInput,
   Platform,
   StatusBar,
   Dimensions
  } from 'react-native'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import MenuButton from '../components/button/MenuButton'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Category from '../components/category/Category'
import LiveBit from '../components/liveBit/LiveBit'
import Expired from '../components/liveBit/Expired'
import * as firebase from 'firebase';
import 'firebase/firestore';
import moment from 'moment'
YellowBox.ignoreWarnings(['Warning: ...']);

const    {height , width} = Dimensions.get('window')


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Users:[],
    refreshing:false,
    serach:'',
    result:null,
    }
}
componentWillUpdate(){
  // this.getDataFireStore();
}
componentDidUpdate(){
  this.getDataFireStore();
}
getDataFireStore = async () => {
  try {

    const allAuctions = await firebase.firestore().collection('Auction').get();
    const data = allAuctions.docs.map( a => a.data());
    console.log("----------------------------------------Dashboard--->",data);
    this.setState({ Users: data });
  } catch (err) {
    console.error(err);
  }
};

 componentWillMount (){

  this.getDataFireStore();

    this.startHeaderHieght=80
    if(Platform.OS == 'android'){
        this.startHeaderHieght = 75 + StatusBar.currentHeight;
    }
}

serach=async() =>{
// serach(){
  const {serach}  = this.state;
  console.log("Searching...................",serach)
  try {
    const allAuctions = await firebase.firestore().collection('Auction').where('Category','==',serach).get();
    const data = allAuctions.docs.map( a => a.data());
    console.log("Categorys---------------------------------Category-----------------------Category->",data);
    this.setState({ result: data });
  } catch (err) {
    console.error(err);
  }
}

_onRefresh = () => {
  const { Users } = this.state;
  if (Users) {
      setTimeout(() => {
          this.getDataFireStore();
      }, 10)
  }
  this.setState({ refreshing: false });
}
  render() {
    const {Users,result,serach} = this.state;
  
    return (

      <SafeAreaView style={{flex:0}}>
      <View style={{flex:0}}>
          <View style={{height:this.startHeaderHieght,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:"#92C9EB"}}>
              <View style={{flexDirection:'row',
                          padding:10,
                          backgroundColor:'#92C9EB',
                          marginHorizontal:5,
                          shadowColor:'black',
                          shadowOpacity:0.5,
                          shadowOffset:{width:0,height:0},
                          elevation:1,
                          marginTop:Platform.OS == 'android' ? 30 : null
                          }}>
                          {/* <Icon name="ios-search" size={25} style={{marginLeft:20}}/> */}
                          <TextInput 
                          underlineColorAndroid="transparent"
                          placeholder="Search here Items"
                          placeholderColor="gray"
                          style={{flex:1,fontWeidth:'700',marginLeft:40,
                          backgroundColor:'white'}}
                          onChangeText={(serach) => this.setState({ serach })}
                          />
                          <Icon name="ios-search" size={25} style={{marginLeft:17}}onPress={()=>this.serach()}/>
              </View>
          </View>
      </View>
      <MenuButton navigation={this.props.navigation} style={{marginLeft:-10}}/> 


      <View style={styles.container}>
      
          <ScrollView
            refreshControl={
              <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
              />}
          >
                      
                        <View style={{marginTop:15}}>
                        <Text style={{ fontSize: 25, fontWeight: "bold", color: '#072134', paddingLeft: 50,marginTop:5 }}> Live Auctions</Text>
                            <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false}>
                        {
                       result !==null && serach !=="" ?  <View>
                         <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false}>
                         {
                              result.map((i,index)=>{
                                if(i.EndTime > moment(Date.now()).format('LLLL')){
                                  return   <Expired
                                  index={index}
                                  id={i.ID}
                                  bid={i.Bid}
                                  imageUri={i.Image}
                                  S_Time={i.StartTime}
                                  E_Time={i.EndTime}
                                  name={i.Name}
                                />
                                }else{
                                  return   <LiveBit
                                  index={index}
                                  id={i.ID}
                                  bid={i.Bid}
                                  imageUri={i.Image}
                                  S_Time={i.StartTime}
                                  E_Time={i.EndTime}
                                  name={i.Name}
                                />
                                }
                                return   <LiveBit
                                index={index}
                                id={i.ID}
                                bid={i.Bid}
                                imageUri={i.Image}
                                S_Time={i.StartTime}
                                E_Time={i.EndTime}
                                name={i.Name}
                              />
                              })
                         }
                       </ScrollView>
                       </View>
                         : <View>
                                     <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false}>
                          {
                            Users.map((i,index)=>{
                              // console.log("End>>>>>>>",i.EndTime)
                              // console.log("Cur>>>>>>>",moment(Date.now()).format('LLLL'))
                          if(i.EndTime <= moment(Date.now()).format('LLLL')){
                            console.log("StartTime>>>>>>>>>",i.StartTime)
                          return   <LiveBit
                          index={index}
                          id={i.ID}
                          bid={i.Bid}
                          imageUri={i.Image}
                          S_Time={i.StartTime}
                          E_Time={i.EndTime}
                          name={i.Name}
                        />
                           
                          }else{
                            console.log("End Time=========",i.EndTime)
                            return   <Expired
                            index={index}
                            id={i.ID}
                            bid={i.Bid}
                            imageUri={i.Image}
                            S_Time={i.StartTime}
                            E_Time={i.EndTime}
                            name={i.Name}
                          />

                          //   return   <LiveBit
                          //   index={index}
                          //   id={i.ID}
                          //   bid={i.Bid}
                          //   imageUri={i.Image}
                          //   S_Time={i.StartTime}
                          //   E_Time={i.EndTime}
                          //   name={i.Name}
                          // />
                           }
                          })
                          }
                          </ScrollView>
                          </View>
                        }
                            </ScrollView>
                        </View>

          </ScrollView>
      </View>
      </SafeAreaView>
    
    );
  }
}



const mapStateToProps=(state,ownSnap)=>{
  const data = state.firestore.ordered.Auction;
  const Auction = [data]
  return {
      // All_Auctioner:Auction,
  }
}

export default compose(connect(mapStateToProps,null),
                        firestoreConnect([
                            // {collection:"Users"},
                            {collection:"Auction"},
                        ])
                        )
                        (Dashboard);

// export default Dashboard 


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop:20,
    backgroundColor: '#3BADC7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
