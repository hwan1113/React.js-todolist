import React from 'react';
import {connect} from 'react-redux';
import {noteContent} from '../actions';
import {SaveContent} from '../actions/SaveContent';



class Bigcard extends React.Component{

    handleSubmit=()=>{
        this.props.SaveContent(this.props.noteReducer.title,this.props.noteReducer.content)
    }

    render(){
        return(
            <div className="ui card">
                <div className="content">
        
                        <div className="header">
                            <input onBlur={(e)=>this.props.noteContent(e.target.value,this.props.noteReducer.content)} 
                            value ={this.props.noteReducer.title} type="text"/>
                        </div>
                        <div className="description">
                            <textarea onBlur={(e)=>this.props.noteContent(this.props.noteReducer.title,e.target.value)} 
                            value={this.props.noteReducer.content}></textarea>
                        </div>
                        <button onClick={this.handleSubmit}>save</button>
                
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return {noteReducer: state.noteReducer}
}

export default connect(mapStateToProps, {
    noteContent: noteContent,
    SaveContent: SaveContent
})(Bigcard);
