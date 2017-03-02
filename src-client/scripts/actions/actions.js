import axios from 'axios';


export const requestItems = items =>{
   console.log('wthdf')
   return {
      type: 'REQUEST_ITEMS',
      items
   }
}
export const receiveItems = items =>{
   console.log('waht')
   return{
   type: "RECEIVE_ITEMS",
   items
   }
}


export const fetchItems = items => dispatch =>{

   return axios('/api/item').then(response => {
      console.log('hey there', response.data)
      return dispatch(receiveItems(response.data))
   })
}
