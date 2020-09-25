import React from 'react';
import { Link } from 'react-router-dom';
import iconoCarrito from '../../utils/images/icono.svg';

const CartIcon = () => {
    return (
        <div id="iconoCart" className="iconoCart">
            <Link to="/cart"><img src={iconoCarrito} alt="CartIcon" /></Link>
        </div>

    )
}
export default CartIcon;