import React from 'react'

import {Navbar} from "./Navbar"

export const NotFound = () => {
    return (
        // <div className='container-fluid'>
        <>
            <Navbar/>
        <div  style={{display:"flex" , alignItems:"center" , justifyContent:"center" , fontWeight:"bold" , fontSize : "2rem" , margin:"16rem 0 "}}>
            Error 404 : Page Not found
        </div>
        </>
    )
}