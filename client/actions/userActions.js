import axios from 'axios'

export function signup(data){

    return dispatch =>{
        axios({
            method:'post',
            url:'/signup',
            data:data
        }).then((res)=>{
            if(!res.data.error){
                localStorage.setItem('token',res.data)
            }
            
            dispatch({type:'SIGNUP',payload:res.data})
        })
    }
}