import jwtDecode from 'jwt-decode'

const isAuthenticated = ()=>{
    if(localStorage.getItem('token')){
        return true
    }else{
        return false
    }
}

export default function userReducer(state={
isFetching:false,
isAuthenticated:isAuthenticated(),
error:'',
user:{}
},action){
    switch(action.type){
        case 'LOGIN':{
            return {
                isAuthenticated:true
            }
        }
        case 'SIGNUP':{
            if(action.payload.error){
                return{...state,
                    error:action.payload.error,
                    isAuthenticated:false
                }
            }else{
                return{...state,
                    error:'',
                    isAuthenticated:true,
                    user:jwtDecode(action.payload)
                }
            }
            
        }
        default:
        return state
    }

}