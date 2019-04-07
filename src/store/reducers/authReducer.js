
const initState = {
    authUser:null
}

const UserDetails = (state= initState,action) =>{
    switch(action.type){
        case "USER_LOGIN_SUCCESS":
        console.log("User Add")
        return{
            ...state,
            authError:null,
        }
        case "USER_LOGIN_ERROR":
        return{
            ...state,
            authError:'Try Again'
        }
        default:
        return state
    }
}

export default UserDetails;