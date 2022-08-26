import React, {useState, useEffect} from 'react'
import plantsData from './plant.json'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { GridView } from './GridView'
import { Cart } from './Cart'
import { CartView } from './CartView'

export function App() {
    const [plants, setPlants] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        setPlants(plantsData)
        
    }, [])

    function addToCart(plant) {
        setCart([...cart, plant])
    }

    return (
        <section>
            <BrowserRouter>
                <header className="flex justify-end items-center pr4 pl4">
                    <h1 className="flex-auto"><Link to="/">Plants</Link></h1>
                    <Cart cart={cart} />
                    
                </header>
                <Routes>
                    <Route path="/" element={<GridView plants={plants} addToCart={addToCart}/>}/>
                    <Route path="/cart" element={<CartView cart={cart}/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    )
}