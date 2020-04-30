import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import Api from '../pages/Api'
import Oci from '../pages/Oci'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/list" component={List} />
                <Route exact path="/api" component={Api} />
                <Route exact path="/oci" component={Oci} />
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoutes
