import uuid from 'uuid';


export const createAuction = (Auction) =>{
    console.log("CIRCLE ACTIONS",Auction)
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        console.log("Circle dispatch++++++++++++++++++++++++++++++++",Auction )
        const firebase = getFirebase();
        const firestore = getFirestore();
        const ID = Auction.ID
        console.log("ID-----------------",ID)

        firestore .collection("Auction").doc(ID).set({
        // firestore .collection("ALLAuctions").doc(ID).collection('Auctions').doc().set({
        // firestore.collection("Users").doc(ID).collection('Auction').doc(uid).add({ 
        // firestore.collection("Users").doc(ID).collection('Auction').add({ 
          ID:Auction.ID,  
          Name:Auction.name,
          Bid:Auction.Bid,
          Category:Auction.category,
          Discription:Auction.decscrition,
          StartTime:Auction.StartTime,
          EndTime:Auction.EndTime,
          Image:Auction.image,
     }).then(()=>{
       alert("Create_Auction_SUCCESS");
      //  this.props.navigation.navigate("Home")
         dispatch({type:"Create_Auction_SUCCESSs",})
     }).catch((error)=>{
      alert("Try Again");
         dispatch({type:"Create_Auction_ERROR",error});
     })
      }
    }