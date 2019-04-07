

export const userLogin = (UserData) =>{
        console.log("UserDetails______________",UserData.userInfo.id)
        
    return (dispatch,getState,{getFirebase,getFirestore})=>{
       const firebase = getFirebase();
       const firestore = getFirestore();
       const ID = UserData.userInfo.id;
        firestore.collection("Users").doc(ID).set({
            ID:ID,
            name:UserData.userInfo.name,
            picture:UserData.userInfo.picture.data.url,  
       }).then(()=>{
           dispatch({type:"USER_LOGIN_SUCCESS"})
       }).catch((error)=>{
           dispatch({type:"USER_LOGIN_ERROR",error});
       })
    }
}   