import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css"

import Header from "./CommonComponent/HeaderComponent";
import Home from "./AppComponents/Product/DisplayProduct";
import Footer from "./CommonComponent/FooterComponent";
import NotFound from "./CommonComponent/NotFound";
import Login from "./AppComponents/User/login";
import Signup from "./AppComponents/User/signup";
import SaveProducts from "./AppComponents/Product/AddProducts"
import Cart from "./AppComponents/Cart/Cart"
import CheckOut from "./AppComponents/CheckOut/CheckOut"
export default class Application extends Component {
        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/home" element={<Home />}/>
                            <Route path="*" element={<NotFound />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/saveProducts" element={<SaveProducts />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<CheckOut />} />
                        </Routes>
                    <Footer />
                    </Suspense>
                </Router>
            )
        }
}