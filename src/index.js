import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
//import "assets/demo/demo.css";

import Index from "views/Index.js";
//import Index from "./views/Index.js";
//import PageHeader from './components/PageHeader';
import ErroStripe from 'components/ErroStripe.js';

//import ProfilePage from './views/examples/ProfilePage';

//import ProfilePage from "views/examples/ProfilePage.js";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/components"  render={(props) => <Index {...props} />} />
            {/* <Route path="/profile-page" render={(props) => <ProfilePage {...props} />} /> */}
            <Route path="/redirect" exact={true} render={(props) => <ErroStripe {...props} />} />
            <Redirect from="/" to="/components" />

            {/* <Route path="/components" component={Index} />
            <Route path="/redirect" component={ErroStripe} />
            <Redirect from="/" to="/components" /> */}

        </Switch>
    </BrowserRouter>,

    document.getElementById('root')
);


