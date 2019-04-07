const initState = {
    authUser:null
}

const createAuction = (state= initState,action) =>{
    switch(action.type){
        case "Create_Auction_SUCCESS":
        return{
            ...state,
            authError:null
        }
        case "Create_Auction_ERROR":
        return{
            ...state,
            authError:'Try Again'
        }
        default:
        return state
    }
}

export default createAuction;