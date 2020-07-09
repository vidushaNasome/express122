//Nasome P.V.R.D.V.
//IT18011494
//aaaaaaaaaaaaa
import React, {Component} from 'react';
import Tourism from "./Tourism";
import Main from "./Main";
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <Router>
            <Route  path="/" exact component={Main}/>
            <Route  path="/tourism" exact component={Tourism} />
            </Router>
        </div>
    );
  }
}

export default App;
