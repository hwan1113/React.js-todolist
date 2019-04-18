import React from 'react';
import {AddNoteAc} from '../actions/AddNote';
import {connect} from 'react-redux';
import Bigcard from './Bigcard';



class AddNote extends React.Component {

    render(){
        var childCard=[]
        for(var i=0; i<this.props.addReducer; i++){
            childCard.push(<Bigcard key={Math.random()}/>)
        }
        return(
        <div>
        {childCard}
        <button onClick={()=>{this.props.AddNoteAc()}}className="positive ui button">Add Card</button>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {addReducer: state.addReducer}
}

export default connect(mapStateToProps, {
    AddNoteAc: AddNoteAc
})(AddNote);