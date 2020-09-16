import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './Contact'

import Error from './Error'
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu'

const RouteMain = () => {
    return (
        <React.Fragment>
            <Menu></Menu>
            <Switch>
                <Route path="/" component={AboutUs} exact></Route>
                <Route path="/contact" component={ContactUs} exact></Route>
                <Route component={Error}></Route>
            </Switch>
        </React.Fragment>
    )
}

export default RouteMain;