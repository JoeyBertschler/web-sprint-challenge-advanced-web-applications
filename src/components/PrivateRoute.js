//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

// const PrivateRoute = ( {component: Component, ...rest} )=>{
//     return (
//         <>
//         <Route {...rest}
//                 render={props=>{
//                     if(localStorage.getItem('token')) {
//                         return <Component {...props} />
//                     }
//                     return <Redirect to='/'/>
//                 }}
//         />
//         </>
//     )
// }
// nevermind this is too convuluted, let's keep it simpel

const PrivateRoute = (props)=>{
    const theToken = localStorage.getItem('token')
    return theToken ?
    <Route path='/bubbles' component={props} /> :
    <Redirect to='/'/>
}

// or
// import Component from "./location"
// <Route path='/pathName component ={Component}/>

export default PrivateRoute