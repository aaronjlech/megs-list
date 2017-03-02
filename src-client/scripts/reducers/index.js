import { combineReducers } from 'redux';

const initialState = {
   isFetching: false,
   items: []
}
const items = function(state = initialState, action){
   console.log(action, 'firing')

   switch (action.type) {
      case "REQUEST_ITEMS":
      console.log('fiahh')
         let newState = state
         newState.isFetching = true
         return newState
         break;
      case "FETCH_ITEMS":
         console.log('workin?')
      case "RECEIVE_ITEMS":
      console.log(state, action, 'receiving')
      return {
            items: action.items,
            isFetching: false
         }
         break;
      default:
      console.log('heyloasdfafo?')
         return state;
   }

}
export const rootReducer = combineReducers({items})
