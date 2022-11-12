import React, { useState } from "react";
import 'react-dropdown/style.css';
import "./styles.css";
import axios from 'axios';
// import Cookies from "universal-cookie";
// const cookies = new Cookies();
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Login from "./Login";
import Query from "./Query";
import Students from "./Students";
import Tas from "./Tas";
import App from "./App";
function Layout() {
    return (

        <div className="app">

            <>
                {/* This is the alias of BrowserRouter i.e. Router */}
                <Router>
                    <Routes>
                        {/* This route is for home component 
            with exact path "/", in component props 
            we passes the imported component*/}
                        {/* <Route element={<PrivateRoutes />}> */}
                        <Route exact path="/" element={<App />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/tas/queries" element={<Tas />} />
                        <Route path="/students" element={<Students />} />
                        <Route path="/query" element={<Query />} />
                        {/* </Route> */}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                    </Routes>
                </Router>
            </>
        </div>

    )
};

export default Layout;