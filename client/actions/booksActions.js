import axios from 'axios'

export function search(book){
    return dispatch=>{
        console.log(book)
        axios({
            method:'post',
            url:'/books',
            data:book
        }).then((res)=>{
            console.log(res)
            dispatch({type:'SEARCH_BOOKS',payload:res.data})
        })
    }
}
export function mybooks(){
    return dispatch=>{
        axios({
            method:'get',
            url:'/mybooks'
        }).then((res)=>{
            dispatch({type:'MY_BOOKS',payload:res.data})
        })
    }
}
export function addBook(book){
    return dispatch=>{
        axios({
            method:'post',
            url:'/addbook',
            data:book
        }).then((res)=>{
            dispatch({type:'MY_BOOKS',payload:res.data})
        })
    }
}
export function deleteBook(book){
    return dispatch=>{
        axios({
            method:'delete',
            url:'deletebook',
            data:book
        }).then((res)=>{
            dispatch({type:'MY_BOOKS',payload:res.data})
        })
    }
}