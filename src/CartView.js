export function CartView({cart}) {
    function getTotal () {
        return cart.reduce((total, item) => {
            return total + item.price
        }, 0)
    }
    return (
        <section className="w5 center bg-light-gray pa4 br3">
            <h2>Your Cart</h2>
            <ol>
                {cart.map(item => {
                    return <li className="pa2 tr">{item.name} £{item.price}</li>
                })}
            </ol>
            <h3>Total £{getTotal().toFixed(2)}</h3>
        </section>
    )
}