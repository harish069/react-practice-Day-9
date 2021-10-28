import React from 'react'
import { Route, Switch } from "react-router-dom";
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';

function Routes() {
    return (
        <div>

            <Switch>
                <Route exact path="/">
                    <h1>Home Page</h1>
                </Route>

                <Route exact path="/allproducts">
                    <AllProducts/>
                </Route>

                <Route path="/allproducts/:id">
                    <ProductDetails/> 
                </Route>
                
                <Route>
                <h1>404 Not Found</h1>
                </Route>
                
        </Switch>
            
        </div>
    )
}

export default Routes
