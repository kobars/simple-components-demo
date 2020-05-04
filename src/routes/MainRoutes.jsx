import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import Api from '../pages/Api'
import Oci from '../pages/Oci'
import Counter from '../pages/Counter'
import Nodispatch from '../pages/Nodispatch'
import { Provider } from 'react-redux'
import store from '../store'

const MainRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/list" component={List} />
                    <Route exact path="/api" component={Api} />
                    <Route exact path="/oci" component={Oci} />
                    <Route exact path="/counter" component={Counter} />
                    <Route exact path="/nodispatch" component={Nodispatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
export default MainRoutes
