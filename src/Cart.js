import React from 'react'
import { Link } from 'react-router-dom'

export function Cart (props) {
    const {cart} = props
    return (
        <section className='f1'>
            <Link to="/cart">({cart.length})🛒</Link>
        </section>
    )
}