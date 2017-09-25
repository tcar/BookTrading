export default function booksReducer(state={
    books:[],
    mybooks:[]

},action){
    switch(action.type){
        case 'SEARCH_BOOKS':{
            return{...state,
                books:action.payload
            }
        }
        case 'MY_BOOKS':{
            return{...state,
            mybooks:action.payload
            }
        }
        default:
        return state
    }

}