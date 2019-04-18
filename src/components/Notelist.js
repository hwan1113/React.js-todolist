import React from 'react';
import {connect} from 'react-redux';

class Notelist extends React.Component{

    renderList(){
        return this.props.saveReducer.map((note)=>{
            return(
                    <div className="item" key={Math.random()}>
                        <i className="map marker icon"></i>
                        <div className="content">
                            <a href="http://www.google.com" className="header">{note.title}</a>
                            <div className="description">{note.content}</div>
                        </div>
                    </div>
                )
        })
    }


    render(){
        console.log(this.props.saveReducer)
        return(
        <div style={{display:"inline", right:"0",width:"500px",position:"fixed"}}className="ui list">
        {this.renderList()}
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {saveReducer: state.saveReducer};
}

export default connect(mapStateToProps)(Notelist);
