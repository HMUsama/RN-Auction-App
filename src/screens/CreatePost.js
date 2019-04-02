import React from 'react';
import {View, ScrollView, Image, Text, StyleSheet, TouchableOpacity,TextInput, Button, KeyboardAvoidingView,} from 'react-native'
import { Header } from 'react-native-elements'
import MenuButton from '../components/button/MenuButton'
// import Modal from 'react-native-modal'
// import { TextInput } from 'react-native-gesture-handler';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'

 class CreatePost extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      decscrition:'',
      Bid:'',
      category:'',
      isDateTimePickerVisibleStart: false,
      isDateTimePickerVisibleEnd: false,
      image: null,
      StartTime:null,
      EndTime:null,
    }
  }
  uploadAuction(){

  }


  ImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  

    
    console.log('Click Image func')
    // await Permissions.askAsync(Permissions.CAMERA);
    // await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // const pickerResult = await ImagePicker.launchImageLibraryAsync({
    //     allowsEditing: true,
    // });
    // this._handleImagePicked(pickerResult);
};



  //Start-------------- Date------------------ Picked
  _showDateTimePickerStart = () => this.setState({ isDateTimePickerVisibleStart: true });
  _hideDateTimePickerStart = () => this.setState({ isDateTimePickerVisibleStart: false });

  StartDatePicked = (date) => {
      this.setState({
          StartTime: moment(date).format("LLLL")
      })
      this._hideDateTimePickerStart();
  };

  //End--------------- Date---------------- Picked
      _showDateTimePickerEnd = () => this.setState({ isDateTimePickerVisibleEnd: true });
      _hideDateTimePickerEnd = () => this.setState({ isDateTimePickerVisibleEnd: false });
  
      EndDatePicked = (date) => {
          this.setState({
              EndTime: moment(date).format("LLLL")
          })
          this._hideDateTimePickerEnd();
      };
  
  
  Button = async () =>{  
    this.props.navigation.navigate("Home")
  }
  render() {
    const { EndTime, text, StartTime, image, Bid } = this.state
    return (
      <View style={styles.container}>
       <Header
        centerComponent={{ text: 'Create a Post', style: { color: '#fff'  } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        /><MenuButton navigation={this.props.navigation}/>
          <ScrollView>
          <KeyboardAvoidingView enabled>

            <View style={styles.MainView}>
                           <View>
                              <View style={styles.headings}><Text style={styles.HeadingText}>Product Name</Text></View>
                            <View style={styles.InputDiv}>
                                <TextInput
                                    style={styles.InputFields}
                                    onChangeText={(name) => this.setState({ name })}
                                    placeholder={'Product Name'}
                                    value={this.state.text}
                                />
                            </View>
                          </View>
{/* ==================== */}
                            <View>
                              <View style={styles.headings}><Text style={styles.HeadingText}>Product Description</Text></View>
                                  <View style={styles.InputDiv}>
                                      <TextInput
                                          style={styles.InputFields}
                                          multiline={true}
                                          onChangeText={(decscrition) => this.setState({ decscrition })}
                                          placeholder='Product decscrition'
                                          value={this.state.text}
                                      />
                                </View>
                            </View>
{/* ==================== */}
                          <View>
                            <View style={styles.headings}><Text style={styles.HeadingText}>Starting Buyer</Text></View>
                            <View style={styles.InputDiv}>
                                <TextInput
                                    style={styles.InputFields}
                                    onChangeText={(e) => this.setState({ Bid: e })}
                                    value={Bid}
                                    placeholder={'Price'}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
{/* ===================== */}   
                         <View>
                              <View style={styles.headings}><Text style={styles.HeadingText}>Product Category</Text></View>
                                  <View style={styles.InputDiv}>
                                      <TextInput
                                          style={styles.InputFields}
                                          multiline={true}
                                          onChangeText={(category) => this.setState({ category })}
                                          placeholder='Insert  Category'
                                          value={this.state.text}
                                      />
                                </View>
                            </View>
{/* ==================== */}  
                         <View>
                            <View style={styles.headings}><Text style={styles.HeadingText}>Set Auction Period</Text></View>
                            <View>
                            <View style={{flexDirection:'row'}}> 
                                <View style={{}}>
                                    <TouchableOpacity style={styles.dateTime} 
                                      onPress={this._showDateTimePickerStart}
                                      >
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                            color: "#424D62",
                                        }}> <Icon name='hourglass-start' size={20} color='#09345F' />   Start Time:</Text>
                                    </TouchableOpacity>
                                </View>
                                   
                                    <DateTimePicker
                                        isVisible={this.state.isDateTimePickerVisibleStart}
                                        onConfirm={this.StartDatePicked}
                                        onCancel={this._hideDateTimePickerStart}
                                        is24Hour={true}
                                        mode={'datetime'}
                                        titleIOS={'Open Time'}
                                    /> 
                                    {
                                        StartTime && 
                                        <View style={{ alignItems: 'center' }}>
                                          <Text style={{marginTop:0}}>{StartTime}</Text>
                                      </View>
                                    } 
                                </View>   
                            </View> 
{/* ====================================== */}
                          <View >
                          <View style={{flexDirection:'row'}}> 
                                <View>
                                    <TouchableOpacity style={styles.dateTime} 
                                      onPress={this._showDateTimePickerEnd}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                            color: "#424D62",
                                        }
                                        }> 
                                    <Icon name='hourglass-start' size={20} color='#09345F' />   Ending Time:</Text>
                                    </TouchableOpacity>

                                </View>
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisibleEnd}
                                    onConfirm={this.EndDatePicked}
                                    onCancel={this._hideDateTimePickerEnd}
                                    is24Hour={true}
                                    mode={'datetime'}
                                    titleIOS={'Open Time'}
                                />
                                {EndTime && <View style={{ alignItems: 'center' }}>
                                    <Text style={{marginTop:0}}>{EndTime}</Text>
                                </View>}
                            </View> 
                          </View> 
                        </View>
{/* ==================== */}  
                        <View>
                          <View style={styles.headings}><Text style={styles.HeadingText}>Product Image</Text></View>
                            <View style={{ alignItems: "center" }}>
                                {image ?
                                    <Image source={{ uri: image }} style={{ width: 270, height: 230 }} />
                                    :
                                    <Image source={require("../../assets/gallery1.png")} style={{ width: 200, height: 200 }} />
                                }
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 30 }}>
                                <Button
                                    title="Pick an image from camera roll"
                                    onPress={() => this.ImagePicker()}
                                />
                            </View>
                        </View>     
                      </View>
{/* ==================== */}  
                      <View style={{ height: 50, marginBottom:10,borderRadius: 10}}>
                            <Button
                                onPress={() => this.uploadAuction()}
                                title="Upload"
                                style={styles.submitButton}
                            />
                        </View>
                        {/* <View style={{ height: 20 }}></View> */}
          </KeyboardAvoidingView>
         </ScrollView> 

      </View>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    // Location:(CurrentLocation) => dispatch(Location(CurrentLocation))
  }
}

const mapStateToProps=(state,ownProps)=>{
  return {
      User:users
  }
}
export default compose(connect(mapStateToProps,mapDispatchToProps),
                        firestoreConnect([
                            // {collection:"circle"}
                        ])
                        )
                        (CreatePost);
// export default CreatePost;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#33865d',
    // width:420,
    // height:520,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92C9EB',
  },
  InputFields: {
    minHeight: 30,
    maxHeight: 100,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 15,
},
InputDiv: {
  margin: 5,
  padding: 5,
},
MainView: {
  margin: 5,
  backgroundColor: '#3BADC7',
  // borderRadius: 10,
},
headings: {
  paddingHorizontal:10,
   justifyContent: 'center',
   // alignItems: 'center'
},
HeadingText: {
  fontSize: 15,
  fontWeight: 'bold',
  color: "#131415",

},
inputPrice: {
  backgroundColor: 'rgba(99, 172, 221,0.5)',
  color: '#fff',
  height: 34,
  width: 70,
  paddingHorizontal: 10,
  // paddingVertical: 16,
  justifyContent: 'center',
  fontSize: 18,
  borderRadius: 10,
  overflow: 'hidden'
},
dateTime: {
  padding: 10,
  color: '#fff',
  height: 40,
  fontSize: 18,
},
submitButton:{
  color:'#1079E0',
  height:80,
  width:80,
  marginTop:20,
  borderRadius:45,
  // color:'#1079E0',
  // borderRadius:'50'
},
  Button:{
    marginTop:120,
    color:'white',
  },
});
