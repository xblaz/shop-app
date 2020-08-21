import React from 'react';
import iconoCarrito from '../../utils/images/icono.svg';

const CartIcon = () => {
    return (
        <div id="iconoCart" className="iconoCart">
            <img src={iconoCarrito} alt="CartIcon" />
        </div>

    )
}
export default CartIcon;