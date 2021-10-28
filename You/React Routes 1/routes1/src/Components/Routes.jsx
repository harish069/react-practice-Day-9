import React from 'react'
import { Route, Switch } from "react-router-dom";

function Routes() {
    return (
        <div>
            <Switch>

                <Route exact path="/">
                    <h1>Home Page</h1>
                </Route>

                <Route path="/contact">
                    <h1>Contact Page</h1>
                </Route>

                <Route path="/about">
                    <h1>About Page</h1>
                </Route>

                <Route path="/services">
                    <h1>Services Page</h1>
                </Route>

                <Route path="/login">
                    <h1>Login Page</h1>
                </Route>
 
                 <Route>
                <h1>404 Not Found</h1>
                </Route>
                
            </Switch>
        </div>
    )
}

export default Routes
