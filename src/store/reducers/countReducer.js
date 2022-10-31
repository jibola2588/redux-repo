import {inc,dec,reset} from '../actions/countAction'

const initialState = { 
    count : 30,
    
}

export const countReducer = (state = initialState,action) => { 
     switch(action.type) { 
        case inc : 
            console.log('increment is reached');
             return { 
              count : state.count +1
            }
         break;
        case dec : 
        console.log('decrement is reached');
            return { 
               count : state.count -1
              }
         break;
        case reset:
             console.log('reset is reached');
              return initialState
         break;
         default: 
               return state

     }
}