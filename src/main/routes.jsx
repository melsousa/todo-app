import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';

export default props =>(
    // estrategias de registro
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}/>
        <Route path='/about' component={About}/>
        {/* quando se acessar qualquer outra url */}
        <Redirect from ='*' to='todos'/>
    </Router>
)