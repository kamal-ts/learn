import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { About, Contac, Home} from '../../pages'

export class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contac">
                        <Contac/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes
