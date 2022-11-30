import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../view/auth/Login';

import Register from '../view/auth/Register';
import Home from '../view/content/Home';
import ProductDetail from '../view/content/ProductDetail';
import AddProduct from '../view/content/AddProduct';

class Routess extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/home" exact component={Home} />
                <Route path="/productDetail" exact component={ProductDetail} />
                <Route path="/addProduct" exact component={AddProduct} />
            </>
        )
    }
}

export default Routess;
