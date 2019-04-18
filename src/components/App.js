import React from 'react';
import Bigcard from './Bigcard';
import AddNote from './AddNote';
import Notelist from './Notelist';


class App extends React.Component{


    render(){
        return(
            <div>
            <Notelist />
            <Bigcard key={Math.random()}/>
            <AddNote/>
            </div>
        )
    }
}

export default App;
