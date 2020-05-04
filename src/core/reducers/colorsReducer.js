 import * as CONSTANTS from '../constants'

 const initialState = {
   colors: [
     {
       id: 1,
       name: 'red',
       value: '#FF0000'
     },
     {
      id: 2,
      name: 'blue',
      value: '#FF0000'
    },
    {
      id: 3,
      name: 'yellow',
      value: '#FF0000'
    }
    
   ]
 }

 export default (state = initialState, action) => {
   switch(action.type){
     case CONSTANTS.ADD_COLOR:
       return {
         ...state,
         colors: [...state.colors, action.payload]
       }
    default:
      return state
   }
 }