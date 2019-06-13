import React from 'react';
import {Switch} from "react-router-dom";

import {Router, Route} from "react-router-dom";
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './header';
import history from '../history';

class App extends React.Component {
    
    render() {
        return (
             <div>
                 <Router history={history}>
                     <Header/>
                     <div>
                         <Switch>
                         <Route path={"/"} exact component={StreamList}/>
                         <Route path={"/streams/new"} exact component={StreamCreate}/>
                         <Route path={"/streams/edit/:id"}  exact component={StreamEdit}/>
                         <Route path={"/streams/delete/:id"} exact component={StreamDelete}/>
                         <Route path={"/streams/:id"} exact component={StreamShow}/>
                         </Switch>
                     </div>
                 </Router>
             </div>
        );
    };
};

export default App;