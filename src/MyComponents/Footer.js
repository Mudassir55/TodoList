import React from 'react'


export const Footer = () => {

    let footerstyle = {
        position: "relative",
        top: "80vh",
        width: "100%",
    }
    return (

        < div className='bg-dark text-light py-4 ' style={footerstyle} >
            <p className='text-center'>© 2023 All rights reserved by Todo List</p>

        </div >
    )
}
