import React, {Component} from 'react';
import HelloWorld from './0.HelloWorld';
import Greetings from './1.Greetings';

class App extends Component {
    render() {
        return (
            //<HelloWorld />
            <Greetings name={'kamarul'}/>
        );
    }
}

export default App;
