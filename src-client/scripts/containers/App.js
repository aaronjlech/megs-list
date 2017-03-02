import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actions';

class App extends Component {

   componentDidMount() {
      console.log('heyllo')
      console.log(this.props)
      const {dispatch} = this.props

      dispatch(actionCreators.fetchItems())
   }

   render(){
   console.log(this.props, 'hello')
      return(
         <div className="hey-there">
            <h1>Meg's List</h1>
         </div>
      )
   }

}


function mapStateToProps(state){
   console.log(state,"????")
   return{
      isFetching: false,
      items: []
   }
}
// function mapActionsToProps(){
//    return bindActionCreators(actionCreators)
// }


export default connect(mapStateToProps)(App)
